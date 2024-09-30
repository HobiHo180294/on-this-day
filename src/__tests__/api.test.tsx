import { HIGHLIGHTS_REQUEST_ERROR } from '@/lib/constants/highlights.constants';
import { mockHighlight } from '@/lib/data/tests.data';
import { useHighlightsByCategoryOnThisDay } from '@/lib/hooks';
import { ReactQueryProvider } from '@/providers';
import { Category } from '@/shared/types/onThisDayAPI';
import { renderHook, waitFor } from '@testing-library/react';

describe('useHighlightsByCategoryOnThisDay hook', () => {
  it('successfully fetches highlights for a valid category', async () => {
    const { result } = renderHook(
      () => useHighlightsByCategoryOnThisDay({ category: 'selected' }),
      {
        wrapper: ReactQueryProvider,
      }
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    const highlight = result.current.data?.selected?.[0];
    expect(highlight).toEqual(
      expect.objectContaining({
        text: mockHighlight.text,
        year: mockHighlight.year,
        pages: mockHighlight.pages,
      })
    );
  });

  it('returns an error for an invalid category', async () => {
    const { result } = renderHook(
      () =>
        useHighlightsByCategoryOnThisDay({
          category: 'invalidCategory' as Category['category'],
        }),
      { wrapper: ReactQueryProvider }
    );

    await waitFor(() => expect(result.current.failureCount).toBeGreaterThan(0));

    expect(result.current.failureReason).toEqual(
      expect.objectContaining({
        cause: 400,
        message: HIGHLIGHTS_REQUEST_ERROR.BAD_REQUEST,
      })
    );
  });
});
