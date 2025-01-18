'use client';
import React from 'react';
import { UseFormReturn, FieldValues } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { useMultiStepForm } from '@/hooks/use-multi-step-form';
import { IFormStep } from '@/types';

interface MultiStepFormWrapperProps<TFormValues extends FieldValues> {
  form: UseFormReturn<TFormValues>;
  isSubmitting: boolean;
  onSubmit: (values: TFormValues) => void;
  steps: IFormStep[];
}

export function MultiStepFormWrapper<TFormValues extends FieldValues>({
  form,
  isSubmitting,
  onSubmit,
  steps,
}: MultiStepFormWrapperProps<TFormValues>) {
  const { next, previous, currentStep } = useMultiStepForm({
    steps,
    form,
    onSubmit,
  });

  const handleNext = async () => {
    if (currentStep === steps.length - 1) {
      await form.handleSubmit(onSubmit)();
    } else {
      await next();
    }
  };

  return (
    <Card className="max-w-3xl">
      <Form {...form}>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">
              {steps[currentStep].title}
            </CardTitle>
            <p className="text-sm text-gray-500">
              {currentStep + 1} de {steps.length}
            </p>
          </div>
        </CardHeader>
        <CardContent>{steps[currentStep].body}</CardContent>
        <CardFooter className="flex justify-between gap-3 border-t py-5">
          <Button
            type="button"
            variant="link"
            onClick={previous}
            disabled={isSubmitting || currentStep === 0}
          >
            Anterior
          </Button>
          <Button type="button" onClick={handleNext} disabled={isSubmitting}>
            {currentStep === steps.length - 1
              ? isSubmitting
                ? 'Enviando...'
                : 'Enviar'
              : 'Siguiente'}
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
