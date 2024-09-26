'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Provider } from '@/types';
import { useToast } from '../use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Nombre must be at least 2 characters.',
  }),
  admin: z.string().min(2, {
    message: 'Seleccione un administrador',
  }),
  rif: z.string().min(2, {
    message: 'Ingrese un rif válido',
  }),
});

export const useProviderForm = ({ provider }: { provider?: Provider }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      admin: '',
    },
  });

  useEffect(() => {
    if (provider) {
      form.reset(provider);
    }
  }, [provider, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
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
