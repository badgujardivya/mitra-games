import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import LevelCircle from "@/components/LevelCircle";
import LanguageToggle from "@/components/LanguageToggle";
import { useState } from "react";

const Levels = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<"en" | "hi">("en");

  // Mock level data - completed levels with stars
  const levelData = [
    { level: 1, status: "completed" as const, stars: 3 },
    { level: 2, status: "completed" as const, stars: 2 },
    { level: 3, status: "completed" as const, stars: 3 },
    { level: 4, status: "completed" as const, stars: 2 },
    { level: 5, status: "current" as const, stars: 0 },
    { level: 6, status: "locked" as const, stars: 0 },
    { level: 7, status: "locked" as const, stars: 0 },
    { level: 8, status: "locked" as const, stars: 0 },
    { level: 9, status: "locked" as const, stars: 0 },
    { level: 10, status: "locked" as const, stars: 0 },
  ];

  return (
    <div className="min-h-screen pb-28" style={{ background: "var(--gradient-level-path)" }}>
      {/* Header */}
      <header className="p-4 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur-sm z-10">
        <button
          onClick={() => navigate("/")}
          className="w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-soft"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-heading text-primary">
          {language === "hi" ? "🗺️ लेवल मैप" : "🗺️ Level Map"}
        </h1>
        <LanguageToggle
          language={language}
          onToggle={() => setLanguage(language === "en" ? "hi" : "en")}
        />
      </header>

      {/* Level path */}
      <div className="px-8 py-6">
        <div className="flex flex-col items-center gap-6">
          {levelData.map((data, index) => (
            <div
              key={data.level}
              className={`relative ${index % 2 === 0 ? "self-start ml-8" : "self-end mr-8"}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Connector line */}
              {index > 0 && (
                <div
                  className={`absolute w-16 h-1 bg-border rounded-full ${
                    index % 2 === 0 ? "-top-3 -right-12 rotate-45" : "-top-3 -left-12 -rotate-45"
                  }`}
                  style={{
                    background: data.status !== "locked" 
                      ? "hsl(var(--primary))" 
                      : "hsl(var(--border))"
                  }}
                />
              )}
              
              <LevelCircle
                level={data.level}
                status={data.status}
                stars={data.stars}
                onClick={() => {
                  if (data.status !== "locked") {
                    navigate(`/game/${data.level}`);
                  }
                }}
              />

              {/* Level label */}
              {data.status === "current" && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-sm font-bold text-secondary animate-bounce-gentle inline-block">
                    {language === "hi" ? "👆 यहाँ टैप करें!" : "👆 Tap here!"}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <BottomNav language={language} />
    </div>
  );
};

export default Levels;
