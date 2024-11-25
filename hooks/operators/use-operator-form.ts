/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Operator } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '../useMutation';
import { OperatorFormData, operatorSchema } from '@/schemas/operator-schema';

interface OperatorFormProps {
  operator?: Operator;
}

export const useOperatorForm = ({ operator }: OperatorFormProps) => {
  const { mutate, back, isSubmitting } = useMutation();
  const form = useForm<OperatorFormData>({
    resolver: zodResolver(operatorSchema),
    defaultValues: {
      name: {
        firstName: operator?.name?.firstName || '',
        lastName: operator?.name?.lastName || '',
      },
      dni: {
        type: operator?.dni?.type || '',
        number: operator?.dni?.number || '',
      },
      phone: operator?.phone || '',
      email: operator?.email || '',
      password: operator?.password || '',
    },
  });

  useEffect(() => {
    if (operator) {
      form.reset(operator);
    }
  }, [operator, form]);

  async function onSubmit(values: OperatorFormData) {
    if (operator) {
      // Remove email and password when updating an operator
      const { email, password, ...rest } = values;
      await mutate({
        body: { operator: { ...rest, id: operator.id } },
        route: '/orders-service/operators',
        method: 'PUT',
      });
    } else {
      await mutate({
        body: { operator: values },
        route: '/orders-service/operators',
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
