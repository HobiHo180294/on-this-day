import {
  Error,
  Loader,
  Modal,
  Notification,
  StickHeadLeft,
  StickHeadRight,
} from '@/components/ui';
import { useHighlightsByCategoryOnThisDay } from '@/lib/hooks';
import errorIcon from '@/public/error-ico.svg';
import { Highlight } from '@/shared/types/onThisDayAPI';
import { useEffect, useState } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import { HighlightsGrid } from '../HighlightGrid/HighlightsGrid';
import { HighlightsFeedOnThisDayProps } from './HighlightsFeedOnThisDay.interface';
import styles from './HighlightsFeedOnThisDay.module.scss';

export const HighlightsFeedOnThisDay = ({
  amountPerPage,
  category,
}: HighlightsFeedOnThisDayProps): React.JSX.Element => {
  const { data, error, isError, isLoading, isFetching } =
    useHighlightsByCategoryOnThisDay({
      category,
    });

  const [currentHighlights, setCurrentHighlights] = useState<Highlight[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (data?.[category]?.length) {
      const totalHighlights = data[category].length;
      const newPageCount = Math.ceil(totalHighlights / amountPerPage);
      setPageCount(newPageCount);

      const safeCurrentPage = Math.min(currentPage, newPageCount - 1);
      setCurrentPage(safeCurrentPage);

      const startOffset = safeCurrentPage * amountPerPage;
      const endOffset = startOffset + amountPerPage;
      setCurrentHighlights(data[category].slice(startOffset, endOffset));
    }
  }, [category, data, amountPerPage, currentPage]);

  const handlePageClick: ReactPaginateProps['onPageChange'] = selectedItem => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <div className={styles.feed}>
      {isLoading || isFetching ? (
        <Loader />
      ) : isError ? (
        <Modal
          isOpen={isError}
          icon={{
            src: errorIcon,
            alt: 'Application Error',
          }}
        >
          <Error message={error.message} />
        </Modal>
      ) : data?.[category]?.length ? (
        <>
          <HighlightsGrid highlights={currentHighlights} />
          {pageCount > 1 && (
            <ReactPaginate
              breakLabel="..."
              nextLabel={<StickHeadRight />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel={<StickHeadLeft />}
              renderOnZeroPageCount={null}
              forcePage={currentPage}
              containerClassName={styles.feed__pagination}
              pageClassName={styles.pagination__page}
              pageLinkClassName={styles.pagination__link}
              activeClassName={styles.pagination__active}
              activeLinkClassName={styles.pagination__active_link}
              previousClassName={styles.pagination__prev}
              previousLinkClassName={styles.pagination__prev_link}
              nextClassName={styles.pagination__next}
              nextLinkClassName={styles.pagination__next_link}
              breakClassName={styles.pagination__break}
              breakLinkClassName={styles.pagination__break_link}
              disabledClassName={styles.pagination__disabled}
              data-testid="react-paginate"
            />
          )}
        </>
      ) : (
        <Notification message="Unfortunately, nothing is here yet" />
      )}
    </div>
  );
};
