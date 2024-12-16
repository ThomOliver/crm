"use client";
import { useState } from "react";
import Button from "@/components/common/Buttom";
import Input from "@/components/common/Input";
import FormContainer from "@/components/Auth/FormContainer";
import AuthLink from "@/components/Auth/AuthLink";
import { auth } from "@/config/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      return setError("Por favor, insira seu e-mail.");
    }

    try {
      setIsSubmitting(true);
      
      await sendPasswordResetEmail(auth, email);

      setSuccess("Um link para redefinir sua senha foi enviado para seu e-mail.");
    } catch (err: any) {
      console.error(err);
      setError(
        err.code === "auth/user-not-found"
          ? "Não encontramos nenhuma conta com este e-mail."
          : "Ocorreu um erro ao enviar o e-mail de redefinição. Tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer title="Recupere sua senha">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="seuemail@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        {success && <p className="text-sm text-green-500">{success}</p>}
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar link de redefinição"}
        </Button>
      </form>
      <AuthLink
        text="Lembrou sua senha?"
        linkText="Faça login"
        href="/login"
      />
    </FormContainer>
  );
}