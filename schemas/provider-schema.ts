import { z } from 'zod';

export const providerSchema = z.object({
  firstName: z.string().min(2, {
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
  companyName: z.string().min(2, {
    message: 'El nombre de la empresa debe tener al menos 2 caracteres.',
  }),
  description: z.string().min(2, {
    message: 'La descripción de la empresa debe tener al menos 2 caracteres.',
  }),
  rif: z.string().min(8, {
    message: 'El RIF debe tener al menos 8 caracteres.',
  }),
  state: z.string().min(2, {
    message: 'El estado debe tener al menos 2 caracteres.',
  }),
  city: z.string().min(2, {
    message: 'La ciudad debe tener al menos 2 caracteres.',
  }),
});

export type ProviderFormData = z.infer<typeof providerSchema>;
