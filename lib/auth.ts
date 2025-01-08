import { cookies } from 'next/headers';
import { User, UserType } from '@/types';

export function getAuthToken(): string | null {
  const cookieStore = cookies();
  return cookieStore.get('token')?.value || null;
}

export function setAuthCookies(user: User, userType: UserType, token: string) {
  const encodedUserData = encodeURIComponent(
    JSON.stringify({ ...user, userType })
  );
  cookies().set('userData', encodedUserData, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
  }); // 7 days
  cookies().set('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
  }); // 7 days
}

export function clearAuthCookies() {
  cookies().delete('userData');
  cookies().delete('token');
}
