import { UserType } from '@/types';

export function calculateRoute(userType: UserType) {
  if (userType === 'admin') {
    return '/admin-service/administrators';
  } else if (userType === 'operator') {
    return '/orders-service/operators';
  } else if (userType === 'provider') {
    return '/providers-service/providers';
  } else {
    throw new Error('Invalid user type');
  }
}
