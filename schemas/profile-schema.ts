import { z } from 'zod';

const nameSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Nombre must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Apellido must be at least 2 characters.',
  }),
});

const dniSchema = z.object({
  type: z.string().min(1, {
    message: 'Tipo de DNI is required.',
  }),
  number: z.string().min(7, {
    message: 'Numero de DNI is required.',
  }),
});

const phoneSchema = z.string().min(2, {
  message: 'Phone must be at least 2 characters.',
});

const companySchema = z.object({
  name: z.string().min(2, {
    message: 'Nombre de la empresa must be at least 2 characters.',
  }),
  description: z.string().min(2, {
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

const administratorSchema = z.object({
  userType: z.literal('administrator'),
  name: nameSchema,
});

const operatorSchema = z.object({
  userType: z.literal('operator'),
  name: nameSchema,
  dni: dniSchema,
  phone: phoneSchema,
});

const providerSchema = z.object({
  userType: z.literal('provider'),
  name: nameSchema,
  dni: dniSchema,
  phone: phoneSchema,
  company: companySchema,
});

export const profileSchema = z.discriminatedUnion('userType', [
  administratorSchema,
  operatorSchema,
  providerSchema,
]);

export type ProfileFormData = z.infer<typeof profileSchema>;
