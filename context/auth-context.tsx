"use client";

import { createContext, useContext, useState } from "react";

interface AuthContextValue {
  name: string | null;
  isGuest: boolean;
  login: (name: string) => void;
  continueAsGuest: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [name, setName] = useState<string | null>(null);
  const [isGuest, setIsGuest] = useState(false);

  const login = (nextName: string) => {
    setName(nextName.trim() || "Customer");
    setIsGuest(false);
  };

  const continueAsGuest = () => {
    setName(null);
    setIsGuest(true);
  };

  const logout = () => {
    setName(null);
    setIsGuest(false);
  };

  return (
    <AuthContext.Provider value={{ name, isGuest, login, continueAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
