import { z } from 'zod';

const baseSchema = z.object({
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

const providerSchema = z.object({
  companyName: z.string().min(2, {
    message: 'Nombre de la empresa must be at least 2 characters.',
  }),
  companyDescription: z.string().min(2, {
    message: 'Descripción de la empresa must be at least 2 characters.',
  }),
  rif: z.string().min(2, {
    message: 'RIF must be at least 2 characters.',
  }),
  state: z.string().min(2, {
    message: 'Estado must be at least 2 characters.',
  }),
  city: z.string().min(2, {
    message: 'Ciudad must be at least 2 characters.',
  }),
});

export const profileSchema = z.discriminatedUnion('userType', [
  z.object({
    userType: z.literal('admin'),
    ...baseSchema.shape,
  }),
  z.object({
    userType: z.literal('operator'),
    ...baseSchema.shape,
  }),
  z.object({
    userType: z.literal('provider'),
    ...baseSchema.shape,
    ...providerSchema.shape,
  }),
]);

export type ProfileFormData = z.infer<typeof profileSchema>;
