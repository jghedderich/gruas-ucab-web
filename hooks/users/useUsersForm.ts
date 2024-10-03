'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '../use-toast';
import { Role, User } from '@/types';
import { UserFormData, usersSchema } from '@/schemas/user-schema';

export const useUsersForm = ({ user }: { user?: User }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<UserFormData>({
    resolver: zodResolver(usersSchema),
    defaultValues: {
      name: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      phone: user?.phone || '',
      password: '',
      dni: user?.dni || '',
      role: user?.role || Role.Driver,
      companyName: user?.companyName || '',
      companyAddress: user?.companyAddress || '',
      companyPhone: user?.companyPhone || '',
      rif: user?.rif || '',
    },
  });

  const watchRole = form.watch('role');

  useEffect(() => {
    if (user) {
      form.reset(user);
    }
  }, [user, form]);

  function onSubmit(values: UserFormData) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      if (user) {
        toast({
          title: 'Usuario actualizado',
          description: 'El user se ha actualizado correctamente.',
        });
      } else {
        toast({
          title: 'Usuario creado',
          description: 'El user se ha creado correctamente.',
        });
      }
    }, 2000);
  }
  return {
    // state
    form,
    isSubmitting,
    watchRole,

    // actions
    back,
    onSubmit,
  };
};
