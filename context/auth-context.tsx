'use client';

import { useRouter } from 'next/navigation';
import React, { createContext, useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import { User, UserType } from '@/types';

type AuthContextType = {
  user: User | null;
  login: (userData: User, userType: UserType) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const logout = useCallback(() => {
    setUser(null);
    Cookies.remove('auth');
    Cookies.remove('userData');
    router.push('/login');
  }, [router]);

  const login = useCallback(
    (userData: User, userType: UserType) => {
      setUser({ ...userData, userType });
      Cookies.set('auth', 'true', { expires: 7 });
      Cookies.set('userData', JSON.stringify(userData), { expires: 7 });
      router.push('/');
    },
    [router]
  );

  React.useEffect(() => {
    const authCookie = Cookies.get('auth');
    const userDataCookie = Cookies.get('userData');

    if (authCookie && userDataCookie) {
      try {
        const parsedUserData: User = JSON.parse(userDataCookie);
        setUser(parsedUserData);
      } catch (error) {
        console.error('Error parsing user data from cookie:', error);
        logout();
      }
    }
  }, [logout]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
