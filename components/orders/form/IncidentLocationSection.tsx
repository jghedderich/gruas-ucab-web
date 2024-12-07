import React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { MapComponent } from '../Map';
import { Input } from '../../ui/input';
import { UseFormReturn } from 'react-hook-form';
import { OrderFormData } from '@/schemas/order-schema';
import { AddressDetails, DriverWithVehicle } from '@/types';
import { DriverInput } from './DriverInput';

interface IncidentLocationSectionProps {
  form: UseFormReturn<OrderFormData>;
  drivers: DriverWithVehicle[];
  handleIncidentLocationChange: (coordinates: AddressDetails) => void;
}

export const IncidentLocationSection = ({
  form,
  drivers,
  handleIncidentLocationChange,
}: IncidentLocationSectionProps) => {
  return (
    <section className="border-b pb-5 border-gray-200">
      <h3 className="text-gray-500 mb-5 text-sm">DATOS DEL ACCIDENTE</h3>
      <div className="grid grid-cols-1 gap-6">
        <FormItem>
          <FormLabel>Ubicación del accidente</FormLabel>
          <FormDescription>
            Seleccione la ubicación en el mapa interactivo.
          </FormDescription>
          <MapComponent onCoordinatesChange={handleIncidentLocationChange} />
        </FormItem>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="incidentAddress.addressLine1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Línea 1</FormLabel>
                <FormControl>
                  <Input placeholder="Calle 123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="incidentAddress.addressLine2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Línea 2 (opcional)</FormLabel>
                <FormControl>
                  <Input placeholder="Apartamento 123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="incidentAddress.city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ciudad</FormLabel>
                <FormControl>
                  <Input placeholder="Caracas" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="incidentAddress.state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <Input placeholder="Miranda" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="incidentAddress.zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código postal</FormLabel>
                <FormControl>
                  <Input placeholder="1234" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DriverInput drivers={drivers!} form={form} />
          <FormField
            control={form.control}
            name="incidentAddress.coordinates.latitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Latitud</FormLabel>
                <FormControl>
                  <Input placeholder="0.0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="incidentAddress.coordinates.longitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Longitud</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="any"
                    placeholder="0.0000"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </section>
  );
};
