"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import Button from "@/components/common/Buttom";
import Input from "@/components/common/Input";
import FormContainer from "@/components/Auth/FormContainer";
import AuthLink from "@/components/Auth/AuthLink";

export default function Login() {
  const { login, isSubmitting } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <FormContainer title="Faça seu login">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
      </form>
      <AuthLink
        text="Não tem uma conta?"
        linkText="Cadastre-se"
        href="/register"
      />
    </FormContainer>
  );
}
