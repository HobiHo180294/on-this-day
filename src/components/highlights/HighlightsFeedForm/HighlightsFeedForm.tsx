'use client';

import { Category } from '@/shared/types/onThisDayAPI';
import { useState } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { HighlightsFeedOnThisDay } from '../HighlightsFeedOnThisDay/HighlightsFeedOnThisDay';
import { HighlightsSelect } from '../HighlightsSelect/HighlightsSelect';
import { HighlightsFeedFormFieldsConfig } from './HighlightsFeedForm.interface';

export const HighlightsFeedForm = (): React.JSX.Element => {
  const { handleSubmit } = useFormContext<HighlightsFeedFormFieldsConfig>();
  const [category, setCategory] = useState<Category['category']>('selected');
  const [isInitialFeedShown, setIsInitialFeedShown] = useState<boolean>(false);

  const onSubmit: SubmitHandler<HighlightsFeedFormFieldsConfig> = () => {
    setIsInitialFeedShown(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isInitialFeedShown ? (
        <>
          <HighlightsSelect category={category} setCategory={setCategory} />
          <HighlightsFeedOnThisDay category={category} amountPerPage={6} />
        </>
      ) : (
        <button type="submit">Load feeds</button>
      )}
    </form>
  );
};
