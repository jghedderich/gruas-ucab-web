/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { DriverFormData, driverSchema } from '@/schemas/driver-schema';
import { Driver } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '../useMutation';
import { useAuth } from '../auth/use-auth';

interface DriverFormProps {
  driver?: Driver;
}

export const useDriverForm = ({ driver }: DriverFormProps) => {
  const { mutate, back, isSubmitting } = useMutation();
  const { user } = useAuth();
  const form = useForm<DriverFormData>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      name: {
        firstName: driver?.name?.firstName || '',
        lastName: driver?.name?.lastName || '',
      },
      phone: driver?.phone || '',
      email: driver?.email || '',
      password: driver?.password || '',
      providerId: driver?.providerId || '',
      vehicleId: driver?.vehicleId || '',
    },
  });

  useEffect(() => {
    if (driver) {
      form.reset(driver);
    }
    if (user?.userType === 'provider') {
      form.setValue('providerId', user.id);
    }
  }, [driver, form, user?.id, user?.userType]);

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
      // await mutate({
      //   body: { driver: values },
      //   route: '/providers-service/drivers',
      //   method: 'POST',
      // });
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
