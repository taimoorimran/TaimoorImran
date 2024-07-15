"use client";

import * as React from "react";
// import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
// import { toast } from 'sonner';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const handleTheme = async () => {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // toast.success('Theme updated!');
  };

  return (
    <Button variant="ghost" size="icon" onClick={() => handleTheme()}>
      {theme !== "light" ? (
        // <Sun className="h-[1.5rem] w-[1.3rem]" />
        <span className="h-[1.5rem] w-[1.3rem]">☀️</span>
      ) : (
        // <Moon className="h-[1.5rem] w-[1.3rem]" />
        <span className="h-[1.5rem] w-[1.3rem]">🌖</span>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
