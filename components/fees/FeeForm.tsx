'use client';
import React from 'react';
import { FormWrapper } from '../ui/FormWrapper';
import { Fee } from '@/types';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { useFeesForm } from '@/hooks/fees/useFeeForm';

interface FeesFormProps {
  fee?: Fee;
}

export const FeesForm = ({ fee }: FeesFormProps) => {
  const { form, onSubmit, back, isSubmitting } = useFeesForm({ fee });
  return (
    <FormWrapper
      form={form}
      onSubmit={onSubmit}
      back={back}
      isSubmitting={isSubmitting}
      isEditing={!!fee}
    >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input placeholder="Liviano, Mediano, Pesado, etc" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="base"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Precio base ($)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="30" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="perKm"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Precio por Kilómetro ($)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="1" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormWrapper>
  );
};
