import { useState } from "react";
import { ArrowLeft, Star, Award, Trophy, Medal, Crown, Gem } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import LanguageToggle from "@/components/LanguageToggle";

interface Badge {
  id: number;
  icon: React.ReactNode;
  name: string;
  nameHi: string;
  description: string;
  descriptionHi: string;
  earned: boolean;
}

const Rewards = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const badges: Badge[] = [
    {
      id: 1,
      icon: <Star size={40} className="text-secondary" fill="hsl(var(--secondary))" />,
      name: "First Star",
      nameHi: "पहला तारा",
      description: "Complete your first level",
      descriptionHi: "पहला लेवल पूरा करें",
      earned: true,
    },
    {
      id: 2,
      icon: <Award size={40} className="text-primary" />,
      name: "Saver",
      nameHi: "बचतकर्ता",
      description: "Learn about saving",
      descriptionHi: "बचत के बारे में सीखें",
      earned: true,
    },
    {
      id: 3,
      icon: <Trophy size={40} className="text-secondary" />,
      name: "Champion",
      nameHi: "चैंपियन",
      description: "Complete 5 levels",
      descriptionHi: "5 लेवल पूरा करें",
      earned: true,
    },
    {
      id: 4,
      icon: <Medal size={40} className="text-accent" />,
      name: "UPI Expert",
      nameHi: "UPI विशेषज्ञ",
      description: "Learn about UPI",
      descriptionHi: "UPI के बारे में सीखें",
      earned: false,
    },
    {
      id: 5,
      icon: <Crown size={40} className="text-secondary" />,
      name: "Money Master",
      nameHi: "पैसे का मास्टर",
      description: "Complete 10 levels",
      descriptionHi: "10 लेवल पूरा करें",
      earned: false,
    },
    {
      id: 6,
      icon: <Gem size={40} className="text-accent" />,
      name: "Farmer Friend",
      nameHi: "किसान मित्र",
      description: "Learn crop insurance",
      descriptionHi: "फसल बीमा सीखें",
      earned: false,
    },
  ];

  return (
    <div className="min-h-screen pb-28">
      {/* Header */}
      <header className="p-4 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur-sm z-10">
        <button
          onClick={() => navigate("/")}
          className="w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-soft"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-heading text-primary">
          {language === "hi" ? "🏆 इनाम" : "🏆 Rewards"}
        </h1>
        <LanguageToggle
          language={language}
          onToggle={() => setLanguage(language === "en" ? "hi" : "en")}
        />
      </header>

      {/* Total stars */}
      <div className="px-4 mb-6">
        <div className="bg-card rounded-3xl p-6 text-center shadow-card border-2 border-secondary/30">
          <div className="flex justify-center mb-3">
            <Star size={64} className="text-secondary animate-float" fill="hsl(var(--secondary))" />
          </div>
          <p className="text-display text-foreground">24</p>
          <p className="text-heading text-muted-foreground">
            {language === "hi" ? "कुल तारे" : "Total Stars"}
          </p>
        </div>
      </div>

      {/* Badges section */}
      <div className="px-4">
        <h2 className="text-heading mb-4">
          {language === "hi" ? "🎖️ बैज" : "🎖️ Badges"}
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`bg-card rounded-3xl p-4 text-center shadow-card border-2 transition-all duration-200 ${
                badge.earned 
                  ? "border-primary/30" 
                  : "border-border opacity-60 grayscale"
              }`}
            >
              <div className="flex justify-center mb-3">
                {badge.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {language === "hi" ? badge.nameHi : badge.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "hi" ? badge.descriptionHi : badge.description}
              </p>
              {badge.earned && (
                <span className="inline-block mt-2 text-2xl">✅</span>
              )}
              {!badge.earned && (
                <span className="inline-block mt-2 text-2xl">🔒</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <BottomNav language={language} />
    </div>
  );
};

export default Rewards;
