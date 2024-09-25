'use client';
import { useOrderForm } from '@/hooks/useOrderForm';
import { Order } from '@/types';
import { useCallback } from 'react';
import { FormWrapper } from '../ui/FormWrapper';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { MapComponent } from './MapComponent';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface OrderFormProps {
  order?: Order;
}

export default function OrderForm({ order }: OrderFormProps) {
  const { form, onSubmit, back, onLocationSelect, isSubmitting } = useOrderForm(
    { order }
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
      <section className="border-b pb-5 border-gray-200">
        <h3 className="text-gray-500 mb-5 text-sm">DATOS DEL CLIENTE</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="clientName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Jhon Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="clientPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="123456789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="clientDni"
            render={({ field }) => (
              <FormItem>
                <FormLabel>DNI del cliente</FormLabel>
                <FormControl>
                  <Input placeholder="123456789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="clientPolicy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Póliza</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione la póliza" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="john">Silver</SelectItem>
                    <SelectItem value="jane">Gold</SelectItem>
                    <SelectItem value="bob">Platinum</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción del accidente</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describa el accidente" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </section>
      <section className="border-b pb-5 border-gray-200">
        <h3 className="text-gray-500 mb-5 text-sm">DATOS DEL ACCIDENTE</h3>
        <div className="grid grid-cols-1 gap-6">
          <FormItem>
            <FormLabel>Ubicación del accidente</FormLabel>
            <FormDescription>
              Seleccione la ubicación en el mapa interactivo.
            </FormDescription>
            <MapComponent
              onLocationSelect={(location) =>
                onLocationSelect(location, 'location')
              }
            />
          </FormItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'street',
              'urbanization',
              'municipality',
              'zipCode',
              'city',
              'state',
            ].map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={`location.${field}`}
                render={({ field: fieldProps }) => (
                  <FormItem>
                    <FormLabel>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </FormLabel>
                    <FormControl>
                      <Input {...fieldProps} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-gray-500 mb-5 text-sm">DATOS DEL DESTINO</h3>
        <div className="grid grid-cols-1 gap-6">
          <FormItem>
            <FormLabel>Ubicación del destino</FormLabel>
            <FormDescription>
              Seleccione la ubicación en el mapa interactivo.
            </FormDescription>
            <MapComponent
              onLocationSelect={(location) =>
                onLocationSelect(location, 'destination')
              }
            />
          </FormItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'street',
              'urbanization',
              'municipality',
              'zipCode',
              'city',
              'state',
            ].map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={`destination.${field}`}
                render={({ field: fieldProps }) => (
                  <FormItem>
                    <FormLabel>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </FormLabel>
                    <FormControl>
                      <Input {...fieldProps} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </FormWrapper>
  );
}
