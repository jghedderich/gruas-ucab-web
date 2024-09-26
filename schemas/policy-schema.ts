import { z } from 'zod';

export const policyFormSchema = z.object({
  name: z.string().min(3, 'El nombre es requerido'),
  price: z.coerce.number().min(1, 'El precio es requerido'),
  kilometersCovered: z.coerce
    .number()
    .min(1, 'La distancia cubierta es requerida'),
  tripsCovered: z.coerce.number(),
  extraPerKm: z.coerce
    .number()
    .min(1, 'El precio extra por kilómetro es requerido'),
});

export type PolicyFormData = z.infer<typeof policyFormSchema>;
