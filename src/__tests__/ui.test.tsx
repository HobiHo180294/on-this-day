import { HighlightCard, HighlightsFeedForm } from '@/components/highlights';
import { mockHighlight } from '@/lib/data/tests.data';
import { useHighlightsByCategoryOnThisDay } from '@/lib/hooks';
import { HighlightsFeedFormProvider, ReactQueryProvider } from '@/providers';
import { Children } from '@/shared/types/globals';
import { render, renderHook, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const AppProvider = ({ children }: Children): React.JSX.Element => (
  <ReactQueryProvider>
    <HighlightsFeedFormProvider>{children}</HighlightsFeedFormProvider>
  </ReactQueryProvider>
);

describe('HighlightsFeedForm Component', () => {
  it('renders the initial state with title and load button', () => {
    render(<HighlightsFeedForm />, { wrapper: AppProvider });

    expect(
      screen.getByRole('heading', {
        name: /explore wikipedia's daily highlights/i,
      })
    ).toBeInTheDocument();

    const loadHighlightsButton = screen.getByRole('button', {
      name: /load highlights/i,
    });
    expect(loadHighlightsButton).toBeInTheDocument();
    expect(loadHighlightsButton).toBeEnabled();
  });

  it('displays a loader and fetches highlights after clicking the load button', async () => {
    render(<HighlightsFeedForm />, { wrapper: AppProvider });
    const user = userEvent.setup();
    const loadHighlightsButton = screen.getByRole('button', {
      name: /load highlights/i,
    });

    await user.click(loadHighlightsButton);
    expect(loadHighlightsButton).not.toBeInTheDocument();

    const { result } = renderHook(
      () => useHighlightsByCategoryOnThisDay({ category: 'selected' }),
      {
        wrapper: ReactQueryProvider,
      }
    );

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();

    await waitFor(() => expect(result.current.isFetched).toBe(true));

    const highlights = screen.getAllByRole('article');
    expect(highlights.length).toBeLessThanOrEqual(6);

    if (highlights.length <= 6) {
      expect(screen.queryByTestId('react-paginate')).not.toBeInTheDocument();
    }
  });
});

describe('HighlightCard Component', () => {
  it('renders all highlight details including image, headings, description, and year', () => {
    const mockSetState = jest.fn();

    render(
      <HighlightCard
        highlight={mockHighlight}
        setOpenHighlightID={mockSetState}
      />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByRole('heading').length).toBe(2);
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /read more/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('mark')).toBeInTheDocument();
  });
});
