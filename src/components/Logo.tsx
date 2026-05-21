import { Link } from "react-router-dom";
import logoImage from "./20260306_073441.png"

interface LogoProps {
  variant?: "light" | "dark";
}

const Logo = ({ variant = "light" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-ef-navy";
  const circleColor = variant === "light" ? "bg-white" : "bg-ef-navy";
  const circleLetter = variant === "light" ? "text-ef-navy" : "text-white";

  return (
    <Link to="/" className={`flex items-center gap-2 ${textColor} group`}>
      <div className="h-16 flex items-center overflow-visible">
        <img
          src={logoImage}
          alt="EventFlow Logo"
          className="h-full w-auto max-w-[220px] object-contain scale-150 transition-transform duration-300 group-hover:scale-[1.6]"
        />
      </div>
    </Link>
  );
};

export default Logo;