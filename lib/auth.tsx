"use client"

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api, { login as loginApi } from './api';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  organization?: string;
  district: string;
  phone?: string;
  avatar?: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('token');
          if (token) {
            const response = await api.get('/auth/me');
            setUser(response.data.data.user);
          }
        }
      } catch (error) {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
        }
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await loginApi({ email, password });
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', response.data.token);
      }
      setUser(response.data.user);
      router.push('/');
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 