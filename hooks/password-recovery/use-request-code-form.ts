import React from 'react';
import { useForm } from 'react-hook-form';
import { fetchData } from '@/lib/fetchData';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '../use-toast';
import { useRouter } from 'next/navigation';
import { UserType } from '@/types';

const formSchema = z.object({
  email: z.string().email({
    message: 'Por favor ingrese un correo electrónico válido.',
  }),
});

export const useRequestCodeForm = ({ userType }: { userType: UserType }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    let url;
    if (userType === 'admin') {
      url = '/admin-service';
    } else if (userType === 'operator') {
      url = '/orders-service';
    } else if (userType === 'provider') {
      url = '/providers-service';
    } else {
      throw new Error('Invalid user type');
    }

    try {
      await fetchData(url + '/request-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email, type: userType + 's' }),
      });
      router.push(
        `password-recovery?step=verify&userType=${userType}&email=${values.email}`
      );
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
