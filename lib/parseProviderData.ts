import { ProviderFormData } from '@/schemas/provider-schema';

export function parseProviderData(formData: ProviderFormData) {
  return {
    provider: {
      name: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      phone: formData.phone,
      email: formData.email,
      dni: {
        type: formData.dni.charAt(0),
        number: formData.dni.slice(1),
      },
      company: {
        name: formData.companyName,
        description: formData.description,
        rif: formData.rif,
        state: formData.state,
        city: formData.city,
      },
    },
  };
}
