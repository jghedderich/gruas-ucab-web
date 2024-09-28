'use client';

import { Truck } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  model: z.string().min(2, {
    message: 'Model must be at least 2 characters.',
  }),
  brand: z.string().min(2, {
    message: 'Brand must be at least 2 characters.',
  }),
  year: z
    .number()
    .int()
    .min(1900)
    .max(new Date().getFullYear() + 1),
  owner: z.string().min(1, {
    message: 'Please select an owner.',
  }),
});

export const useTruckForm = ({ truck }: { truck?: Truck }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: '',
      brand: '',
      year: new Date().getFullYear(),
      owner: '',
    },
  });

  useEffect(() => {
    if (truck) {
      form.reset(truck);
    }
  }, [truck, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
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
