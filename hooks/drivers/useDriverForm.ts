'use client';

import { DriverFormData, driverSchema } from '@/schemas/driver-schema';
import { Driver } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useDriverForm = ({ driver }: { driver?: Driver }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();

  const form = useForm<DriverFormData>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dni: '',
      phone: '',
      email: '',
      password: '',
      vehicleId: '',
      providerId: '',
    },
  });

  useEffect(() => {
    if (driver) {
      form.reset(driver);
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
