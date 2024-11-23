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
import { dniTypes, Provider } from '@/types';
import { FormWrapper } from '../ui/FormWrapper';
import { useProviderForm } from '@/hooks/providers/useProviderForm';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface ProviderFormProps {
  provider?: Provider;
}

export default function ProviderForm({ provider }: ProviderFormProps) {
  const { form, onSubmit, back, isSubmitting } = useProviderForm({ provider });
  return (
    <FormWrapper
      form={form}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
      back={back}
      isEditing={!!provider}
      className="grid md:grid-cols-1 gap-6"
    >
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="name.firstName"
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
          name="name.lastName"
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
        <div className="flex gap-2 items-end relative">
          <FormField
            control={form.control}
            name="dni.type"
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
                Esta clave es temporal. El user debe actualizarla después de
                iniciar sesión.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </section>
      <hr />
      <h6 className="text-gray-400 text-sm">DATOS DE LA EMPRESA</h6>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="company.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Super Grúas Yaracuy" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company.description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enfocada en la seguridad de sus clientes"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company.rif"
          render={({ field }) => (
            <FormItem>
              <FormLabel>RIF</FormLabel>
              <FormControl>
                <Input placeholder="V12345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company.state"
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
          name="company.city"
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
      </section>
    </FormWrapper>
  );
}
