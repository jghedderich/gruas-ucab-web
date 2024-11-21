import { ProfileFormData } from '@/schemas/profile-schema';
import { User } from '@/types';

export function parseProfileFormValues(
  values: ProfileFormData,
  user: User
): Record<string, unknown> {
  const {
    userType,
    firstName,
    lastName,
    dni,
    phone,
    companyName,
    companyDescription,
    rif,
    state,
    city,
  } = values;

  // Initialize parsed values with necessary fields
  const parsedValues: Record<string, unknown> = {
    id: user.id,
    email: user.email,
    password: user.password,
    name: {
      firstName,
      lastName,
    },
    phone,
  };

  // Parse dni into type and number
  if (dni) {
    parsedValues.dni = {
      type: dni.charAt(0), // First character as type (e.g., 'V')
      number: dni.slice(1), // Remaining characters as number (e.g., '12345678')
    };
  }

  // If userType is 'provider', include company details
  if (userType === 'provider') {
    parsedValues.company = {
      name: companyName,
      description: companyDescription,
      rif,
      state,
      city,
    };
  }

  return parsedValues;
}
