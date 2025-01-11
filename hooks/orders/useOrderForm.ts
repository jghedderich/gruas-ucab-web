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
import { transformOrderData } from '@/lib/parse-order-schema';
import { serverOrderFormSchema } from '@/schemas/server-order-schema';

export const useOrderForm = ({ order }: { order?: Order }) => {
  const { mutate, isSubmitting } = useMutation();
  const { back } = useRouter();
  const { toast } = useToast();
  const { user } = useAuth();

  const form = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      clientStep: {
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
        },
      },
      vehicleStep: {
        clientVehicle: {
          brand: '',
          model: '',
          year: '',
          type: '',
        },
      },
      incidentStep: {
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
      },
      destinationStep: {
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
    },
  });

  const incidentLocation = form.watch(
    'incidentStep.incidentAddress.coordinates'
  );
  const destinationLocation = form.watch(
    'destinationStep.destinationAddress.coordinates'
  );

  useEffect(() => {
    if (order) {
      form.reset(order);
    }
  }, [order, form]);

  const handleIncidentLocationChange = (addressDetails: AddressDetails) => {
    Object.entries(addressDetails).forEach(([key, value]) => {
      if (key === 'coordinates') {
        form.setValue(
          'incidentStep.incidentAddress.coordinates.latitude',
          value.latitude
        );
        form.setValue(
          'incidentStep.incidentAddress.coordinates.longitude',
          value.longitude
        );
      } else {
        form.setValue(
          `incidentStep.incidentAddress.${key}` as unknown as keyof OrderFormData,
          value
        );
      }
    });
  };

  const handleDestinationLocationChange = (addressDetails: AddressDetails) => {
    Object.entries(addressDetails).forEach(([key, value]) => {
      if (key === 'coordinates') {
        form.setValue(
          'destinationStep.destinationAddress.coordinates.latitude',
          value.latitude
        );
        form.setValue(
          'destinationStep.destinationAddress.coordinates.longitude',
          value.longitude
        );
      } else {
        form.setValue(
          `destinationStep.destinationAddress.${key}` as unknown as keyof OrderFormData,
          value
        );
      }
    });
  };

  async function onSubmit(values: OrderFormData) {
    const serverData = transformOrderData(values);
    const validatedData = serverOrderFormSchema.parse(serverData);

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
        body: {
          order: {
            ...validatedData,
            orderStatus: 'ToBeAccepted',
            operatorId: user!.id,
          },
        },
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
