'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useToast } from '../use-toast';
import { useForm } from 'react-hook-form';
import { policyFormSchema, PolicyFormData } from '@/schemas/policy-schema';
import { Policy } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '../useMutation';

export const usePoliciesForm = ({ policy }: { policy?: Policy }) => {
  const { mutate, isSubmitting } = useMutation();
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<PolicyFormData>({
    resolver: zodResolver(policyFormSchema),
    defaultValues: {
      name: policy?.name || '',
      price: {
        annualPrice: policy?.price.annualPrice,
        monthlyPrice: policy?.price.monthlyPrice,
      },
      fees: {
        baseFee: policy?.fees.baseFee,
        perKm: policy?.fees.perKm,
      },
      amountCovered: policy?.amountCovered,
    },
  });

  useEffect(() => {
    if (policy) {
      form.reset(policy);
    }
  }, [policy, form]);

  async function onSubmit(values: PolicyFormData) {
    if (policy) {
      await mutate({
        body: { policy: { ...values, id: policy.id } },
        route: '/orders-service/policies',
        method: 'PUT',
      });
      toast({
        title: 'Póliza actualizado',
        description: 'La póliza se ha actualizado correctamente.',
      });
    } else {
      await mutate({
        body: { policy: values },
        route: '/orders-service/policies',
        method: 'POST',
      });
      toast({
        title: 'Póliza creada',
        description: 'La póliza se ha creado correctamente.',
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
