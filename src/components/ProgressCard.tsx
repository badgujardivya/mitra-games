import { Star, Award, Target } from "lucide-react";

interface ProgressCardProps {
  stars: number;
  badges: number;
  weeklyGoal: number;
  weeklyProgress: number;
  language: "en" | "hi";
}

const ProgressCard = ({
  stars,
  badges,
  weeklyGoal,
  weeklyProgress,
  language,
}: ProgressCardProps) => {
  const progressPercent = Math.min((weeklyProgress / weeklyGoal) * 100, 100);

  return (
    <div className="progress-card">
      <h3 className="text-heading text-center mb-5">
        {language === "hi" ? "📊 आपकी प्रगति" : "📊 Your Progress"}
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-5">
        {/* Stars */}
        <div className="bg-muted rounded-2xl p-4 text-center">
          <div className="flex justify-center mb-2">
            <Star size={36} className="text-secondary" fill="hsl(var(--secondary))" />
          </div>
          <p className="text-display text-foreground">{stars}</p>
          <p className="text-sm text-muted-foreground font-bold">
            {language === "hi" ? "तारे" : "Stars"}
          </p>
        </div>

        {/* Badges */}
        <div className="bg-muted rounded-2xl p-4 text-center">
          <div className="flex justify-center mb-2">
            <Award size={36} className="text-accent" />
          </div>
          <p className="text-display text-foreground">{badges}</p>
          <p className="text-sm text-muted-foreground font-bold">
            {language === "hi" ? "बैज" : "Badges"}
          </p>
        </div>
      </div>

      {/* Weekly Goal */}
      <div className="bg-muted rounded-2xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <Target size={28} className="text-primary" />
          <span className="text-body-lg">
            {language === "hi" ? "साप्ताहिक लक्ष्य" : "Weekly Goal"}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="h-6 bg-border rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        
        <p className="text-center text-muted-foreground font-bold">
          {weeklyProgress} / {weeklyGoal} {language === "hi" ? "लेवल" : "levels"}
        </p>
      </div>
    </div>
  );
};

export default ProgressCard;
