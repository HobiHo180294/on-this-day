import { Category } from '@/shared/types/onThisDayAPI';

export interface HighlightsFeedOnThisDayProps extends Category {
  amountPerPage: number;
}
