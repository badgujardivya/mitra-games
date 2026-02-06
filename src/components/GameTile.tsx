import { useState } from "react";

interface GameTileProps {
  type: "coin" | "piggy" | "bank" | "phone" | "shield" | "leaf";
  isSelected?: boolean;
  onClick?: () => void;
}

const tileEmojis: Record<string, string> = {
  coin: "🪙",
  piggy: "🐷",
  bank: "🏦",
  phone: "📱",
  shield: "🛡️",
  leaf: "🌾",
};

const tileColors: Record<string, string> = {
  coin: "bg-game-yellow",
  piggy: "bg-game-red/80",
  bank: "bg-game-blue",
  phone: "bg-game-green",
  shield: "bg-game-purple",
  leaf: "bg-game-orange",
};

const GameTile = ({ type, isSelected = false, onClick }: GameTileProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`game-tile ${tileColors[type]} ${
        isSelected ? "ring-4 ring-primary scale-110" : ""
      } ${isAnimating ? "animate-wiggle" : ""} active:scale-95`}
      aria-label={`${type} tile`}
    >
      <span className="text-shadow-sm">{tileEmojis[type]}</span>
    </button>
  );
};

export default GameTile;
