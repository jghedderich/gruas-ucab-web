'use client';
import React from 'react';
import { FormWrapper } from '../ui/FormWrapper';
import { Policy } from '@/types';
import { usePoliciesForm } from '@/hooks/policies/usePoliciesForm';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

interface PoliciesFormProps {
  policy?: Policy;
}

export const PoliciesForm = ({ policy }: PoliciesFormProps) => {
  const { form, onSubmit, back, isSubmitting } = usePoliciesForm({ policy });
  return (
    <FormWrapper
      form={form}
      onSubmit={onSubmit}
      back={back}
      isSubmitting={isSubmitting}
      isEditing={!!policy}
    >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input placeholder="Básico, Oro, Silver, etc" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="price"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Precio anual ($)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="10" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="kilometersCovered"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Distancia cubierta (km)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="1000" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="extraPerKm"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Costo extra por kilómetro ($)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="0.5" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="tripsCovered"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Viajes cubiertos</FormLabel>
            <FormControl>
              <Input type="number" placeholder="3" {...field} />
            </FormControl>
            <FormDescription>Si es ilimitado, ingrese 0.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormWrapper>
  );
};
