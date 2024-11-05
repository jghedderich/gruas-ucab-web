import { z } from 'zod';

export const driverSchema = z.object({
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
  vehicleId: z.string().min(1, {
    message: 'El vehículo es obligatorio.',
  }),
  providerId: z.string().min(1, {
    message: 'El proveedor es obligatorio.',
  }),
});

export type DriverFormData = z.infer<typeof driverSchema>;
