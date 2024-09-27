'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Department } from '@/types';
import { useToast } from '../use-toast';
import {
  DepartmentFormData,
  departmentSchema,
} from '@/schemas/department-schema';

export const useDepartmentForm = ({
  department,
}: {
  department?: Department;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<DepartmentFormData>({
    resolver: zodResolver(departmentSchema),
  });

  useEffect(() => {
    if (department) {
      form.reset(department);
    }
  }, [department, form]);

  function onSubmit(values: DepartmentFormData) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      if (department) {
        toast({
          title: 'Departamento actualizado',
          description: 'El departamento se ha actualizado correctamente.',
        });
      } else {
        toast({
          title: 'Departamento creado',
          description: 'El departamento se ha creado correctamente.',
        });
      }
    }, 2000);
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
