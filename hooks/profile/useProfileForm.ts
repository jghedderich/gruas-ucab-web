/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useAuth } from '../auth/use-auth';
import { User } from '@/types';
import { ProfileFormData, profileSchema } from '@/schemas/profile-schema';
import { useMutation } from '../useMutation';

export const useProfileForm = () => {
  const { user } = useAuth() as { user: User | null };
  const { mutate, isSubmitting } = useMutation();
  const { back } = useRouter();

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: { ...user } as ProfileFormData,
  });

  React.useEffect(() => {
    if (user) {
      const resetData: Partial<ProfileFormData> = {
        userType: user.userType,
        name: {
          firstName: user.name?.firstName || '',
          lastName: user.name?.lastName || '',
        },
        dni: {
          type: user.dni.type || '',
          number: user.dni.number || '',
        },
        phone: user.phone || '',
      };

      if (user.userType === 'provider') {
        Object.assign(resetData, {
          company: {
            name: user.company?.name || '',
            description: user.company?.description || '',
            rif: user.company?.rif || '',
            state: user.company?.state || '',
            city: user.company?.city || '',
          },
        });
      }

      form.reset(resetData as ProfileFormData);
    }
  }, [user, form]);

  async function onSubmit(values: ProfileFormData) {
    const userType = values.userType;

    const { userType: _, ...rest } = values;

    const requestBody = {
      [userType]: { ...rest, id: user!.id },
    };

    await mutate({
      body: requestBody,
      route: `/${userType}s-service/${userType}s`,
      method: 'PUT',
    });
  }
  return {
    form,
    isSubmitting,
    user,
    back,
    onSubmit,
  };
};
