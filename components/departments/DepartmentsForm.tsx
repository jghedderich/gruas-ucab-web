'use client';
import { useDepartmentForm } from '@/hooks/departments/useDepartmentForm';
import { Department } from '@/types';
import React from 'react';
import { FormWrapper } from '../ui/FormWrapper';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

interface DepartmentsFormProps {
  department?: Department;
}

export const DepartmentsForm = ({ department }: DepartmentsFormProps) => {
  const { form, isSubmitting, onSubmit, back } = useDepartmentForm({
    department,
  });
  return (
    <FormWrapper
      form={form}
      isSubmitting={isSubmitting}
      isEditing={!!department}
      onSubmit={onSubmit}
      back={back}
    >
      <FormField
        control={form.control}
        name="departmentName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input placeholder="Mercadeo" {...field} />
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
              <Input
                placeholder="Encargado de toda la parte de mercadeo"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormWrapper>
  );
};
