import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundPrimary text-white p-4">
      <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-6 text-buttonColor text-center">
        Bem-vindo
      </h1>
      <p className="text-lg md:text-xl text-center max-w-md mb-10 text-textColor">
        Gerencie seus clientes e agendamentos com facilidade. Faça login para acessar seu painel ou cadastre-se para começar a organizar seus serviços.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/login"
          className="bg-backgroundPrimary border-2 border-teal-300 px-6 py-2 text-lg font-medium rounded-full shadow hover:bg-hoverButtonColor hover:text-backgroundPrimary transition-all duration-200 text-center"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-backgroundPrimary border-2 border-teal-300 px-6 py-2 text-lg font-medium rounded-full shadow hover:bg-hoverButtonColor hover:text-backgroundPrimary transition-all duration-200 text-center"
        >
          Cadastre-se
        </Link>
      </div>
      <footer className="mt-16 text-sm text-blue-100 text-center">
        <p>Samoth Tec © 2024 - Inovando com confiança, transformando cada detalhe.</p>
      </footer>
    </div>
  );
}
