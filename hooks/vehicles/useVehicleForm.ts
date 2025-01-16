'use client';

import { VehicleFormData, vehicleSchema } from '@/schemas/vehicle-schema';
import { Vehicle } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '../useMutation';
import { useAuth } from '../auth/use-auth';

export const useVehicleForm = ({ vehicle }: { vehicle?: Vehicle }) => {
  const form = useForm<VehicleFormData>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: { ...vehicle } as VehicleFormData,
  });
  const { mutate, back, isSubmitting } = useMutation();
  const { user } = useAuth();

  useEffect(() => {
    if (vehicle) {
      form.reset(vehicle as unknown as VehicleFormData);
    }
    if (user?.userType === 'provider') {
      form.setValue('providerId', user.id);
    }
  }, [vehicle, form, user?.id, user?.userType]);

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
