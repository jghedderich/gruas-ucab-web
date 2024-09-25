'use client';
import React from 'react';
import { UseFormReturn, FieldValues } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { cn } from '@/lib/utils';

interface FormWrapperProps<TFormValues extends FieldValues> {
  form: UseFormReturn<TFormValues>;
  isSubmitting: boolean;
  onSubmit: (values: TFormValues) => void;
  back: () => void;
  children: React.ReactNode;
  isEditing: boolean;
  className?: string;
}

export function FormWrapper<TFormValues extends FieldValues>({
  children,
  form,
  isSubmitting,
  isEditing,
  className,
  onSubmit,
  back,
}: FormWrapperProps<TFormValues>) {
  return (
    <Card className="max-w-3xl pt-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <div
              className={cn('grid grid-cols-1 gap-6 md:grid-cols-2', className)}
            >
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
