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
      model: '',
      brand: '',
      providerId: '',
      type: '',
      year: '',
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
        body: { vehicle: values },
        route: `/providers-service/vehicles/${vehicle.id}`,
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
