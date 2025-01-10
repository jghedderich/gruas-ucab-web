'use client';
import React from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { DriverWithVehicle } from '@/types';
import { DriverInput } from './form/DriverInput';
import { useForm } from 'react-hook-form';
import { Form } from '../ui/form';
import { useMutation } from '@/hooks/useMutation';
import { useToast } from '@/hooks/use-toast';
import { usePathname } from 'next/navigation';

interface ReAssignDriverDialogProps {
  orderStatus: string;
  drivers: DriverWithVehicle[];
}

export const ReAssignDriverDialog = ({
  orderStatus,
  drivers,
}: ReAssignDriverDialogProps) => {
  const form = useForm();

  const { mutate, isSubmitting } = useMutation();
  const { toast } = useToast();
  const path = usePathname();

  const handleSubmit = async (data: any) => {
    console.log(path.split('/')[2]);
    console.log(data.incidentStep.driverId);
    await mutate({
      body: {
        order: {
          id: path.split('/')[2],
          driverId: data.incidentStep.driverId,
        },
      },
      route: '/orders-service/orders/driver',
      method: 'PUT',
    });
    toast({
      title: 'Conductor reasignado',
      description: 'El conductor se ha reasignado correctamente.',
    });
  };

  return (
    <Form {...form}>
      <Dialog>
        <DialogTrigger asChild>
          <Button disabled={orderStatus !== 'ToBeAssigned'}>
            Asignar conductor
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>Reasignar conductor</DialogTitle>
            <DialogDescription>
              Seleccione el conductor a quien desea asignar la orden.
            </DialogDescription>
          </DialogHeader>
          <DriverInput drivers={drivers} form={form} />
          <DialogFooter>
            <Button
              onClick={() => handleSubmit(form.getValues())}
              type="submit"
              disabled={isSubmitting}
            >
              Enviar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Form>
  );
};
