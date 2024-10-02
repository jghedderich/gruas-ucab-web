'use client';
import React from 'react';
import { AdditionalCost } from '@/types';
import { FormWrapper } from '../ui/FormWrapper';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { useAdditionalCostForm } from '@/hooks/additional-costs/useAdditionalCostsForm';

interface AdditionalCostsFormProps {
  additionalCost?: AdditionalCost;
}

export const AdditionalCostForm = ({
  additionalCost,
}: AdditionalCostsFormProps) => {
  const { form, isSubmitting, onSubmit, back } = useAdditionalCostForm({
    additionalCost,
  });
  return (
    <FormWrapper
      form={form}
      isSubmitting={isSubmitting}
      isEditing={!!additionalCost}
      onSubmit={onSubmit}
      back={back}
    >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input placeholder="Peaje" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descripción</FormLabel>
            <FormControl>
              <Input placeholder="Descripción del costo adicional" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormWrapper>
  );
};
