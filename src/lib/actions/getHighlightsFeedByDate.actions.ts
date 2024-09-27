'use server';

import {
  Category,
  CurrentDayInfo,
  HighlightsFeed,
  Language,
} from '@/shared/types/onThisDayAPI';
import { HIGHLIGHTS_REQUEST_ERROR } from '../constants/highlights.constants';

interface ActionParamsConfig extends CurrentDayInfo, Category {
  language: Language;
}

export async function getHighlightsFeedByDate({
  language,
  category,
  MM,
  DD,
}: ActionParamsConfig): Promise<HighlightsFeed> {
  const response = await fetch(
    `${process.env.WIKIPEDIA_FEED_API_BASE_URL}/feed/v1/wikipedia/${language}/onthisday/${category}/${MM}/${DD}`
  );

  if (!response.ok)
    switch (response.status) {
      case 400:
        throw new Error(HIGHLIGHTS_REQUEST_ERROR.BAD_REQUEST);
      case 404:
        throw new Error(HIGHLIGHTS_REQUEST_ERROR.NO_DATA_FOUND);
      case 501:
        throw new Error(HIGHLIGHTS_REQUEST_ERROR.UNSUPPORTED_LANGUAGE);
      default:
    }

  const eventsObject: HighlightsFeed = await response.json();

  return eventsObject;
}
