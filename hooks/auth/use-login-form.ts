import React from 'react';
import { useAuth } from './use-auth';
import { useForm } from 'react-hook-form';
import { fetchData } from '@/lib/fetchData';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '../use-toast';
import { UserType } from '@/types';
import { calculateRoute } from '@/lib/calculate-route';

const formSchema = z.object({
  email: z.string().email({
    message: 'Por favor ingrese un correo electrónico válido.',
  }),
  password: z.string().min(6, {
    message: 'La contraseña debe tener al menos 6 caracteres.',
  }),
});

export const useLoginForm = ({ userType }: { userType: UserType }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const url = calculateRoute(userType);

      const userData = await fetchData(url + '/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      login(userData[userType], userType, userData.token);
      toast({
        title: 'Ingreso exitoso',
        description: 'Has ingresado correctamente.',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Las credenciales no son correctas.',
        variant: 'destructive',
      });
    }
    setIsLoading(false);
  }

  return {
    // state
    form,
    isLoading,

    // actions
    onSubmit,
  };
};
