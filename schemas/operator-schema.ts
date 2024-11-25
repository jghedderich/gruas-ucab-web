import { z } from 'zod';

export const operatorSchema = z.object({
  name: z.object({
    firstName: z.string().min(2, {
      message: 'El nombre debe tener al menos 2 caracteres.',
    }),
    lastName: z.string().min(2, {
      message: 'El apellido debe tener al menos 2 caracteres.',
    }),
  }),
  dni: z.object({
    type: z.string().min(1, {
      message: 'El tipo de DNI es obligatorio.',
    }),
    number: z.string().min(7, {
      message: 'El número de DNI es obligatorio.',
    }),
  }),
  phone: z.string().length(11, {
    message: 'El teléfono debe tener 11 caracteres.',
  }),
  email: z
    .string()
    .email({
      message: 'Dirección de correo electrónico inválida.',
    })
    .optional(),
  password: z
    .string()
    .min(6, {
      message: 'La contraseña debe tener al menos 6 caracteres.',
    })
    .optional(),
});

export type OperatorFormData = z.infer<typeof operatorSchema>;
