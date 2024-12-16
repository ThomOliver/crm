"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { auth } from "@/config/firebaseConfig";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { User } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContextProps } from "@/types/authContextProps";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const register = async (name: string, email: string, password: string, confirmPassword: string) => {
    if (!name || !email || !password || !confirmPassword) {
      return alert("Por favor, preencha todos os campos.");
    }

    if (password !== confirmPassword) {
      return alert("As senhas não correspondem.");
    }

    try {
      setIsSubmitting(true);
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length > 0) {
        router.push("/recoverPassword");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log("Usuário registrado com sucesso:", userCredential.user);
      alert("Usuário registrado com sucesso!");
      router.push("/welcome");
    } catch (err: any) {
      console.error(err);
      router.push("/recoverPassword");
    } finally {
      setIsSubmitting(false);
    }
  };

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      return alert("Por favor, preencha todos os campos.");
    }

    try {
      setIsSubmitting(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log("Login bem-sucedido:", userCredential.user);
      router.push("/dashboard");
    } catch (err: any) {
      console.error("Erro ao fazer login:", err);
      alert("Credenciais inválidas ou erro ao fazer login.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const logout = () => {
    auth.signOut().then(() => {
      setUser(null);
      router.push("/login");
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ register, login, isSubmitting, isLoggedIn: !!user, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider.");
  }
  return context;
};

