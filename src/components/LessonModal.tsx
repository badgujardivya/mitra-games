import { X, Star } from "lucide-react";
import VoiceButton from "./VoiceButton";

interface LessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: {
    icon: string;
    title: string;
    titleHi: string;
    message: string;
    messageHi: string;
  };
  stars: number;
  language: "en" | "hi";
}

const LessonModal = ({ isOpen, onClose, lesson, stars, language }: LessonModalProps) => {
  if (!isOpen) return null;

  const title = language === "hi" ? lesson.titleHi : lesson.title;
  const message = language === "hi" ? lesson.messageHi : lesson.message;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-scale-in">
      <div className="bg-card w-full max-w-sm rounded-4xl p-6 shadow-card animate-slide-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center"
        >
          <X size={20} />
        </button>

        {/* Stars celebration */}
        <div className="flex justify-center gap-3 mb-6">
          {[1, 2, 3].map((i) => (
            <Star
              key={i}
              size={48}
              fill={i <= stars ? "hsl(var(--secondary))" : "none"}
              stroke={i <= stars ? "hsl(var(--secondary))" : "hsl(var(--muted))"}
              className={i <= stars ? "animate-star-spin" : ""}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        {/* Congrats text */}
        <h2 className="text-title text-center text-primary mb-6">
          {language === "hi" ? "बहुत बढ़िया! 🎉" : "Great Job! 🎉"}
        </h2>

        {/* Lesson card */}
        <div className="bg-muted rounded-3xl p-5 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{lesson.icon}</span>
            <h3 className="text-heading text-foreground">{title}</h3>
          </div>
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            {message}
          </p>
        </div>

        {/* Voice button */}
        <div className="flex justify-center mb-6">
          <VoiceButton text={message} size="lg" />
        </div>

        {/* Continue button */}
        <button
          onClick={onClose}
          className="btn-game-primary w-full"
        >
          {language === "hi" ? "आगे बढ़ें ➡️" : "Continue ➡️"}
        </button>
      </div>
    </div>
  );
};

export default LessonModal;
