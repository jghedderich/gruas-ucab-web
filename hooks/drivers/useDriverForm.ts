/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { DriverFormData, driverSchema } from '@/schemas/driver-schema';
import { Driver } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '../useMutation';

interface DriverFormProps {
  driver?: Driver;
}

export const useDriverForm = ({ driver }: DriverFormProps) => {
  const { mutate, back, isSubmitting } = useMutation();
  const form = useForm<DriverFormData>({
    resolver: zodResolver(driverSchema),
    defaultValues: { ...driver } as DriverFormData,
  });

  useEffect(() => {
    if (driver) {
      form.reset(driver);
    }
  }, [driver, form]);

  async function onSubmit(values: DriverFormData) {
    if (driver) {
      // Remove email and password when updating a driver
      const { email, password, ...rest } = values;
      await mutate({
        body: { driver: { ...rest, id: driver.id } },
        route: '/providers-service/drivers',
        method: 'PUT',
      });
    } else {
      console.log(values);
      await mutate({
        body: { driver: values },
        route: '/providers-service/drivers',
        method: 'POST',
      });
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
