"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useTheme } from "next-themes";
import React, { PropsWithChildren, useContext } from "react";

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const { theme } = useContext(ThemeContext);

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
