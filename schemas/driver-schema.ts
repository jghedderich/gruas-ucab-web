import { z } from 'zod';

export const driverSchema = z.object({
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
    number: z.string().min(8, {
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
  vehicleId: z.string().min(1, {
    message: 'El vehículo es obligatorio.',
  }),
  providerId: z.string().min(1, {
    message: 'El proveedor es obligatorio.',
  }),
});

export type DriverFormData = z.infer<typeof driverSchema>;
