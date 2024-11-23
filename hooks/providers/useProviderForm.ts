/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Provider } from '@/types';
import { ProviderFormData, providerSchema } from '@/schemas/provider-schema';
import { useMutation } from '../useMutation';

export const useProviderForm = ({ provider }: { provider?: Provider }) => {
  const { mutate, back, isSubmitting } = useMutation();
  const form = useForm<ProviderFormData>({
    resolver: zodResolver(providerSchema),
    defaultValues: { ...provider } as ProviderFormData,
  });

  React.useEffect(() => {
    if (provider) {
      form.reset({
        provider,
      } as unknown as ProviderFormData);
    }
  }, [provider, form]);

  async function onSubmit(values: ProviderFormData) {
    if (provider) {
      // Remove email and password when updating a driver
      const { email, password, ...rest } = values;
      await mutate({
        body: { provider: { ...rest, id: provider.id } },
        route: '/providers-service/providers',
        method: 'PUT',
      });
    } else {
      await mutate({
        body: { provider: values },
        route: '/providers-service/providers',
        method: 'POST',
      });
    }
  }
  return {
    // state
    form,
    isSubmitting,

    // actions
    back,
    onSubmit,
  };
};
