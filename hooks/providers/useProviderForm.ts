'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Provider } from '@/types';
import { useToast } from '../use-toast';
import { ProviderFormData, providerSchema } from '@/schemas/provider-schema';

export const useProviderForm = ({ provider }: { provider?: Provider }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();
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
      form.reset(provider);
    }
  }, [provider, form]);

  function onSubmit(values: ProviderFormData) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
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
    }, 2000);
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
