import { z } from 'zod';

export const vehicleSchema = z.object({
  model: z.string().min(2, {
    message: 'Model must be at least 2 characters.',
  }),
  brand: z.string().min(2, {
    message: 'Brand must be at least 2 characters.',
  }),
  type: z.string().min(4, {
    message: 'Year must be at least 4 characters.',
  }),
  year: z.any(),
  providerId: z.string().min(1, {
    message: 'Please select a provider.',
  }),
  color: z.string().min(7, {
    message: 'El color es requerido',
  }),
  licensePlate: z.string().min(6, {
    message: 'Please enter a license plate.',
  }),
});

export type VehicleFormData = z.infer<typeof vehicleSchema>;
