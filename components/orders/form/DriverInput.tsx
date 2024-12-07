import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { Car, MapPin } from 'lucide-react';
import { Badge } from '../../ui/badge';
import { UseFormReturn } from 'react-hook-form';
import { DriverWithVehicle } from '@/types';
import { OrderFormData } from '@/schemas/order-schema';

interface DriverInputProps {
  drivers: DriverWithVehicle[];
  form: UseFormReturn<OrderFormData>;
}

export const DriverInput = ({ drivers, form }: DriverInputProps) => {
  return (
    <FormField
      control={form.control}
      name="driverId"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Conductor</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un conductor">
                  {field.value && (
                    <div className="flex items-center gap-2">
                      <p>
                        {
                          drivers?.find(
                            (driver) => driver.driver.id === field.value
                          )?.driver.name.firstName
                        }{' '}
                        {
                          drivers?.find(
                            (driver) => driver.driver.id === field.value
                          )?.driver.name.lastName
                        }
                      </p>
                    </div>
                  )}
                </SelectValue>
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {drivers?.map((driver) => (
                <SelectItem key={driver.driver.id} value={driver.driver.id}>
                  <div className="flex items-center gap-2 pb-2">
                    <p>
                      {driver.driver.name.firstName}{' '}
                      {driver.driver.name.lastName}
                    </p>
                    <Badge variant={'outline'}>{driver.driver.status}</Badge>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <Car className="size-3 text-gray-500" />
                    <p className="text-xs text-gray-500">
                      {driver.vehicle.brand} {driver.vehicle.model} -{' '}
                      {driver.vehicle.type}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="size-3 text-gray-500" />
                    <p className="text-xs text-gray-500">
                      {driver.driver.location
                        ? driver.driver.location.addressLine1
                        : 'Por registrar'}
                    </p>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
