'use client';

import {
  Category,
  CurrentDayInfo,
  HighlightsFeed,
} from '@/shared/types/onThisDayAPI';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getHighlightsFeedByDate } from '../actions';
import {
  HIGHLIGHTS_LANGUAGE,
  HIGHLIGHTS_STALE_TIME,
} from '../constants/highlights.constants';

export const useHighlightsByCategoryOnThisDay = ({
  category,
}: Category): UseQueryResult<HighlightsFeed, Error> => {
  const { MM, DD } = useMemo<CurrentDayInfo>(() => {
    const currentDate = new Date();

    return {
      MM: (currentDate.getMonth() + 1).toString().padStart(2, '0'),
      DD: currentDate.getDate().toString().padStart(2, '0'),
    };
  }, []);

  return useQuery({
    queryKey: ['highlights-feed-on-this-day', category],
    queryFn: () =>
      getHighlightsFeedByDate({
        category,
        language: HIGHLIGHTS_LANGUAGE.ENGLISH,
        MM,
        DD,
      }),
    enabled: !!category,
    staleTime: HIGHLIGHTS_STALE_TIME,
  });
};
