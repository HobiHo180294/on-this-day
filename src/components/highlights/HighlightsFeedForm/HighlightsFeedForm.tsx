'use client';

import { HIGHLIGHTS_FEED_QUERY_KEY } from '@/lib/constants/highlights.constants';
import { Category } from '@/shared/types/onThisDayAPI';
import { useIsFetching } from '@tanstack/react-query';
import { useState } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { HighlightsFeedOnThisDay } from '../HighlightsFeedOnThisDay/HighlightsFeedOnThisDay';
import { HighlightsSelect } from '../HighlightsSelect/HighlightsSelect';
import { HighlightsFeedFormFieldsConfig } from './HighlightsFeedForm.interface';
import styles from './HighlightsFeedForm.module.scss';

export const HighlightsFeedForm = (): React.JSX.Element => {
  const { handleSubmit } = useFormContext<HighlightsFeedFormFieldsConfig>();

  const [category, setCategory] = useState<Category['category']>('selected');
  const [isInitialFeedShown, setIsInitialFeedShown] = useState<boolean>(false);
  const isFetching = useIsFetching({
    queryKey: [`${HIGHLIGHTS_FEED_QUERY_KEY}`],
  });

  const onSubmit: SubmitHandler<HighlightsFeedFormFieldsConfig> = () => {
    setIsInitialFeedShown(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.form__title}>
        Explore Wikipedia&apos;s daily highlights
      </h1>
      {isInitialFeedShown ? (
        <fieldset className={styles.form__group}>
          {!isFetching && (
            <HighlightsSelect category={category} setCategory={setCategory} />
          )}
          <HighlightsFeedOnThisDay category={category} amountPerPage={6} />
        </fieldset>
      ) : (
        <button type="submit" className={styles.form__load}>
          Load Highlights
        </button>
      )}
    </form>
  );
};
