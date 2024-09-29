import { AdvancedImage } from '@/components/ui';
import notFoundImage from '@/public/not-found.jpg';
import { Nullable } from '@/shared/types/globals';
import { Highlight, HighlightImage } from '@/shared/types/onThisDayAPI';
import { HighlightCardProps } from './HighlightCard.interface';
import styles from './HighlightCard.module.scss';

const findThumbnail = (pages: Highlight['pages']): Nullable<HighlightImage> =>
  pages.find(page => page.thumbnail)?.thumbnail || null;

const findSubtitle = (pages: Highlight['pages']): Nullable<string> =>
  pages.find(page => page.description)?.description || null;

export const HighlightCard = ({
  highlight,
  setOpenHighlightID,
}: HighlightCardProps): React.JSX.Element => {
  const thumbnail = findThumbnail(highlight.pages);
  const subtitle = findSubtitle(highlight.pages);

  return (
    <article className={styles.highlight}>
      <div className={styles.highlight__media}>
        <AdvancedImage
          className={styles.media__image}
          src={thumbnail ? thumbnail.source : notFoundImage}
          alt={highlight.pages[0].titles.normalized}
          fill
          sizes="100%"
          priority
        />
      </div>

      <div className={styles.highlight__description}>
        <h2 className={styles.description__title}>
          {highlight.pages[0].titles.normalized}
        </h2>
        {subtitle && (
          <h3 className={styles.description__subtitle}>{subtitle}</h3>
        )}
        <p className={styles.description__text}>{highlight.text}</p>

        <div className={styles.description__more}>
          <button
            className={styles.more__button}
            type="button"
            onClick={() => setOpenHighlightID(highlight.text)}
          >
            Read More
          </button>

          <mark className={styles.more__year}>
            {!highlight.year
              ? 'Every year'
              : highlight.year < 0
                ? `${highlight.year} B.C.E`
                : highlight.year}
          </mark>
        </div>
      </div>
    </article>
  );
};
