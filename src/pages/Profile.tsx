import { useState } from "react";
import { ArrowLeft, Star, Award, Gamepad2, BookOpen, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import LanguageToggle from "@/components/LanguageToggle";

const Profile = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const stats = [
    { icon: Star, value: 24, label: "Stars", labelHi: "तारे", color: "text-secondary" },
    { icon: Award, value: 3, label: "Badges", labelHi: "बैज", color: "text-primary" },
    { icon: Gamepad2, value: 4, label: "Levels", labelHi: "लेवल", color: "text-accent" },
    { icon: BookOpen, value: 4, label: "Lessons", labelHi: "पाठ", color: "text-primary" },
  ];

  const menuItems = [
    { icon: "🔔", label: "Notifications", labelHi: "सूचनाएं" },
    { icon: "🎵", label: "Sound Settings", labelHi: "ध्वनि सेटिंग्स" },
    { icon: "❓", label: "Help & Support", labelHi: "मदद और सहायता" },
    { icon: "📖", label: "About MoneyMitra", labelHi: "MoneyMitra के बारे में" },
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
          {language === "hi" ? "👤 प्रोफाइल" : "👤 Profile"}
        </h1>
        <LanguageToggle
          language={language}
          onToggle={() => setLanguage(language === "en" ? "hi" : "en")}
        />
      </header>

      {/* Avatar section */}
      <div className="px-4 mb-6">
        <div className="bg-card rounded-3xl p-6 text-center shadow-card">
          <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl shadow-soft">
            👩‍🌾
          </div>
          <h2 className="text-title text-foreground mb-1">
            {language === "hi" ? "नमस्ते, मित्र!" : "Hello, Friend!"}
          </h2>
          <p className="text-muted-foreground font-bold">
            {language === "hi" ? "सीखते रहें, बढ़ते रहें 🌱" : "Keep learning, keep growing 🌱"}
          </p>
        </div>
      </div>

      {/* Stats grid */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-2xl p-4 text-center shadow-soft"
            >
              <stat.icon size={32} className={`mx-auto mb-2 ${stat.color}`} />
              <p className="text-2xl font-black text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-bold">
                {language === "hi" ? stat.labelHi : stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Menu items */}
      <div className="px-4">
        <h2 className="text-heading mb-4">
          {language === "hi" ? "⚙️ सेटिंग्स" : "⚙️ Settings"}
        </h2>
        
        <div className="bg-card rounded-3xl overflow-hidden shadow-card">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-4 p-5 text-left transition-colors hover:bg-muted active:bg-muted ${
                index < menuItems.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-body-lg text-foreground">
                {language === "hi" ? item.labelHi : item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <BottomNav language={language} />
    </div>
  );
};

export default Profile;
