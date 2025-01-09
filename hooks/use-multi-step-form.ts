import { IFormStep } from '@/types';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface MultiStepFormWrapperProps {
  form: UseFormReturn;
  onSubmit: (values: any) => Promise<void>;
  steps: IFormStep[];
}

export function useMultiStepForm({ steps, form }: MultiStepFormWrapperProps) {
  const [currentStep, setCurrentStep] = useState(0);

  async function next() {
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields);
    if (output) {
      setCurrentStep((step) => {
        if (step === steps.length) {
          return step;
        }
        return step + 1;
      });
    }
  }

  function previous() {
    setCurrentStep((step) => {
      if (step === 0) {
        return step;
      }
      return step - 1;
    });
  }

  function goTo(step: number) {
    setCurrentStep(step);
  }

  return {
    currentStep,
    step: steps[currentStep],
    steps,
    goTo,
    next,
    previous,
  };
}
