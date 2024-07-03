"use client";

import React, { createContext, useState } from "react";
import { AppContextType } from "@/interFace/interFace";

export const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [inputValue, setInputValue] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("");
  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const contextValue: AppContextType = {
    sideMenuOpen,
    toggleSideMenu,
    scrollDirection,
    setScrollDirection,
    inputValue,
    setInputValue,
    filterType, setFilterType
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
