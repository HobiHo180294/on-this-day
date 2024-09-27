import { useHighlightsByCategoryOnThisDay } from '@/lib/hooks';
import { Highlight } from '@/shared/types/onThisDayAPI';
import { useEffect, useState } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import { HighlightsFeedOnThisDayProps } from './HighlightsFeedOnThisDay.interface';

export const HighlightsFeedOnThisDay = ({
  amountPerPage,
  category,
}: HighlightsFeedOnThisDayProps): React.JSX.Element => {
  const { data } = useHighlightsByCategoryOnThisDay({ category });

  const [currentHighlights, setCurrentHighlights] = useState<Highlight[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [highlightOffset, setHighlightOffset] = useState(0);

  useEffect(() => {
    if (data?.[category]) {
      const endOffset = highlightOffset + amountPerPage;
      setCurrentHighlights(data[category].slice(highlightOffset, endOffset));
      setPageCount(Math.ceil(data[category].length / amountPerPage));
    }
  }, [category, data, highlightOffset, amountPerPage]);

  const handlePageClick: ReactPaginateProps['onPageChange'] = selectedItem => {
    if (data?.[category]) {
      const newOffset =
        (selectedItem.selected * amountPerPage) % data[category].length;
      setHighlightOffset(newOffset);
    }
  };

  return (
    <div>
      <div>
        {currentHighlights.map(highlight => (
          <div key={highlight.text}>
            <h3>{highlight.year}</h3>
            <p>{highlight.text}</p>
          </div>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
