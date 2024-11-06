'use client';

import { DriverFormData, driverSchema } from '@/schemas/driver-schema';
import { Driver } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface DriverFormProps {
  driver?: Driver;
}

export const useDriverForm = ({ driver }: DriverFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();

  const form = useForm<DriverFormData>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      firstName: driver?.name.firstName || '',
      lastName: driver?.name.lastName || '',
      phone: driver?.phone || '',
      dni: driver ? `${driver.dni.type + driver.dni.number}` : '',
      email: driver?.email || '',
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

  function onSubmit(values: DriverFormData) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
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
