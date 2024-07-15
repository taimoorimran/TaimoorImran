"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const handleTheme = async () => {
    let newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // toast.success('Theme updated!');
  };

  return (
    <Button
      className="bg-smoky-dark dark:bg-smoky-light rounded-full shadow-lg flex items-center justify-center hover:shadow-md"
      variant="default"
      size="icon"
      onClick={() => handleTheme()}
    >
      {theme !== "light" ? (
        <span className="text-normal">☀️</span>
      ) : (
        <span className="text-normal">🌙</span>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
