'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AdditionalCost } from '@/types';
import { useToast } from '../use-toast';
import {
  AdditionalCostFormData,
  additionalCostSchema,
} from '@/schemas/additional-cost-schema';

export const useAdditionalCostForm = ({
  additionalCost,
}: {
  additionalCost?: AdditionalCost;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<AdditionalCostFormData>({
    resolver: zodResolver(additionalCostSchema),
  });

  useEffect(() => {
    if (additionalCost) {
      form.reset(additionalCost);
    }
  }, [additionalCost, form]);

  function onSubmit(values: AdditionalCostFormData) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      if (additionalCost) {
        toast({
          title: 'Costo adicional actualizado',
          description: 'El costo adicional se ha actualizado correctamente.',
        });
      } else {
        toast({
          title: 'Costo adicional creado',
          description: 'El costo adicional se ha creado correctamente.',
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
