"use client";

import React, {
  MouseEventHandler,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

type ContextType = {
  theme: string;
  setTheme?: (theme: string) => void;
  toggle?: MouseEventHandler;
};

export const ThemeContext = createContext<ContextType>({
  theme: "dark",
});
// const getFromLocalStorage = (): string | void => {
//   if (typeof window !== undefined) {
//     const value = localStorage.getItem("theme");
//     return value || "light";
//   }
// };

export const ThemeContextProvider = ({ children }: PropsWithChildren<{}>) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.getItem("theme");
    }
  }, []);

  const [theme, setTheme] = useState("");
  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
