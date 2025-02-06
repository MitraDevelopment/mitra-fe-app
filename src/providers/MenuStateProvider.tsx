"use client";
import { createContext, useContext, useState } from "react";
import { MenuState } from "@/modules/menu/types";
import { menuConfig } from "@/modules/menu/index";

const MenuStateContext = createContext<{
  menuState: MenuState;
  setActiveItem: (id: string) => void;
} | null>(null);

export const useMenuState = () => {
  const context = useContext(MenuStateContext);
  if (!context) {
    throw new Error("useMenuState must be used within MenuStateProvider");
  }
  return context;
};

export default function MenuStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuState, setMenuState] = useState<MenuState>({
    items: menuConfig,
    activeItem: menuConfig[0],
  });

  const setActiveItem = (id: string) => {
    const selectedItem = menuState.items.find((item) => item.id === id);
    if (selectedItem) {
      setMenuState((prev) => ({
        ...prev,
        activeItem: selectedItem,
      }));
    }
  };

  return (
    <MenuStateContext.Provider value={{ menuState, setActiveItem }}>
      {children}
    </MenuStateContext.Provider>
  );
}
