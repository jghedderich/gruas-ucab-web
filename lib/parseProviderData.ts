import { ProviderFormData } from '@/schemas/provider-schema';

export function parseProviderData(formData: ProviderFormData) {
  const {
    firstName,
    lastName,
    dni,
    companyName,
    description,
    rif,
    state,
    city,
    ...rest
  } = formData;

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
    company: {
      name: companyName,
      description,
      rif,
      state,
      city,
    },
  };
}
