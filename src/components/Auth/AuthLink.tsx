import React from "react";

interface AuthLinkProps {
  text: string;
  linkText: string;
  href: string;
}

export default function AuthLink({ text, linkText, href }: AuthLinkProps) {
  return (
    <p className="text-sm text-center text-textColor mt-4">
      {text}{" "}
      <a href={href} className="text-hoverButtonColor hover:underline ml-2">
        {linkText}
      </a>
    </p>
  );
}
