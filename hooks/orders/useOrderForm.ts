'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Order } from '@/types';
import { OrderFormData, orderFormSchema } from '@/schemas/order-schema';
import { useToast } from '../use-toast';
import { useMutation } from '../useMutation';

export const useOrderForm = ({ order }: { order?: Order }) => {
  const { mutate, isSubmitting } = useMutation();
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      policyId: order?.policyId,
      operatorId: order?.operatorId,
      client: {
        name: {
          firstName: order?.client.name.firstName,
          lastName: order?.client.name.lastName,
        },
        email: order?.client.email,
        phone: order?.client.phone,
        dni: {
          type: order?.client.dni.type,
          number: order?.client.dni.number,
        },
        clientVehicle: {
          brand: order?.client.clientVehicle.brand,
          model: order?.client.clientVehicle.model,
          year: order?.client.clientVehicle.year,
          type: order?.client.clientVehicle.type,
        },
      },
      incidentAddress: {
        addressLine1: order?.incidentAddress.addressLine1,
        addressLine2: order?.incidentAddress.addressLine2,
        zip: order?.incidentAddress.zip,
        city: order?.incidentAddress.city,
        state: order?.incidentAddress.state,
        coordinates: {
          latitude: order?.incidentAddress.coordinates.latitude,
          longitude: order?.incidentAddress.coordinates.longitude,
        },
      },
      destinationAddress: {
        addressLine1: order?.destinationAddress.addressLine1,
        addressLine2: order?.destinationAddress.addressLine2,
        zip: order?.destinationAddress.zip,
        city: order?.destinationAddress.city,
        state: order?.destinationAddress.state,
        coordinates: {
          latitude: order?.destinationAddress.coordinates.latitude,
          longitude: order?.destinationAddress.coordinates.longitude,
        },
      },
    },
  });

  useEffect(() => {
    if (order) {
      form.reset(order);
    }
  }, [order, form]);

  const onLocationSelect = useCallback(
    (location: { latitude: number; longitude: number }, fieldName: string) => {
      form.setValue(`${fieldName}.latitude`, location.latitude);
      form.setValue(`${fieldName}.longitude`, location.longitude);
    },
    [form]
  );

  async function onSubmit(values: OrderFormData) {
    console.log(values);
    if (order) {
      await mutate({
        body: { order: { ...values, id: order.id } },
        route: '/orders-service/orders',
        method: 'PUT',
      });
      toast({
        title: 'Orden actualizada',
        description: 'La orden se ha actualizado correctamente.',
      });
    } else {
      await mutate({
        body: { order: { ...values } },
        route: '/orders-service/orders',
        method: 'POST',
      });
      toast({
        title: 'Orden creada',
        description: 'La orden se ha creado correctamente.',
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
    onLocationSelect,
  };
};
