import { z } from 'zod';

export const vehicleSchema = z.object({
  model: z.string().min(2, {
    message: 'Model must be at least 2 characters.',
  }),
  brand: z.string().min(2, {
    message: 'Brand must be at least 2 characters.',
  }),
  type: z.enum(['heavyTruck', 'lightTruck', 'mediumTruck', 'motorcycle']),
  year: z
    .number()
    .int()
    .min(1900)
    .max(new Date().getFullYear() + 1),
  owner: z.string().min(1, {
    message: 'Please select an owner.',
  }),
});

export type VehicleFormData = z.infer<typeof vehicleSchema>;
