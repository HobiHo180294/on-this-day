import { Modal, Notification } from '@/components/ui';
import infoIcon from '@/public/info-ico.svg';
import { Nullable } from '@/shared/types/globals';
import Link from 'next/link';
import { useState } from 'react';
import { HighlightCard } from '../HighlightCard/HighlightCard';
import { HighlightsGridProps } from './HighlightsGrid.interface';
import styles from './HighlightsGrid.module.scss';

export const HighlightsGrid = ({
  highlights,
}: HighlightsGridProps): React.JSX.Element => {
  const [openHighlightID, setOpenHighlightID] =
    useState<Nullable<string>>(null);

  return (
    <div className={styles.grid}>
      {highlights.map(highlight => (
        <HighlightCard
          key={`${highlight.year}: ${highlight.text}`}
          highlight={highlight}
          setOpenHighlightID={setOpenHighlightID}
        />
      ))}

      <Modal
        icon={{
          src: infoIcon,
          alt: 'Resources',
        }}
        isOpen={Boolean(openHighlightID)}
        onClose={() => {
          setOpenHighlightID(null);
        }}
      >
        {openHighlightID ? (
          <ul className={styles.grid__learn}>
            {highlights
              .find(highlight => highlight.text === openHighlightID)
              ?.pages.map(page => (
                <li key={page.pageid} className={styles.learn__item}>
                  <Link
                    className={styles.learn__link}
                    href={page.content_urls.desktop.page}
                    target="_blank"
                  >
                    {page.titles.normalized}
                  </Link>
                </li>
              ))}
          </ul>
        ) : (
          <Notification message="Closing..." />
        )}
      </Modal>
    </div>
  );
};
