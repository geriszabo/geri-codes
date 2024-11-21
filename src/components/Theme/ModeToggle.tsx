"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }


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
