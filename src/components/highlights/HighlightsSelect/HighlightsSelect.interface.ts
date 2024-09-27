import { Category } from '@/shared/types/onThisDayAPI';
import { Dispatch, SetStateAction } from 'react';

export interface Option {
  label: string;
  value: Category['category'];
}

export interface HighlightsSelectProps extends Category {
  setCategory: Dispatch<SetStateAction<Category['category']>>;
}
