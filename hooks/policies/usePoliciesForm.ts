'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useToast } from '../use-toast';
import { useForm } from 'react-hook-form';
import { policyFormSchema, PolicyFormData } from '@/schemas/policy-schema';
import { Policy } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';

export const usePoliciesForm = ({ policy }: { policy?: Policy }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<PolicyFormData>({
    resolver: zodResolver(policyFormSchema),
  });

  useEffect(() => {
    if (policy) {
      form.reset(policy);
    }
  }, [policy, form]);

  function onSubmit(values: PolicyFormData) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      if (policy) {
        toast({
          title: 'Póliza actualizado',
          description: 'La póliza se ha actualizado correctamente.',
        });
      } else {
        toast({
          title: 'Póliza creada',
          description: 'La póliza se ha creado correctamente.',
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
