'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AddressDetails, Order } from '@/types';
import { OrderFormData, orderFormSchema } from '@/schemas/order-schema';
import { useToast } from '../use-toast';
import { useMutation } from '../useMutation';
import { useAuth } from '../auth/use-auth';

export const useOrderForm = ({ order }: { order?: Order }) => {
  const { mutate, isSubmitting } = useMutation();
  const { back } = useRouter();
  const { toast } = useToast();
  const { user } = useAuth();

  const form = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      policyId: '',
      client: {
        name: {
          firstName: '',
          lastName: '',
        },
        email: '',
        phone: '',
        dni: {
          type: '',
          number: '',
        },
        clientVehicle: {
          brand: '',
          model: '',
          year: '',
          type: '',
        },
      },
      incidentAddress: {
        addressLine1: '',
        addressLine2: '',
        zip: '',
        city: '',
        state: '',
        coordinates: {
          latitude: '',
          longitude: '',
        },
      },
      destinationAddress: {
        addressLine1: '',
        addressLine2: '',
        zip: '',
        city: '',
        state: '',
        coordinates: {
          latitude: '',
          longitude: '',
        },
      },
    },
  });

  const incidentLocation = form.watch('incidentAddress.coordinates');
  const destinationLocation = form.watch('destinationAddress.coordinates');

  useEffect(() => {
    if (order) {
      form.reset(order);
    }
  }, [order, form]);

  const handleIncidentLocationChange = (addressDetails: AddressDetails) => {
    Object.entries(addressDetails).forEach(([key, value]) => {
      if (key === 'coordinates') {
        form.setValue('incidentAddress.coordinates.latitude', value.latitude);
        form.setValue('incidentAddress.coordinates.longitude', value.longitude);
      } else {
        form.setValue(
          `incidentAddress.${key}` as unknown as keyof OrderFormData,
          value
        );
      }
    });
  };

  const handleDestinationLocationChange = (addressDetails: AddressDetails) => {
    Object.entries(addressDetails).forEach(([key, value]) => {
      if (key === 'coordinates') {
        form.setValue(
          'destinationAddress.coordinates.latitude',
          value.latitude
        );
        form.setValue(
          'destinationAddress.coordinates.longitude',
          value.longitude
        );
      } else {
        form.setValue(
          `destinationAddress.${key}` as unknown as keyof OrderFormData,
          value
        );
      }
    });
  };

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
        body: { order: { ...values, operatorId: user!.id } },
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
    incidentLocation,
    destinationLocation,

    // actions
    back,
    onSubmit,
    handleDestinationLocationChange,
    handleIncidentLocationChange,
  };
};
