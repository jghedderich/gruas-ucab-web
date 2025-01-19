import { z } from 'zod';

export const notificationSchema = z.object({
  deviceToken: z.string().min(1, 'El token del dispositivo es requerido'),
  title: z.string().min(1, 'El título es requerido'),
  body: z.string().min(1, 'El cuerpo es requerido'),
  time: z.string(),
});

export type NotificationFormData = z.infer<typeof notificationSchema>;
