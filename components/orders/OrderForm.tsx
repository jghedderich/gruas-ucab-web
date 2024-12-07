'use client';
import { DriverWithVehicle, IPagination, Order, Policy } from '@/types';
import { FormWrapper } from '../ui/FormWrapper';
import { useOrderForm } from '@/hooks/orders/useOrderForm';
import { SummarySection } from './form/SummarySection';
import { IncidentLocationSection } from './form/IncidentLocationSection';
import { DestinationLocationSection } from './form/DestinationLocationSection';
import { ClientSection } from './form/ClientSection';

interface OrderFormProps {
  order?: Order;
  drivers?: DriverWithVehicle[];
  policies: IPagination<Policy>;
}

export default function OrderForm({
  order,
  drivers,
  policies,
}: OrderFormProps) {
  const {
    form,
    incidentLocation,
    destinationLocation,
    isSubmitting,
    onSubmit,
    back,
    handleDestinationLocationChange,
    handleIncidentLocationChange,
  } = useOrderForm({ order });
  const selectedPolicy = policies.data.find(
    (policy) => policy.id === form.watch('policyId')
  );

  return (
    <FormWrapper
      form={form}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
      back={back}
      isEditing={!!order}
      className="grid md:grid-cols-1 gap-6"
    >
      <ClientSection form={form} policies={policies.data} />
      <IncidentLocationSection
        form={form}
        drivers={drivers!}
        handleIncidentLocationChange={handleIncidentLocationChange}
      />
      <DestinationLocationSection
        form={form}
        handleDestinationLocationChange={handleDestinationLocationChange}
      />
      {incidentLocation.latitude &&
        destinationLocation.longitude &&
        selectedPolicy && (
          <SummarySection
            origin={{
              lat: parseFloat(incidentLocation.latitude),
              lng: parseFloat(incidentLocation.longitude),
            }}
            destination={{
              lat: parseFloat(destinationLocation.latitude),
              lng: parseFloat(destinationLocation.longitude),
            }}
            policy={selectedPolicy}
          />
        )}
    </FormWrapper>
  );
}
