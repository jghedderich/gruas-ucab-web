import React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { MapComponent } from '../Map';
import { AddressDetails } from '@/types';
import { UseFormReturn } from 'react-hook-form';
import { OrderFormData } from '@/schemas/order-schema';

interface DestinationLocationSectionProps {
  form: UseFormReturn<OrderFormData>;
  handleDestinationLocationChange: (coordinates: AddressDetails) => void;
}

export const DestinationLocationSection = ({
  form,
  handleDestinationLocationChange,
}: DestinationLocationSectionProps) => {
  return (
    <section>
      <h3 className="text-gray-500 mb-5 text-sm">DATOS DEL DESTINO</h3>
      <div className="grid grid-cols-1 gap-6">
        <FormItem>
          <FormLabel>Ubicación del destino</FormLabel>
          <FormDescription>
            Seleccione la ubicación en el mapa interactivo.
          </FormDescription>
          <MapComponent onCoordinatesChange={handleDestinationLocationChange} />
        </FormItem>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="destinationAddress.addressLine1"
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
            name="destinationAddress.addressLine2"
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
            name="destinationAddress.city"
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
            name="destinationAddress.state"
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
            name="destinationAddress.zip"
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
            name="destinationAddress.coordinates.latitude"
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
            name="destinationAddress.coordinates.longitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Longitud</FormLabel>
                <FormControl>
                  <Input placeholder="0.0000" {...field} />
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
