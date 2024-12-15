import { z } from 'zod';

export const departmentSchema = z.object({
  departmentName: z.string(),
  description: z.string(),
});

export type DepartmentFormData = z.infer<typeof departmentSchema>;
