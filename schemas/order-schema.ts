import { z } from 'zod';

const addressSchema = z.object({
  addressLine1: z.string().min(1, 'La línea de dirección 1 es requerida'),
  addressLine2: z.string().min(1, 'La línea de dirección 2 es requerida'),
  zip: z.string().min(1, 'El código postal es requerido'),
  city: z.string().min(1, 'La ciudad es requerida'),
  state: z.string().min(1, 'El estado es requerido'),
  coordinates: z.object({
    latitude: z.string().min(1, 'La latitud es requerida'),
    longitude: z.string().min(1, 'La longitud es requerida'),
  }),
});

export const orderFormSchema = z.object({
  clientStep: z.object({
    policyId: z.string().min(1, 'La póliza es requerida'),
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
    }),
  }),
  vehicleStep: z.object({
    clientVehicle: z.object({
      brand: z.string().min(1, 'La marca del vehículo es requerida'),
      model: z.string().min(1, 'El modelo del vehículo es requerido'),
      year: z.string().min(1, 'El año del vehículo es requerido'),
      type: z.string().min(1, 'El tipo de vehículo es requerido'),
    }),
  }),
  incidentStep: z.object({
    incidentAddress: addressSchema,
  }),
  destinationStep: z.object({
    destinationAddress: addressSchema,
  }),
  driverStep: z.object({
    driverId: z.string().min(1, 'El conductor es requerido'),
  }),
});

export type OrderFormData = z.infer<typeof orderFormSchema>;
