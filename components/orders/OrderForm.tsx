'use client';
import { dniTypes, Order } from '@/types';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useOrderForm } from '@/hooks/orders/useOrderForm';

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
            name="client.name.firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="client.name.lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="client.phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="04121234567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-2 items-end relative">
            <FormField
              control={form.control}
              name="client.dni.type"
              render={({ field }) => (
                <FormItem className="max-w-20 w-full">
                  <FormLabel className="absolute top-1">
                    Cédula de identidad
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {dniTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="client.dni.number"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="12345678" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="policyId"
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
            <div />
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
    </FormWrapper>
  );
}
