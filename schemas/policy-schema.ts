import { z } from 'zod';

export const policyFormSchema = z.object({
  name: z.string().min(3, 'El nombre es requerido'),
  price: z.object({
    annualPrice: z.coerce.number().min(1, 'El precio anual es requerido'),
    monthlyPrice: z.coerce.number().min(1, 'El precio mensual es requerido'),
  }),
  fees: z.object({
    baseFee: z.coerce.number().min(1, 'La tarifa base es requerida'),
    perKm: z.coerce.number().min(1, 'La tarifa por km es requerida'),
  }),
  amountCovered: z.coerce.number().min(1, 'La distancia cubierta es requerida'),
});

export type PolicyFormData = z.infer<typeof policyFormSchema>;
