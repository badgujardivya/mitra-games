import { Home, Map, Gift, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", labelHi: "होम", path: "/" },
  { icon: Map, label: "Levels", labelHi: "लेवल", path: "/levels" },
  { icon: Gift, label: "Rewards", labelHi: "इनाम", path: "/rewards" },
  { icon: User, label: "Profile", labelHi: "प्रोफाइल", path: "/profile" },
];

interface BottomNavProps {
  language: "en" | "hi";
}

const BottomNav = ({ language }: BottomNavProps) => {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${isActive ? "nav-item-active" : ""}`}
          >
            <div
              className={`p-2 rounded-2xl transition-all duration-200 ${
                isActive ? "bg-primary/10 scale-110" : ""
              }`}
            >
              <Icon
                size={28}
                strokeWidth={isActive ? 2.5 : 2}
                className={isActive ? "text-primary" : ""}
              />
            </div>
            <span className="text-xs font-bold">
              {language === "hi" ? item.labelHi : item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
