"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-3">
      <Sun className="size-5" />
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} aria-label="Toggle theme" />
      <Label htmlFor="theme-toggle" className="sr-only">
        Toggle theme
      </Label>
      <Moon className="size-5" />
    </div>
  );
}