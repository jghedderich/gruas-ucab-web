import { z } from 'zod';

const addressSchema = z.object({
  street: z.string().min(1, 'Street is required'),
  urbanization: z.string(),
  municipality: z.string().min(1, 'Municipality is required'),
  zipCode: z.string().min(1, 'Zip code is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  latitude: z.number(),
  longitude: z.number(),
});

export const orderFormSchema = z.object({
  id: z.number().optional(),
  clientPolicy: z.string().min(1, 'Client policy is required'),
  clientName: z.string().min(1, 'Client name is required'),
  clientPhone: z.string().min(1, 'Client phone is required'),
  clientDni: z.string().min(1, 'Client DNI is required'),
  location: addressSchema,
  destination: addressSchema,
  description: z.string().optional(),
});

export type OrderFormData = z.infer<typeof orderFormSchema>;
