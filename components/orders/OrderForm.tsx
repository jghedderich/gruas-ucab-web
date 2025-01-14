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
import { DriverStep } from './form/DriverStep';

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
    isSubmitting,
    onSubmit,
    handleDestinationLocationChange,
    handleIncidentLocationChange,
  } = useOrderForm({ order });
  const incidentLocation = form.watch(
    'incidentStep.incidentAddress.coordinates'
  );
  const destinationLocation = form.watch(
    'destinationStep.destinationAddress.coordinates'
  );
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
          title: 'Asignar conductor',
          body: (
            <DriverStep
              form={form}
              drivers={drivers!}
              origin={{
                lat: parseFloat(incidentLocation.latitude),
                lng: parseFloat(incidentLocation.longitude),
              }}
              destination={{
                lat: parseFloat(destinationLocation.latitude),
                lng: parseFloat(destinationLocation.longitude),
              }}
            />
          ),
          fields: ['driverStep'],
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
