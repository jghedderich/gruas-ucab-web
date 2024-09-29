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

export const useChangePasswordForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<ChangePasswordData>({
    resolver: zodResolver(changePasswordSchema),
  });

  function onSubmit(values: ChangePasswordData) {
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
