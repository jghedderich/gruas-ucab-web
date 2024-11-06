'use client';

import { VehicleFormData, vehicleSchema } from '@/schemas/vehicle-schema';
import { Vehicle } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '../useMutation';

export const useVehicleForm = ({ vehicle }: { vehicle?: Vehicle }) => {
  const form = useForm<VehicleFormData>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      model: vehicle?.model || '',
      brand: vehicle?.brand || '',
      providerId: vehicle?.providerId || '',
      type: vehicle?.type || '',
      year: vehicle?.year || '',
    },
  });
  const { mutate, back, isSubmitting } = useMutation();

  useEffect(() => {
    if (vehicle) {
      form.reset(vehicle as unknown as VehicleFormData);
    }
  }, [vehicle, form]);

  async function onSubmit(values: VehicleFormData) {
    if (vehicle) {
      await mutate({
        body: { vehicle: { ...values, id: vehicle.id } },
        route: '/providers-service/vehicles',
        method: 'PUT',
      });
    } else {
      await mutate({
        body: { vehicle: values },
        route: '/providers-service/vehicles',
        method: 'POST',
      });
    }
  }
  return {
    // state
    form,
    isSubmitting,

    // actions
    onSubmit,
    back,
  };
};
