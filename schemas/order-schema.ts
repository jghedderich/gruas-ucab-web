import { z } from 'zod';

const addressSchema = z.object({
  addressLine1: z.string().min(1, 'Address line 1 is required'),
  addressLine2: z.string().optional(),
  zip: z.string().min(1, 'Zip code is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  coordinates: z.object({
    latitude: z.string(),
    longitude: z.string(),
  }),
});

export const orderFormSchema = z.object({
  operatorId: z.string().min(1, 'Operator ID is required'),
  policyId: z.string().min(1, 'Policy ID is required'),
  client: z.object({
    name: z.object({
      firstName: z.string().min(1, 'First name is required'),
      lastName: z.string().min(1, 'Last name is required'),
    }),
    email: z.string().email('Invalid email').min(1, 'Email is required'),
    phone: z.string().min(1, 'Phone is required'),
    dni: z.object({
      type: z.string().min(1, 'DNI type is required'),
      number: z.string().min(1, 'DNI number is required'),
    }),
    clientVehicle: z.object({
      brand: z.string().min(1, 'Vehicle brand is required'),
      model: z.string().min(1, 'Vehicle model is required'),
      year: z.string().min(1, 'Vehicle year is required'),
      type: z.string().min(1, 'Vehicle type is required'),
    }),
  }),
  incidentAddress: addressSchema,
  destinationAddress: addressSchema,
});

export type OrderFormData = z.infer<typeof orderFormSchema>;
