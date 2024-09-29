import { Nullable } from '@/shared/types/globals';
import { Highlight } from '@/shared/types/onThisDayAPI';
import { Dispatch, SetStateAction } from 'react';

export interface HighlightCardProps {
  highlight: Highlight;
  setOpenHighlightID: Dispatch<SetStateAction<Nullable<string>>>;
}
