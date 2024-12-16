"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import FormContainer from "@/components/Auth/FormContainer";
import Input from "@/components/common/Input";
import Button from "@/components/common/Buttom";
import AuthLink from "@/components/Auth/AuthLink";

export default function RegisterPage() {
  const { register, isSubmitting } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await register(name, email, password, confirmPassword);
  };

  return (
    <FormContainer title="Crie sua conta">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Nome Completo"
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="seuemail@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          id="confirm-password"
          label="Confirme a Senha"
          type="password"
          placeholder="********"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Registrando..." : "Registrar"}
        </Button>
      </form>
      <AuthLink
        text="Já tem uma conta?"
        linkText="Faça login"
        href="/login"
      />
    </FormContainer>
  );
}
