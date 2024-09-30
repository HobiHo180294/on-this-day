import { HIGHLIGHTS_REQUEST_ERROR } from '@/lib/constants/highlights.constants';
import { mockHighlight } from '@/lib/data/tests.data';
import {
  Category,
  GetHighlightsFeedByDateActionParamsConfig,
  HighlightsFeed,
  Language,
} from '@/shared/types/onThisDayAPI';
import { http, HttpResponse } from 'msw';

type AvailableCategory = Category['category'] | 'all';

const baseURL = process.env.WIKIPEDIA_FEED_API_BASE_URL;

const availableLanguages: Language[] = [
  'ar',
  'bs',
  'de',
  'en',
  'es',
  'fr',
  'it',
  'pt',
  'sv',
  'tr',
  'uk',
  'zh',
];

const availableCategories: AvailableCategory[] = [
  'births',
  'deaths',
  'events',
  'holidays',
  'selected',
  'all',
];

export const handlers = [
  http.get<
    GetHighlightsFeedByDateActionParamsConfig,
    never,
    HighlightsFeed | Error
  >(
    `${baseURL}/feed/v1/wikipedia/:language/onthisday/:category/:MM/:DD`,
    ({ params }) => {
      const { language, category, MM } = params;

      const isMonthValid = Number(MM) > 0 && Number(MM) < 13;
      const isDayValid = Number(MM) > 0 && Number(MM) < 32;

      if (
        availableLanguages.includes(language) &&
        availableCategories.includes(category) &&
        isMonthValid &&
        isDayValid
      ) {
        return HttpResponse.json(
          {
            [category]: [mockHighlight],
          },
          { status: 200 }
        );
      }

      if (!availableLanguages.includes(language)) {
        return HttpResponse.json(
          new Error(HIGHLIGHTS_REQUEST_ERROR.UNSUPPORTED_LANGUAGE),
          { status: 501 }
        );
      }

      if (!availableCategories.includes(category)) {
        return HttpResponse.json(
          new Error(HIGHLIGHTS_REQUEST_ERROR.BAD_REQUEST),
          {
            status: 400,
          }
        );
      }

      return HttpResponse.json(
        new Error(HIGHLIGHTS_REQUEST_ERROR.NO_DATA_FOUND),
        {
          status: 404,
        }
      );
    }
  ),
];
