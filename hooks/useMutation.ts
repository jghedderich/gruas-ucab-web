import React from 'react';
import { useRouter } from 'next/navigation';
import { fetchData } from '@/lib/fetchData';
import { useToast } from './use-toast';

export const useMutation = () => {
  const { refresh, back } = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  async function mutate({
    body,
    route,
    method,
  }: {
    body?: unknown;
    route: string;
    method: string;
  }) {
    try {
      setIsSubmitting(true);
      await fetchData(route, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      refresh();
      if (method === 'PUT') {
        toast({
          title: 'Cambios guardados',
          description: 'Los cambios se han guardado correctamente.',
        });
      } else if (method === 'DELETE') {
        toast({
          title: 'Datos eliminados',
          description: 'Los datos se han eliminado correctamente.',
        });
      } else if (method === 'POST') {
        toast({
          title: 'Datos guardados',
          description: 'Los datos se han guardado correctamente.',
        });
        back();
      }
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error',
        description: 'Los datos no se han guardado correctamente.',
        variant: 'destructive',
      });
    }
    setIsSubmitting(false);
  }

  return {
    mutate,
    back,
    isSubmitting,
  };
};
