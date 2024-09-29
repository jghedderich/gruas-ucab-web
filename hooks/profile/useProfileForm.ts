'use client';
import { useEffect, useState } from 'react';
import { useToast } from '../use-toast';
import { useForm } from 'react-hook-form';
import { ProfileFormData, profileSchema } from '@/schemas/profile-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '@/types';
import { useRouter } from 'next/navigation';

export const useProfileForm = ({ currentUser }: { currentUser: User }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dni: '',
    },
  });

  useEffect(() => {
    if (currentUser) {
      form.reset(currentUser);
    }
  }, [currentUser, form]);

  function onSubmit(values: ProfileFormData) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: 'Perfil actualizado',
        description: 'Tus datos se ha actualizado correctamente.',
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
