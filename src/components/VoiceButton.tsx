import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

interface VoiceButtonProps {
  text: string;
  size?: "sm" | "md" | "lg";
}

const VoiceButton = ({ text, size = "md" }: VoiceButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    // Placeholder for voice playback
    setIsPlaying(true);
    
    // Simulate audio duration
    setTimeout(() => {
      setIsPlaying(false);
    }, 2000);
    
    // In production, you would use Web Speech API or audio files
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.onend = () => setIsPlaying(false);
      speechSynthesis.speak(utterance);
    }
  };

  const sizeClasses = {
    sm: "w-12 h-12 text-xl",
    md: "w-16 h-16 text-2xl",
    lg: "w-20 h-20 text-3xl",
  };

  return (
    <button
      onClick={handlePlay}
      disabled={isPlaying}
      className={`${sizeClasses[size]} rounded-full bg-accent text-accent-foreground flex items-center justify-center transition-all duration-200 active:scale-95 shadow-soft ${
        isPlaying ? "animate-pulse" : ""
      }`}
      aria-label={isPlaying ? "Playing audio" : "Play audio"}
    >
      {isPlaying ? (
        <Volume2 className="animate-bounce-gentle" />
      ) : (
        <Volume2 />
      )}
    </button>
  );
};

export default VoiceButton;
