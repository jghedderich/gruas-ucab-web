import { z } from 'zod';

export const additionalCostSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export type AdditionalCostFormData = z.infer<typeof additionalCostSchema>;
