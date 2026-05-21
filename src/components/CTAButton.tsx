import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost" | "ghost-blue";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const CTAButton = ({ children, variant = "primary", onClick, className = "", type = "button", disabled }: CTAButtonProps) => {
  const base = "font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:scale-[1.03] text-sm md:text-base inline-flex items-center justify-center gap-2";

  const variants = {
    primary: `${base} bg-ef-red text-white glow-red hover:shadow-[0_0_30px_rgba(223,0,0,0.4)]`,
    ghost: `${base} bg-transparent text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/5`,
    "ghost-blue": `${base} bg-transparent text-ef-blue border-2 border-ef-blue/40 hover:border-ef-blue hover:bg-ef-blue/5`,
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default CTAButton;
