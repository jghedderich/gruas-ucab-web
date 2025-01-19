'use client';
import React from 'react';
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
import { useNotificationForm } from '@/hooks/notifications/use-notifications-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { DriverWithVehicle } from '@/types';

interface NotificationsFormProps {
  drivers: DriverWithVehicle[];
}

export const NotificationsForm = ({ drivers }: NotificationsFormProps) => {
  const { form, isSubmitting, onSubmit, back } = useNotificationForm();

  return (
    <FormWrapper
      form={form}
      isSubmitting={isSubmitting}
      isEditing={false}
      onSubmit={onSubmit}
      back={back}
    >
      <FormField
        control={form.control}
        name="deviceToken"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Conductor</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione un conductor" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {drivers.map((driver) => (
                  <SelectItem
                    key={driver.driver.id}
                    value={driver.driver.id}
                    disabled={driver.driver.token === null}
                  >
                    {driver.driver.name.firstName} {driver.driver.name.lastName}{' '}
                    - {driver.provider.company.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>
              Se enviara una notificación push de inmediato.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <div />
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Título</FormLabel>
            <FormControl>
              <Input placeholder="Aviso importante" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="body"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cuerpo</FormLabel>
            <FormControl>
              <Input placeholder="Detalles sobre el aviso" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormWrapper>
  );
};
