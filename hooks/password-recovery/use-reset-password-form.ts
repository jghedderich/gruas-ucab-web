import React from 'react';
import { useForm } from 'react-hook-form';
import { fetchData } from '@/lib/fetchData';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '../use-toast';
import { useRouter } from 'next/navigation';
import { UserType } from '@/types';
import { calculateRoute } from '@/lib/calculate-route';

const formSchema = z
  .object({
    password: z.string().min(6, {
      message: 'La contraseña debe tener al menos 6 caracteres.',
    }),
    confirmPassword: z.string().min(6, {
      message: 'La contraseña debe tener al menos 6 caracteres.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden.',
    path: ['confirmPassword'],
  });

export const useResetPasswordForm = ({
  userType,
  userId,
}: {
  userType: UserType;
  userId: string;
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const url = calculateRoute(userType);
      const requestBody = {
        [userType]: {
          id: userId,
          newPassword: values.password,
        },
      };
      await fetchData(url + '/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      router.push('password-recovery?step=success&userType=' + userType);
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
