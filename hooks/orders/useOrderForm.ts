'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Order } from '@/types';
import { orderFormSchema } from '@/schemas/order-schema';
import { useToast } from '../use-toast';

export const useOrderForm = ({ order }: { order?: Order }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      clientPolicy: '',
      clientName: '',
      clientPhone: '',
      clientDni: '',
      location: {
        street: '',
        urbanization: '',
        municipality: '',
        zipCode: '',
        city: '',
        state: '',
        latitude: 0,
        longitude: 0,
      },
      destination: {
        street: '',
        urbanization: '',
        municipality: '',
        zipCode: '',
        city: '',
        state: '',
        latitude: 0,
        longitude: 0,
      },
      description: '',
    },
  });

  useEffect(() => {
    if (order) {
      form.reset(order);
    }
  }, [order, form]);

  const onLocationSelect = useCallback(
    (location: { latitude: number; longitude: number }, fieldName: string) => {
      form.setValue(`${fieldName}.latitude`, location.latitude);
      form.setValue(`${fieldName}.longitude`, location.longitude);
    },
    [form]
  );

  function onSubmit(values: z.infer<typeof orderFormSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      if (order) {
        toast({
          title: 'Orden actualizada',
          description: 'La orden se ha actualizado correctamente.',
        });
      } else {
        toast({
          title: 'Orden creada',
          description: 'La orden se ha creado correctamente.',
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
    onLocationSelect,
  };
};
