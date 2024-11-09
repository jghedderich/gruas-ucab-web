import { DriverFormData } from '@/schemas/driver-schema';

export const parseDriverData = (values: DriverFormData) => {
  const { firstName, lastName, dni, ...rest } = values;

  return {
    ...rest,
    name: {
      firstName,
      lastName,
    },
    dni: {
      type: dni.slice(0, 1),
      number: dni.slice(1),
    },
    status: 'Available',
  };
};
