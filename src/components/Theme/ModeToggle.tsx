"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  function handleThemeChange() {
    return resolvedTheme === "light" ? setTheme("dark") : setTheme("light");
  }

  const themeIcon = resolvedTheme === "light" ? <Sun /> : <Moon />;

  return (
    <>
      <Button variant="ghost" size="icon" onClick={handleThemeChange}>
        {themeIcon}
      </Button>
    </>
  );
}
