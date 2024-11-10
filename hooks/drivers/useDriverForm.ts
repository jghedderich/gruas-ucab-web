'use client';

import { DriverFormData, driverSchema } from '@/schemas/driver-schema';
import { Driver } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '../useMutation';
import { parseDriverData } from '@/lib/parse-driver-data';

interface DriverFormProps {
  driver?: Driver;
}

export const useDriverForm = ({ driver }: DriverFormProps) => {
  const { mutate, back, isSubmitting } = useMutation();
  const form = useForm<DriverFormData>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      firstName: driver?.name.firstName || '',
      lastName: driver?.name.lastName || '',
      phone: driver?.phone || '',
      dni: driver ? `${driver.dni.type + driver.dni.number}` : '',
      email: driver?.email || '',
      password: driver?.password || '',
      providerId: driver?.providerId || '',
      vehicleId: driver?.vehicleId || '',
    },
  });

  useEffect(() => {
    if (driver) {
      form.reset({
        ...driver,
        dni: `${driver.dni.type + driver.dni.number}`,
      } as unknown as DriverFormData);
    }
  }, [driver, form]);

  async function onSubmit(values: DriverFormData) {
    const parsedBody = parseDriverData(values);
    if (driver) {
      await mutate({
        body: { driver: { ...parsedBody, id: driver.id } },
        route: '/providers-service/drivers',
        method: 'PUT',
      });
    } else {
      await mutate({
        body: { driver: parsedBody },
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
