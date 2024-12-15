'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Department } from '@/types';
import {
  DepartmentFormData,
  departmentSchema,
} from '@/schemas/department-schema';
import { useMutation } from '../useMutation';

export const useDepartmentForm = ({
  department,
}: {
  department?: Department;
}) => {
  const { back } = useRouter();
  const { mutate, isSubmitting } = useMutation();

  const form = useForm<DepartmentFormData>({
    resolver: zodResolver(departmentSchema),
    defaultValues: {
      departmentName: department?.departmentName || '',
      description: department?.description || '',
    },
  });

  React.useEffect(() => {
    if (department) {
      form.reset(department);
    }
  }, [department, form]);

  async function onSubmit(values: DepartmentFormData) {
    try {
      if (department) {
        await mutate({
          route: '/admin-service/departments',
          method: 'PUT',
          body: { department: { ...values, id: department.id } },
        });
      } else {
        await mutate({
          route: '/admin-service/departments',
          method: 'POST',
          body: { department: values },
        });
        back();
      }
    } catch (error) {
      console.error(error);
    }
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
