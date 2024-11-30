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
import { calculateRoute } from '@/lib/calculate-route';

export const useChangePasswordForm = () => {
  const { user } = useAuth();
  const { mutate, isSubmitting } = useMutation();
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<ChangePasswordData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
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
      if (values.currentPassword !== user!.password) {
        toast({
          title: 'Error',
          description: 'La contraseña actual no es correcta',
          variant: 'destructive',
        });
        return;
      }
      const requestBody = {
        [userType]: {
          id: user!.id,
          newPassword: values.newPassword,
        },
      };
      const url = calculateRoute(userType);

      await mutate({
        body: requestBody,
        route: url + '/password',
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
