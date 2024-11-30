import { z } from 'zod';

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(6, {
      message: 'La contraseña actual debe tener al menos 6 caracteres.',
    }),
    newPassword: z.string().min(6, {
      message: 'La nueva contraseña debe tener al menos 6 caracteres.',
    }),
    confirmPassword: z.string().min(6, {
      message:
        'La confirmación de la contraseña debe tener al menos 6 caracteres.',
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Las contraseñas no coinciden.',
    path: ['confirmPassword'],
  });

export type ChangePasswordData = z.infer<typeof changePasswordSchema>;
