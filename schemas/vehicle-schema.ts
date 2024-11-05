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
  year: z.string().min(4, {
    message: 'Year must be at least 4 characters.',
  }),
  providerId: z.string().min(1, {
    message: 'Please select a provider.',
  }),
});

export type VehicleFormData = z.infer<typeof vehicleSchema>;
