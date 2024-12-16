import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  className?: string;
}

export default function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-textColor">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-buttonColor focus:border-buttonColor sm:text-sm outline-none text-black ${className}`}
        {...props}
      />
    </div>
  );
}
