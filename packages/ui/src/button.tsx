"use client";

import { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "outline" | "secondary";
  className?: string;
  onClick?: () => void;
  size: "lg" | "sm";
  children: ReactNode;
}

export const Button = ({ size, variant, className, onClick, children  }: ButtonProps) => {
  return (
    <button
      className={`
        group relative inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50
        ${className}
        ${variant === "primary" 
          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-[0_0_1rem_rgba(59,130,246,0.2)] hover:shadow-[0_0_1.5rem_rgba(59,130,246,0.3)]" 
          : variant === "secondary" 
          ? "bg-white/10 text-white backdrop-blur-sm border border-white/20 shadow-[0_0_1rem_rgba(0,0,0,0.1)] hover:bg-white/20" 
          : "bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 shadow-sm hover:bg-gray-50/90 hover:text-gray-900"}
        ${size === "lg" 
          ? "h-12 px-8 text-base" 
          : "h-10 px-4 text-sm"}
        overflow-hidden
      `}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
        </div>
      )}
    </button>
  );
};
