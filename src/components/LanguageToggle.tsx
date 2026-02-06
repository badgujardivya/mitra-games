interface LanguageToggleProps {
  language: "en" | "hi";
  onToggle: () => void;
}

const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 bg-card border-2 border-border rounded-full px-4 py-2 text-lg font-bold transition-all duration-200 active:scale-95 shadow-soft"
      aria-label="Toggle language"
    >
      <span className={language === "en" ? "text-primary" : "text-muted-foreground"}>
        EN
      </span>
      <div className="w-12 h-7 bg-muted rounded-full relative">
        <div
          className={`absolute top-1 w-5 h-5 rounded-full bg-primary transition-all duration-200 ${
            language === "hi" ? "left-6" : "left-1"
          }`}
        />
      </div>
      <span className={language === "hi" ? "text-primary" : "text-muted-foreground"}>
        हिं
      </span>
    </button>
  );
};

export default LanguageToggle;
