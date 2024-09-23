'use client';
import React from 'react';
import { FormWrapper } from '../ui/FormWrapper';
import { User } from '@/types';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useUsersForm } from '@/hooks/useUsersForm';

interface UsersFormProps {
  user?: User;
}

export const UsersForm = ({ user }: UsersFormProps) => {
  const { form, onSubmit, back, isSubmitting } = useUsersForm({ user });
  return (
    <FormWrapper
      form={form}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
      back={back}
      isEditing={!!user}
    >
      <FormField
        control={form.control}
        name="nombre"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input placeholder="Peter" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="apellido"
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
            <FormLabel>Numero de cédula</FormLabel>
            <FormControl>
              <Input placeholder="V12345678" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="rol"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Rol</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione el rol" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="admin">Administrador</SelectItem>
                <SelectItem value="operador">Operador</SelectItem>
                <SelectItem value="proveedor">Proveedor</SelectItem>
                <SelectItem value="conductor">Conductor</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="john.doe@example.com" {...field} />
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
              <Input placeholder="Mínimo 6 caracteres" {...field} />
            </FormControl>
            <FormDescription>
              Esta clave es temporal. El user debe actualizarla después de
              iniciar sesión.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormWrapper>
  );
};
