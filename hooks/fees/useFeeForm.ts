'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useToast } from '../use-toast';
import { useForm } from 'react-hook-form';
import { FeeFormData, feeFormSchema } from '@/schemas/fee-schema';
import { Fee } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';

export const useFeesForm = ({ fee }: { fee?: Fee }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<FeeFormData>({
    resolver: zodResolver(feeFormSchema),
  });

  useEffect(() => {
    if (fee) {
      form.reset(fee);
    }
  }, [fee, form]);

  function onSubmit(values: FeeFormData) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      if (fee) {
        toast({
          title: 'Tarifa actualizada',
          description: 'La tarifa se ha actualizado correctamente.',
        });
      } else {
        toast({
          title: 'Tarifa creada',
          description: 'La tarifa se ha creado correctamente.',
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
