import { z } from 'zod';

const addressSchema = z.object({
  addressLine1: z.string().min(1, 'La línea de dirección 1 es requerida'),
  addressLine2: z.string().optional(),
  zip: z.string().min(1, 'El código postal es requerido'),
  city: z.string().min(1, 'La ciudad es requerida'),
  state: z.string().min(1, 'El estado es requerido'),
  coordinates: z.object({
    latitude: z.string(),
    longitude: z.string(),
  }),
});

export const orderFormSchema = z.object({
  operatorId: z.string().min(1, 'El ID del operador es requerido'),
  policyId: z.string().min(1, 'La póliza es requerida'),
  driverId: z.string().min(1, 'El conductor es requerido'),
  client: z.object({
    name: z.object({
      firstName: z.string().min(1, 'El nombre es requerido'),
      lastName: z.string().min(1, 'El apellido es requerido'),
    }),
    email: z
      .string()
      .email('Correo electrónico inválido')
      .min(1, 'El correo electrónico es requerido'),
    phone: z.string().min(1, 'El teléfono es requerido'),
    dni: z.object({
      type: z.string().min(1, 'El tipo de DNI es requerido'),
      number: z.string().min(1, 'El número de DNI es requerido'),
    }),
    clientVehicle: z.object({
      brand: z.string().min(1, 'La marca del vehículo es requerida'),
      model: z.string().min(1, 'El modelo del vehículo es requerido'),
      year: z.string().min(1, 'El año del vehículo es requerido'),
      type: z.string().min(1, 'El tipo de vehículo es requerido'),
    }),
  }),
  incidentAddress: addressSchema,
  destinationAddress: addressSchema,
});

export type OrderFormData = z.infer<typeof orderFormSchema>;
