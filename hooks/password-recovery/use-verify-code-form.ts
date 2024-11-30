import React from 'react';
import { useForm } from 'react-hook-form';
import { fetchData } from '@/lib/fetchData';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '../use-toast';
import { useRouter } from 'next/navigation';
import { UserType } from '@/types';

const formSchema = z.object({
  code: z.string().min(6, {
    message: 'El código debe tener al menos 6 caracteres.',
  }),
});

export const useVerifyCodeForm = ({
  userType,
  email,
}: {
  userType: UserType;
  email: string;
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: '',
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
      const response = await fetchData(url + '/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, code: values.code }),
      });
      router.push(
        `password-recovery?step=reset&userType=${userType}&userId=${response.verifyDto.id}`
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
