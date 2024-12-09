'use client';
import React from 'react';
import { FormWrapper } from '../ui/FormWrapper';
import { Policy } from '@/types';
import { usePoliciesForm } from '@/hooks/policies/usePoliciesForm';
import {
  FormControl,
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
      className="grid md:grid-cols-1 gap-6"
    >
      <section className="border-b pb-5 border-gray-200">
        <h3 className="text-gray-500 mb-5 text-sm">DATOS DE LA PÓLIZA</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            name="amountCovered"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cobertura ($)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="1000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </section>
      <section className="border-b pb-5 border-gray-200">
        <h3 className="text-gray-500 mb-5 text-sm">TARIFAS ($)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fees.baseFee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Base</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fees.perKm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Por Km</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </section>
      <section>
        <h3 className="text-gray-500 mb-5 text-sm">PRECIO ($)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="price.annualPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anual</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price.monthlyPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensual</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </section>
    </FormWrapper>
  );
};
