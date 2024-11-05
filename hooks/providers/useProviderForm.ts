'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Provider } from '@/types';
import { useToast } from '../use-toast';
import { ProviderFormData, providerSchema } from '@/schemas/provider-schema';
import { fetchData } from '@/lib/fetchData';
import { parseProviderData } from '@/lib/parseProviderData';

export const useProviderForm = ({ provider }: { provider?: Provider }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back, refresh } = useRouter();
  const { toast } = useToast();

  const form = useForm<ProviderFormData>({
    resolver: zodResolver(providerSchema),
    defaultValues: {
      firstName: provider?.name.firstName || '',
      lastName: provider?.name.lastName || '',
      dni: '',
      phone: '',
      email: '',
      password: '',
      companyName: '',
      description: '',
      rif: '',
      state: '',
      city: '',
    },
  });

  useEffect(() => {
    if (provider) {
      form.reset(provider as unknown as ProviderFormData);
    }
  }, [provider, form]);

  async function onSubmit(values: ProviderFormData) {
    try {
      setIsSubmitting(true);
      const parsedData = parseProviderData(values);
      await fetchData('/providers-service/providers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData),
      });
      back();
      refresh();
      if (provider) {
        toast({
          title: 'Proveedor actualizado',
          description: 'El proveedor se ha actualizado correctamente.',
        });
      } else {
        toast({
          title: 'Proveedor creado',
          description: 'El proveedor se ha creado correctamente.',
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error al crear el proveedor',
        description: 'El proveedor no se ha creado correctamente.',
        variant: 'destructive',
      });
    }
    setIsSubmitting(false);
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
