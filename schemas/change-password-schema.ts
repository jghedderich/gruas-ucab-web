import { z } from 'zod';

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(8, {
    message: 'Current password must be at least 8 characters.',
  }),
  newPassword: z.string().min(8, {
    message: 'New password must be at least 8 characters.',
  }),
});

export type ChangePasswordData = z.infer<typeof changePasswordSchema>;
