// make an AuthContext and Provide with a isAuthenticated state

import React, { createContext, useContext, useState } from 'react';

interface AuthContextData {
  isAuthenticated: boolean;
  signIn(): void;
  signOut(): void;

  isEnrolled: boolean;
  enroll(): void;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const signIn = () => {
    setIsAuthenticated(true);
  };

  const signOut = () => {
    setIsAuthenticated(false);
  };

  const enroll = () => {
    setIsEnrolled(true);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, signOut, isEnrolled, enroll }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
