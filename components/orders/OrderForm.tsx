'use client';
import React from 'react';
import { MultiStepFormWrapper } from '../ui/MultiStepFormWrapper';
import { DriverWithVehicle, IPagination, Order, Policy } from '@/types';
import { useOrderForm } from '@/hooks/orders/useOrderForm';
import { ClientSection } from './form/ClientSection';
import { IncidentLocationSection } from './form/IncidentLocationSection';
import { DestinationLocationSection } from './form/DestinationLocationSection';
import { SummarySection } from './form/SummarySection';
import { VehicleSection } from './form/VehicleSection';

interface MultiStepOrderFormProps {
  order?: Order;
  drivers?: DriverWithVehicle[];
  policies: IPagination<Policy>;
}

export const OrderForm = ({
  order,
  drivers,
  policies,
}: MultiStepOrderFormProps) => {
  const {
    form,
    incidentLocation,
    destinationLocation,
    isSubmitting,
    onSubmit,
    handleDestinationLocationChange,
    handleIncidentLocationChange,
  } = useOrderForm({ order });
  const selectedPolicy = policies.data.find(
    (policy) => policy.id === form.watch('clientStep.policyId')
  );

  return (
    <MultiStepFormWrapper
      form={form}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
      steps={[
        {
          title: 'Datos del cliente',
          body: <ClientSection form={form} policies={policies.data} />,
          fields: ['clientStep'],
        },
        {
          title: 'Vehículo del cliente',
          body: <VehicleSection form={form} />,
          fields: ['vehicleStep'],
        },
        {
          title: 'Ubicación del incidente',
          body: (
            <IncidentLocationSection
              form={form}
              drivers={drivers!}
              handleIncidentLocationChange={handleIncidentLocationChange}
            />
          ),
          fields: ['incidentStep'],
        },
        {
          title: 'Ubicación del destino',
          body: (
            <DestinationLocationSection
              form={form}
              handleDestinationLocationChange={handleDestinationLocationChange}
            />
          ),
          fields: ['destinationStep'],
        },
        {
          title: 'Resumen',
          body: (
            <SummarySection
              origin={{
                lat: parseFloat(incidentLocation.latitude),
                lng: parseFloat(incidentLocation.longitude),
              }}
              destination={{
                lat: parseFloat(destinationLocation.latitude),
                lng: parseFloat(destinationLocation.longitude),
              }}
              policy={selectedPolicy!}
            />
          ),
          fields: [''],
        },
      ]}
    />
  );
};
