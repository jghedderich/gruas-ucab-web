'use client';

import { VehicleFormData, vehicleSchema } from '@/schemas/vehicle-schema';
import { Vehicle } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useVehicleForm = ({ vehicle }: { vehicle?: Vehicle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();

  const form = useForm<VehicleFormData>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      model: '',
      brand: '',
      owner: '',
    },
  });

  useEffect(() => {
    if (vehicle) {
      form.reset(vehicle);
    }
  }, [vehicle, form]);

  function onSubmit(values: VehicleFormData) {
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
