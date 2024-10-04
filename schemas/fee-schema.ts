import { z } from 'zod';

export const feeFormSchema = z.object({
  name: z.string().min(3, 'El nombre es requerido'),
  base: z.coerce.number().min(1, 'El precio base es requerido'),
  perKm: z.coerce.number().min(1, 'El precio por km es requerido'),
});

export type FeeFormData = z.infer<typeof feeFormSchema>;
