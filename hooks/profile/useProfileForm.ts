'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ProfileFormData, profileSchema } from '@/schemas/profile-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../auth/use-auth';
import { useRouter } from 'next/navigation';
import { useMutation } from '../useMutation';

export const useProfileForm = () => {
  const { user } = useAuth();
  const { mutate, isSubmitting } = useMutation();
  const { back } = useRouter();

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: user?.name?.firstName,
      lastName: user?.name?.lastName || '',
      phone: user?.phone || '',
      dni: user ? `${user.dni.type + user.dni.number}` : '',
    },
  });

  React.useEffect(() => {
    if (user) {
      form.reset({
        ...user,
        dni: `${user.dni.type + user.dni.number}`,
      } as unknown as ProfileFormData);
    }
  }, [user, form]);

  async function onSubmit(values: ProfileFormData) {
    await mutate({
      body: { user: { ...values, id: user?.id } },
      route: `/${user?.userType}s-service/${user?.userType}s`,
      method: 'PUT',
    });
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
