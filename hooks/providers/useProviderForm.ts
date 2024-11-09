'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Provider } from '@/types';
import { ProviderFormData, providerSchema } from '@/schemas/provider-schema';
import { parseProviderData } from '@/lib/parseProviderData';
import { useMutation } from '../useMutation';

export const useProviderForm = ({ provider }: { provider?: Provider }) => {
  const { mutate, back, isSubmitting } = useMutation();
  const form = useForm<ProviderFormData>({
    resolver: zodResolver(providerSchema),
    defaultValues: {
      firstName: provider?.name.firstName || '',
      lastName: provider?.name.lastName || '',
      dni: provider ? `${provider.dni.type + provider.dni.number}` : '',
      phone: provider?.phone || '',
      email: provider?.email || '',
      password: provider?.password || '',
      companyName: provider?.company.name || '',
      description: provider?.company.description || '',
      rif: provider?.company.rif || '',
      state: provider?.company.state || '',
      city: provider?.company.city || '',
    },
  });

  React.useEffect(() => {
    if (provider) {
      form.reset({
        ...provider,
        dni: `${provider.dni.type + provider.dni.number}`,
      } as unknown as ProviderFormData);
    }
  }, [provider, form]);

  async function onSubmit(values: ProviderFormData) {
    const parsedData = parseProviderData(values);
    if (provider) {
      await mutate({
        body: { provider: { ...values, id: provider.id } },
        route: '/providers-service/providers',
        method: 'PUT',
      });
    } else {
      console.log({ provider: parsedData });
      await mutate({
        body: { provider: parsedData },
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
