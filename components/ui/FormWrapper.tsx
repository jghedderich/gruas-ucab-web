'use client';
import React from 'react';
import { UseFormReturn, FieldValues } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Form } from '@/components/ui/form';

interface FormWrapperProps<TFormValues extends FieldValues> {
  form: UseFormReturn<TFormValues>;
  isSubmitting: boolean;
  onSubmit: (values: TFormValues) => void;
  back: () => void;
  children: React.ReactNode;
  isEditing: boolean;
}

export function FormWrapper<TFormValues extends FieldValues>({
  children,
  form,
  isSubmitting,
  isEditing,
  onSubmit,
  back,
}: FormWrapperProps<TFormValues>) {
  return (
    <Card className="max-w-xl pt-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {children}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-3 border-t py-5">
            <Button type="button" onClick={back} variant="link">
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? 'Enviando...'
                : isEditing
                ? 'Actualizar'
                : 'Enviar'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
