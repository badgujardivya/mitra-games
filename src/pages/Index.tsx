import { useNavigate } from "react-router-dom";
import { Gamepad2, BookOpen, HelpCircle } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import LanguageToggle from "@/components/LanguageToggle";
import ProgressCard from "@/components/ProgressCard";
import HomeButton from "@/components/HomeButton";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<"en" | "hi">("en");

  // Mock progress data
  const progress = {
    stars: 24,
    badges: 3,
    weeklyGoal: 7,
    weeklyProgress: 4,
  };

  return (
    <div className="min-h-screen pb-28">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-5xl">💰</span>
          <h1 className="text-title text-primary">MoneyMitra</h1>
        </div>
        <LanguageToggle
          language={language}
          onToggle={() => setLanguage(language === "en" ? "hi" : "en")}
        />
      </header>

      {/* Welcome message */}
      <div className="px-4 mb-6">
        <p className="text-heading text-center text-muted-foreground">
          {language === "hi" 
            ? "नमस्ते! 👋 आज कुछ नया सीखें"
            : "Hello! 👋 Learn something new today"}
        </p>
      </div>

      {/* Main buttons */}
      <div className="px-4 space-y-4 mb-8">
        <HomeButton
          icon={Gamepad2}
          emoji="🎮"
          label="Play"
          labelHi="खेलें"
          variant="primary"
          language={language}
          onClick={() => navigate("/levels")}
        />
        <HomeButton
          icon={BookOpen}
          emoji="📚"
          label="Learn"
          labelHi="सीखें"
          variant="secondary"
          language={language}
          onClick={() => navigate("/levels")}
        />
        <HomeButton
          icon={HelpCircle}
          emoji="❓"
          label="Help"
          labelHi="मदद"
          variant="accent"
          language={language}
          onClick={() => {}}
        />
      </div>

      {/* Progress section */}
      <div className="px-4">
        <ProgressCard
          stars={progress.stars}
          badges={progress.badges}
          weeklyGoal={progress.weeklyGoal}
          weeklyProgress={progress.weeklyProgress}
          language={language}
        />
      </div>

      <BottomNav language={language} />
    </div>
  );
};

export default Index;
