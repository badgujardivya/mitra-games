import { LucideIcon } from "lucide-react";

interface HomeButtonProps {
  icon: LucideIcon;
  emoji: string;
  label: string;
  labelHi: string;
  variant: "primary" | "secondary" | "accent";
  language: "en" | "hi";
  onClick?: () => void;
}

const variantClasses = {
  primary: "btn-game-primary",
  secondary: "btn-game-secondary",
  accent: "btn-game bg-accent text-accent-foreground",
};

const HomeButton = ({
  icon: Icon,
  emoji,
  label,
  labelHi,
  variant,
  language,
  onClick,
}: HomeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} w-full flex-col py-8 animate-slide-up`}
      style={{ boxShadow: variant === "accent" ? "0 6px 0 hsl(199 97% 35%)" : undefined }}
    >
      <span className="text-6xl mb-3">{emoji}</span>
      <span className="text-2xl">{language === "hi" ? labelHi : label}</span>
    </button>
  );
};

export default HomeButton;
