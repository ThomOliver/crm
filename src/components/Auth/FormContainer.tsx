import React from "react";

interface FormContainerProps {
  children: React.ReactNode;
  title: string;
}

export default function FormContainer({ children, title }: FormContainerProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundPrimary">
      <div className="w-full max-w-md bg-backgroundPrimaryRgba p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-hoverButtonColor">{title}</h2>
        {children}
      </div>
    </div>
  );
}
