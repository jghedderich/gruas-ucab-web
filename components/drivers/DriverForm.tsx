'use client';

import {
  FormControl,
  FormDescription,
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
import { Driver, IPagination, Provider, Vehicle } from '@/types';
import { FormWrapper } from '../ui/FormWrapper';
import { useDriverForm } from '@/hooks/drivers/useDriverForm';

interface DriverFormProps {
  driver?: Driver;
  vehicles: IPagination<Vehicle>;
  providers: IPagination<Provider>;
}

export default function DriverForm({
  driver,
  vehicles,
  providers,
}: DriverFormProps) {
  const { form, onSubmit, back, isSubmitting } = useDriverForm({ driver });
  return (
    <FormWrapper
      form={form}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
      back={back}
      isEditing={!!driver}
    >
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input placeholder="Juan" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Apellido</FormLabel>
            <FormControl>
              <Input placeholder="Parker" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="dni"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cédula</FormLabel>
            <FormControl>
              <Input placeholder="V12345678" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Correo electrónico</FormLabel>
            <FormControl>
              <Input placeholder="juan@gmail.com" type="email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contraseña</FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="Mínimo 6 caracteres"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Esta clave es temporal. El usuario debe actualizarla después de
              iniciar sesión.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="providerId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vehículo</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione el proveedor" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {providers.data.map((provider) => (
                  <SelectItem key={provider.id} value={provider.id}>
                    {provider.company.name}
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
        name="vehicleId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vehículo</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione el vehículo" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {vehicles.data.map((vehicle) => (
                  <SelectItem key={vehicle.id} value={vehicle.id}>
                    {vehicle.brand} {vehicle.model} ({vehicle.year})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormWrapper>
  );
}
