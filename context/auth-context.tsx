'use client';

import React, { createContext, useState, useCallback, useEffect } from 'react';
import Cookies from 'js-cookie';
import { User, UserType } from '@/types';
import { useRouter } from 'next/navigation';

type AuthContextType = {
  user: User | undefined;
  login: (userData: User, userType: UserType, token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const router = useRouter();

  const login = useCallback(
    (userData: User, userType: UserType, token: string) => {
      const userWithType = { ...userData, userType };
      setUser(userWithType);
      const encodedUserData = encodeURIComponent(JSON.stringify(userWithType));
      Cookies.set('userData', encodedUserData, { expires: 7 });
      Cookies.set('userType', userType, { expires: 7 });
      Cookies.set('token', token, { expires: 7 });
      router.push('/');
    },
    [router]
  );

  const logout = useCallback(() => {
    setUser(undefined);
    Cookies.remove('userData');
    Cookies.remove('userType');
    Cookies.remove('token');
    router.replace('/login/administrator');
  }, [router]);

  useEffect(() => {
    const userDataCookie = Cookies.get('userData');

    if (userDataCookie) {
      try {
        const decodedUserData = decodeURIComponent(userDataCookie);
        const parsedUserData: User = JSON.parse(decodedUserData);
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
