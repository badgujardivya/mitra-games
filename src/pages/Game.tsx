import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Target, Zap } from "lucide-react";
import GameTile from "@/components/GameTile";
import LessonModal from "@/components/LessonModal";
import { lessons } from "@/data/lessons";

type TileType = "coin" | "piggy" | "bank" | "phone" | "shield" | "leaf";

const tileTypes: TileType[] = ["coin", "piggy", "bank", "phone", "shield", "leaf"];

const generateBoard = (): TileType[][] => {
  const board: TileType[][] = [];
  for (let i = 0; i < 6; i++) {
    const row: TileType[] = [];
    for (let j = 0; j < 6; j++) {
      row.push(tileTypes[Math.floor(Math.random() * tileTypes.length)]);
    }
    board.push(row);
  }
  return board;
};

const Game = () => {
  const navigate = useNavigate();
  const { levelId } = useParams();
  const level = parseInt(levelId || "1");
  
  const [language] = useState<"en" | "hi">("en");
  const [board, setBoard] = useState<TileType[][]>(generateBoard());
  const [selectedTile, setSelectedTile] = useState<{ row: number; col: number } | null>(null);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(15);
  const [showLesson, setShowLesson] = useState(false);
  const [stars, setStars] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const goalScore = 100 + (level - 1) * 50;
  const lesson = lessons[(level - 1) % lessons.length];

  const handleTileClick = (row: number, col: number) => {
    if (isComplete) return;

    if (selectedTile === null) {
      setSelectedTile({ row, col });
    } else {
      // Check if adjacent
      const isAdjacent =
        (Math.abs(selectedTile.row - row) === 1 && selectedTile.col === col) ||
        (Math.abs(selectedTile.col - col) === 1 && selectedTile.row === row);

      if (isAdjacent) {
        // Swap tiles
        const newBoard = [...board.map((r) => [...r])];
        const temp = newBoard[selectedTile.row][selectedTile.col];
        newBoard[selectedTile.row][selectedTile.col] = newBoard[row][col];
        newBoard[row][col] = temp;
        setBoard(newBoard);

        // Add score for matches (simplified - always give points)
        const points = Math.floor(Math.random() * 30) + 10;
        setScore((prev) => prev + points);
        setMoves((prev) => prev - 1);
      }
      setSelectedTile(null);
    }
  };

  // Check for win/lose conditions
  useEffect(() => {
    if (score >= goalScore && !isComplete) {
      setIsComplete(true);
      const earnedStars = score >= goalScore * 1.5 ? 3 : score >= goalScore * 1.2 ? 2 : 1;
      setStars(earnedStars);
      setTimeout(() => setShowLesson(true), 500);
    } else if (moves <= 0 && score < goalScore && !isComplete) {
      // Game over - but let's be nice and give partial completion
      setIsComplete(true);
      setStars(1);
      setTimeout(() => setShowLesson(true), 500);
    }
  }, [score, moves, goalScore, isComplete]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-card border-b-2 border-border">
        <button
          onClick={() => navigate("/levels")}
          className="w-12 h-12 rounded-full bg-muted flex items-center justify-center"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-heading text-primary">
          {language === "hi" ? `लेवल ${level}` : `Level ${level}`}
        </h1>
        <div className="w-12 h-12" />
      </header>

      {/* Stats bar */}
      <div className="p-4 flex justify-around bg-muted">
        <div className="flex items-center gap-2">
          <Target size={28} className="text-primary" />
          <div className="text-center">
            <p className="text-2xl font-black text-foreground">{score}</p>
            <p className="text-xs text-muted-foreground font-bold">
              / {goalScore}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Zap size={28} className="text-secondary" />
          <div className="text-center">
            <p className="text-2xl font-black text-foreground">{moves}</p>
            <p className="text-xs text-muted-foreground font-bold">
              {language === "hi" ? "चाल" : "moves"}
            </p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-4 py-2">
        <div className="h-4 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 rounded-full"
            style={{ width: `${Math.min((score / goalScore) * 100, 100)}%` }}
          />
        </div>
      </div>

      {/* Game board */}
      <div className="p-4">
        <div className="bg-card rounded-3xl p-3 shadow-card">
          <div className="grid grid-cols-6 gap-2">
            {board.map((row, rowIndex) =>
              row.map((tile, colIndex) => (
                <GameTile
                  key={`${rowIndex}-${colIndex}`}
                  type={tile}
                  isSelected={
                    selectedTile?.row === rowIndex && selectedTile?.col === colIndex
                  }
                  onClick={() => handleTileClick(rowIndex, colIndex)}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="px-4 text-center">
        <p className="text-body-lg text-muted-foreground">
          {language === "hi" 
            ? "👆 मिलान करने के लिए बदलें" 
            : "👆 Tap tiles to swap & match"}
        </p>
      </div>

      {/* Lesson Modal */}
      <LessonModal
        isOpen={showLesson}
        onClose={() => {
          setShowLesson(false);
          navigate("/levels");
        }}
        lesson={lesson}
        stars={stars}
        language={language}
      />
    </div>
  );
};

export default Game;
