'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useMutation } from '../useMutation';
import {
  NotificationFormData,
  notificationSchema,
} from '@/schemas/notification-schema';

export const useNotificationForm = () => {
  const { back } = useRouter();
  const { isSubmitting } = useMutation();

  const form = useForm<NotificationFormData>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      deviceToken: '',
      time: '00:00:01',
      title: '',
      body: '',
    },
  });
  const { mutate } = useMutation();

  async function onSubmit(values: NotificationFormData) {
    try {
      await mutate({
        route: '/admin-service/notifications/send',
        method: 'POST',
        body: values,
      });
    } catch (error) {
      console.error(error);
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
