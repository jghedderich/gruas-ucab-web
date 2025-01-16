import React from 'react';
import { useRouter } from 'next/navigation';
import { fetchData } from '@/lib/fetchData';
import { useToast } from './use-toast';
import Cookies from 'js-cookie';

export const useMutation = () => {
  const { back, refresh } = useRouter();
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
    setIsSubmitting(true);
    try {
      await fetchData(route, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Los datos no se han guardado correctamente.',
        variant: 'destructive',
      });
    } finally {
      if (method === 'PUT' || method === 'DELETE') {
        toast({
          title: 'Cambios guardados',
          description: 'Los cambios se han guardado correctamente.',
        });
      } else if (method === 'POST') {
        toast({
          title: 'Datos guardados',
          description: 'Los datos se han guardado correctamente.',
        });
      }
      setIsSubmitting(false);
      refresh();
    }
  }

  return {
    mutate,
    back,
    isSubmitting,
  };
};
