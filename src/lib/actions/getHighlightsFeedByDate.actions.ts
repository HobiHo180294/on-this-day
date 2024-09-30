'use server';

import {
  GetHighlightsFeedByDateActionParamsConfig,
  HighlightsFeed,
} from '@/shared/types/onThisDayAPI';
import { HIGHLIGHTS_REQUEST_ERROR } from '../constants/highlights.constants';

export async function getHighlightsFeedByDate({
  language,
  category,
  MM,
  DD,
}: GetHighlightsFeedByDateActionParamsConfig): Promise<HighlightsFeed> {
  const response = await fetch(
    `${process.env.WIKIPEDIA_FEED_API_BASE_URL}/feed/v1/wikipedia/${language}/onthisday/${category}/${MM}/${DD}`
  );

  if (!response.ok)
    switch (response.status) {
      case 400:
        throw new Error(HIGHLIGHTS_REQUEST_ERROR.BAD_REQUEST, { cause: 400 });
      case 404:
        throw new Error(HIGHLIGHTS_REQUEST_ERROR.NO_DATA_FOUND, { cause: 404 });
      case 501:
        throw new Error(HIGHLIGHTS_REQUEST_ERROR.UNSUPPORTED_LANGUAGE, {
          cause: 501,
        });
      default:
    }

  const eventsObject: HighlightsFeed = await response.json();

  return eventsObject;
}
