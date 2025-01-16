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
import { dniTypes, Driver, IPagination, Provider } from '@/types';
import { FormWrapper } from '../ui/FormWrapper';
import { useDriverForm } from '@/hooks/drivers/useDriverForm';
import { useAuth } from '@/hooks/auth/use-auth';

interface DriverFormProps {
  driver?: Driver;
  providers: IPagination<Provider>;
}

export default function DriverForm({ driver, providers }: DriverFormProps) {
  const { form, onSubmit, back, isSubmitting } = useDriverForm({ driver });
  const { user } = useAuth();

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
        name="name.firstName"
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
        name="name.lastName"
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
      <div className="flex gap-2 items-end relative">
        <FormField
          control={form.control}
          name="dni.type"
          render={({ field }) => (
            <FormItem className="max-w-20 w-full">
              <FormLabel className="absolute top-1">
                Cédula de identidad
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
          name="dni.number"
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
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Teléfono</FormLabel>
            <FormControl>
              <Input placeholder="0412123456" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {!driver ? (
        <>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input
                    placeholder="juan@gmail.com"
                    type="email"
                    required
                    {...field}
                  />
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
                    required
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Esta clave es temporal. El usuario debe actualizarla después
                  de iniciar sesión.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      ) : null}
      {user?.userType !== 'provider' && (
        <FormField
          control={form.control}
          name="providerId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proveedor</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
              >
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
      )}
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
                {providers.data.map((provider) => {
                  const vehiclesToDisplay =
                    user?.userType === 'provider'
                      ? provider.vehicles.filter(
                          (vehicle) => vehicle.providerId === user.id
                        )
                      : provider.vehicles;
                  return vehiclesToDisplay.map((vehicle) => (
                    <SelectItem key={vehicle.id} value={vehicle.id}>
                      <div className="flex gap-2 items-center">
                        <div
                          style={{ backgroundColor: vehicle.color }}
                          className="rounded-full size-3"
                        />
                        <p>
                          {vehicle.brand} {vehicle.model} ({vehicle.year}) -{' '}
                          {provider.company.name}
                        </p>
                      </div>
                    </SelectItem>
                  ));
                })}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormWrapper>
  );
}
