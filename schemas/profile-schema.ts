import { z } from 'zod';

export const profileSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Nombre must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Apellido must be at least 2 characters.',
  }),
  dni: z.string().min(2, {
    message: 'Dni must be at least 2 characters.',
  }),
  phone: z.string().min(2, {
    message: 'Phone must be at least 2 characters.',
  }),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
