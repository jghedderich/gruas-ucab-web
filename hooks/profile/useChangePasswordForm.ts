'use client';
import { useState } from 'react';
import { useToast } from '../use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import {
  ChangePasswordData,
  changePasswordSchema,
} from '@/schemas/change-password-schema';
import { useAuth } from '../auth/use-auth';

export const useChangePasswordForm = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  function onSubmit(values: ChangePasswordData) {
    if (values.currentPassword !== user?.password) {
      toast({
        title: 'Contraseña incorrecta',
        description: 'La contraseña actual no es correcta.',
      });
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: 'Contraseña actualizada',
        description: 'Tu contraseña se ha actualizado correctamente.',
      });
    }, 2000);
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
