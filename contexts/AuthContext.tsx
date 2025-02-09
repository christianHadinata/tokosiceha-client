"use client";

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

import { jwtDecode } from "jwt-decode";

interface UserPayload {
  user_id: string;
  user_email: string;
  user_name: string;
  user_role: string;
  user_phone: string | null;
}

interface AuthContextType {
  user: UserPayload | null;
  setUser: (user: UserPayload | null) => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserPayload | null>(null);

  // loading first
  const [loading, setLoading] = useState(true);

  // Check JWT Token when first loaded
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser: UserPayload = jwtDecode(token);
        setUser(decodedUser);
      } catch (error) {
        console.error("Invalid token", error);
        setUser(null);
      }
    }
    setLoading(false); // after the process finish
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
