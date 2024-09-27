'use client';

import { HighlightsFeedFormFieldsConfig } from '@/components/highlights/HighlightsFeedForm/HighlightsFeedForm.interface';
import { Children } from '@/shared/types/globals';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export const HighlightsFeedFormProvider = ({
  children,
}: Children): React.JSX.Element => {
  const methods = useForm<HighlightsFeedFormFieldsConfig>({
    mode: 'onSubmit',
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
