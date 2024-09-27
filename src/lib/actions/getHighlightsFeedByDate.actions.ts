'use server';

import {
  Category,
  CurrentDayInfo,
  HighlightsFeed,
  Language,
} from '@/shared/types/onThisDayAPI';

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

  const eventsObject: HighlightsFeed = await response.json();

  return eventsObject;
}
