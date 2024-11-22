/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useAuth } from '../auth/use-auth';
import { User } from '@/types';
import { ProfileFormData, profileSchema } from '@/schemas/profile-schema';
import { useMutation } from '../useMutation';
import { parseProfileFormValues } from '@/lib/parse-profile-form-values';

export const useProfileForm = () => {
  const { user } = useAuth() as { user: User | null };
  const { mutate, isSubmitting } = useMutation();
  const { back } = useRouter();

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: React.useMemo(() => {
      if (!user) return {} as ProfileFormData;

      const baseValues = {
        userType: user.userType,
        firstName: user.name?.firstName || '',
        lastName: user.name?.lastName || '',
        phone: user.phone || '',
        dni: `${user.dni.type}${user.dni.number}`,
      };

      if (user.userType === 'provider') {
        return {
          ...baseValues,
          companyName: user.company?.name || '',
          companyDescription: user.company?.description || '',
          rif: user.company?.rif || '',
          state: user.company?.state || '',
          city: user.company?.city || '',
        } as ProfileFormData;
      }

      return baseValues as ProfileFormData;
    }, [user]),
  });

  React.useEffect(() => {
    if (user) {
      const resetData: Partial<ProfileFormData> = {
        userType: user.userType,
        firstName: user.name?.firstName || '',
        lastName: user.name?.lastName || '',
        phone: user.phone || '',
        dni: `${user.dni.type}${user.dni.number}`,
      };

      if (user.userType === 'provider') {
        Object.assign(resetData, {
          companyName: user.company?.name || '',
          companyDescription: user.company?.description || '',
          rif: user.company?.rif || '',
          state: user.company?.state || '',
          city: user.company?.city || '',
        });
      }

      form.reset(resetData as ProfileFormData);
    }
  }, [user, form]);

  async function onSubmit(values: ProfileFormData) {
    const userType = values.userType;
    const parsedValues = parseProfileFormValues(values, user!);

    const requestBody = {
      [userType]: parsedValues,
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
