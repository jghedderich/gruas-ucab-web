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
import { AddressDetails } from '@/types';

interface IncidentLocationSectionProps {
  form: UseFormReturn<OrderFormData>;
  handleIncidentLocationChange: (coordinates: AddressDetails) => void;
}

export const IncidentLocationSection = ({
  form,
  handleIncidentLocationChange,
}: IncidentLocationSectionProps) => {
  return (
    <section className="grid grid-cols-1 gap-6">
      <FormItem>
        <FormDescription>
          Seleccione la ubicación en el mapa interactivo.
        </FormDescription>
        <MapComponent onCoordinatesChange={handleIncidentLocationChange} />
      </FormItem>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="incidentStep.incidentAddress.addressLine1"
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
          name="incidentStep.incidentAddress.addressLine2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Línea 2</FormLabel>
              <FormControl>
                <Input placeholder="Apartamento 123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="incidentStep.incidentAddress.city"
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
          name="incidentStep.incidentAddress.state"
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
          name="incidentStep.incidentAddress.zip"
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
        <div />
        <FormField
          control={form.control}
          name="incidentStep.incidentAddress.coordinates.latitude"
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
          name="incidentStep.incidentAddress.coordinates.longitude"
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
    </section>
  );
};
