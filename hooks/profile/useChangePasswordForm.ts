'use client';
import { useToast } from '../use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import {
  ChangePasswordData,
  changePasswordSchema,
} from '@/schemas/change-password-schema';
import { useAuth } from '../auth/use-auth';
import { useMutation } from '../useMutation';

export const useChangePasswordForm = () => {
  const { user } = useAuth();
  const { mutate, isSubmitting } = useMutation();
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<ChangePasswordData>({
    resolver: zodResolver(changePasswordSchema),
  });

  async function onSubmit(values: ChangePasswordData) {
    try {
      const userType = user!.userType;
      if (values.newPassword !== values.confirmPassword) {
        toast({
          title: 'Error',
          description: 'Las contraseñas no coinciden',
          variant: 'destructive',
        });
        return;
      }
      const requestBody = {
        [userType]: {
          id: user!.id,
          password: values.currentPassword,
          newPassword: values.newPassword,
        },
      };
      await mutate({
        body: requestBody,
        route: `/${userType}s-service/${userType}s/password`,
        method: 'PUT',
      });
    } catch (err) {
      console.error(err);
      toast({
        title: 'Error',
        description: 'Error al cambiar la contraseña',
        variant: 'destructive',
      });
    }
  }
  return {
    // state
    form,
    isSubmitting,

    // actions
    back,
    onSubmit,
  };
};
