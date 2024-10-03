import { Role } from '@/types';
import { z } from 'zod';

export const usersSchema = z
  .object({
    name: z.string().min(2, {
      message: 'El nombre debe tener al menos 2 caracteres.',
    }),
    lastName: z.string().min(2, {
      message: 'El apellido debe tener al menos 2 caracteres.',
    }),
    dni: z.string().min(8, {
      message: 'El DNI debe tener al menos 8 caracteres.',
    }),
    phone: z.string().min(8, {
      message: 'El teléfono debe tener al menos 8 caracteres.',
    }),
    email: z.string().email({
      message: 'Dirección de correo electrónico inválida.',
    }),
    password: z.string().min(6, {
      message: 'La contraseña debe tener al menos 6 caracteres.',
    }),
    role: z.enum([Role.Admin, Role.Operator, Role.Provider, Role.Driver]),
    companyName: z.string().optional(),
    rif: z.string().optional(),
    companyPhone: z.string().optional(),
    companyAddress: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.role === Role.Provider) {
      if (!data.companyName || data.companyName.length < 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'El nombre de la empresa debe tener al menos 2 caracteres.',
          path: ['companyName'],
        });
      }
      if (!data.rif || data.rif.length < 8) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'El RIF debe tener al menos 8 caracteres.',
          path: ['rif'],
        });
      }
      if (!data.companyPhone || data.companyPhone.length < 8) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            'El teléfono de la empresa debe tener al menos 8 caracteres.',
          path: ['companyPhone'],
        });
      }
      if (!data.companyAddress || data.companyAddress.length < 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            'La dirección de la empresa debe tener al menos 2 caracteres.',
          path: ['companyAddress'],
        });
      }
    }
  });

export type UserFormData = z.infer<typeof usersSchema>;
