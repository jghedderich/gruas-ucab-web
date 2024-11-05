'use client';

import { fetchData } from '@/lib/fetchData';
import { VehicleFormData, vehicleSchema } from '@/schemas/vehicle-schema';
import { Vehicle } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '../use-toast';

export const useVehicleForm = ({ vehicle }: { vehicle?: Vehicle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back, refresh } = useRouter();
  const { toast } = useToast();

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

  useEffect(() => {
    if (vehicle) {
      form.reset(vehicle as unknown as VehicleFormData);
    }
  }, [vehicle, form]);

  async function onSubmit(values: VehicleFormData) {
    try {
      setIsSubmitting(true);
      await fetchData('/providers-service/vehicles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ vehicle: values }),
      });
      back();
      refresh();
      if (vehicle) {
        toast({
          title: 'Vehículo actualizado',
          description: 'El vehículo se ha actualizado correctamente.',
        });
      } else {
        toast({
          title: 'Vehículo creado',
          description: 'El vehículo se ha creado correctamente.',
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error al crear el vehículo',
        description: 'El vehículo no se ha creado correctamente.',
        variant: 'destructive',
      });
    }
    setIsSubmitting(false);
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
