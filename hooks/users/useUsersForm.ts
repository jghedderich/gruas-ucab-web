'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useToast } from '../use-toast';
import { Role, User } from '@/types';

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: 'Nombre must be at least 2 characters.',
  }),
  apellido: z.string().min(2, {
    message: 'Apellido must be at least 2 characters.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  dni: z.string().min(8, {
    message: 'DNI must be at least 8 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  rol: z.enum([Role.Admin, Role.Operator, Role.Provider, Role.Driver]),
});

export const useUsersForm = ({ user }: { user?: User }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { back } = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: '',
      apellido: '',
      password: '',
      dni: '',
      email: '',
      rol: user?.role,
    },
  });

  useEffect(() => {
    if (user) {
      form.reset(user);
    }
  }, [user, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
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

    // actions
    back,
    onSubmit,
  };
};
