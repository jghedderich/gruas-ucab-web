'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Vehicle } from '@/types';
import { useVehiclesForm } from '@/hooks/useVehiclesForm';
import { FormWrapper } from '../ui/FormWrapper';

interface VehicleFormProps {
  vehicle?: Vehicle;
}

export default function VehicleForm({ vehicle }: VehicleFormProps) {
  const { form, onSubmit, back, isSubmitting } = useVehiclesForm({ vehicle });
  return (
    <FormWrapper
      form={form}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
      back={back}
      isEditing={!!vehicle}
    >
      <FormField
        control={form.control}
        name="brand"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Marca</FormLabel>
            <FormControl>
              <Input placeholder="Toyota, Honda, Ford..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="model"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Model</FormLabel>
            <FormControl>
              <Input placeholder="Corolla, Civic, Mustang..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="year"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Año</FormLabel>
            <FormControl>
              <Input
                type="number"
                {...field}
                onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="owner"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Dueño</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione el dueño" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="john">John Doe</SelectItem>
                <SelectItem value="jane">Jane Smith</SelectItem>
                <SelectItem value="bob">Bob Johnson</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormWrapper>
  );
}
