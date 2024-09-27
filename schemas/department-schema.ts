import { z } from 'zod';

export const departmentSchema = z.object({
  name: z.string(),
  description: z.string(),
  employees: z.number(),
});

export type DepartmentFormData = z.infer<typeof departmentSchema>;
