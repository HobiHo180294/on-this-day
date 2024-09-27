import { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select, { SingleValue } from 'react-select';
import { HighlightsFeedFormFieldsConfig } from '../HighlightsFeedForm/HighlightsFeedForm.interface';
import { HighlightsSelectProps, Option } from './HighlightsSelect.interface';

export const HighlightsSelect = ({
  category,
  setCategory,
}: HighlightsSelectProps): React.JSX.Element => {
  const { control } = useFormContext<HighlightsFeedFormFieldsConfig>();

  const options = useMemo<Option[]>(
    () => [
      {
        label: 'Curated Events',
        value: 'selected',
      },
      {
        label: 'Births',
        value: 'births',
      },
      {
        label: 'Deaths',
        value: 'deaths',
      },
      {
        label: 'Other Events',
        value: 'events',
      },
      {
        label: 'Fixed Holidays',
        value: 'holidays',
      },
    ],
    []
  );

  const currentValue = useMemo<Option | undefined>(
    () => options.find(option => option.value === category),
    [category, options]
  );

  const handleChange = (newValue: SingleValue<Option>): void =>
    setCategory(newValue?.value as Option['value']);

  return (
    <Controller
      control={control}
      name="select"
      render={({ field }) => (
        <Select
          {...field}
          instanceId="highlights-select"
          options={options}
          value={currentValue}
          onChange={handleChange}
        />
      )}
    />
  );
};
