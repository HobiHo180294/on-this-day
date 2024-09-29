import { GroupBase, StylesConfig } from 'react-select';
import { Option } from './HighlightsSelect.interface';

const fontSize = '1.8rem';
const commonMaxWidth = '20rem';

export const highlightsSelectStylesSheet: StylesConfig<
  Option,
  false,
  GroupBase<Option>
> = {
  container: provided => ({
    ...provided,
    maxWidth: commonMaxWidth,
  }),
  control: provided => ({
    ...provided,
    fontSize,
    maxWidth: '100%',
  }),
  menu: provided => ({
    ...provided,
    maxWidth: commonMaxWidth,
  }),
  option: provided => ({
    ...provided,
    fontSize,
  }),
  singleValue: provided => ({
    ...provided,
    fontSize,
  }),
  multiValue: provided => ({
    ...provided,
    fontSize,
  }),
};
