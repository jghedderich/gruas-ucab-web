import { FormDescription, FormItem } from '@/components/ui/form';
import { DriverWithVehicle } from '@/types';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { DriverInput } from './DriverInput';
import { RouteMap } from '../RouteMap';
import { CarIcon } from 'lucide-react';
import { filterDriversForClientVehicle } from '@/lib/filter-drivers-for-client-vehicle';

interface DriverStepProps {
  form: UseFormReturn;
  drivers: DriverWithVehicle[];
  origin: { lat: number; lng: number };
  destination: { lat: number; lng: number };
}

export const DriverStep = ({
  form,
  drivers,
  origin,
  destination,
}: DriverStepProps) => {
  const clientVehicle = form.watch('vehicleStep.clientVehicle');
  const filteredDrivers = filterDriversForClientVehicle(
    drivers,
    clientVehicle.type
  );

  return (
    <section className="grid grid-cols-1 gap-6">
      <FormItem>
        <FormDescription>
          Seleccione el conductor que va a realizar el servicio.
        </FormDescription>
        <RouteMap
          origin={origin}
          destination={destination}
          drivers={filteredDrivers}
        />
      </FormItem>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DriverInput form={form} drivers={filteredDrivers} />
        <div>
          <h4 className="text-sm mb-2">Vehículo del cliente</h4>
          <p className="flex items-center">
            <CarIcon className="mr-2" size={16} /> {clientVehicle.brand}{' '}
            {clientVehicle.model} ({clientVehicle.year}) -{' '}
            <span className="capitalize font-semibold">
              &nbsp;{clientVehicle.type}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
