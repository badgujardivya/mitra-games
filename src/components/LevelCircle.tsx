import { Lock, Star, Check } from "lucide-react";

interface LevelCircleProps {
  level: number;
  status: "locked" | "current" | "completed";
  stars?: number;
  onClick?: () => void;
}

const LevelCircle = ({ level, status, stars = 0, onClick }: LevelCircleProps) => {
  const statusClasses = {
    locked: "level-circle-locked",
    current: "level-circle-current",
    completed: "level-circle-completed",
  };

  return (
    <button
      onClick={onClick}
      disabled={status === "locked"}
      className={`level-circle ${statusClasses[status]} ${
        status !== "locked" ? "hover:scale-105" : "cursor-not-allowed"
      }`}
      aria-label={`Level ${level} - ${status}`}
    >
      {status === "locked" ? (
        <Lock size={28} />
      ) : status === "completed" ? (
        <div className="flex flex-col items-center">
          <span className="text-xl font-black">{level}</span>
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3].map((i) => (
              <Star
                key={i}
                size={12}
                fill={i <= stars ? "currentColor" : "none"}
                className={i <= stars ? "text-secondary" : "opacity-50"}
              />
            ))}
          </div>
        </div>
      ) : (
        <span className="text-2xl font-black">{level}</span>
      )}
    </button>
  );
};

export default LevelCircle;
