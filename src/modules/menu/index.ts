import { MenuItem } from "@/modules/menu/types";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    icon: "home",
  },

  {
    id: "events",
    title: "Events",
    path: "/events",
    icon: "events",
  },

  {
    id: "places",
    title: "Places",
    path: "/places",
    icon: "places",
  },

  {
    id: "cafes",
    title: "Cafes",
    path: "/cafes",
    icon: "cafes",
  },

  {
    id: "map",
    title: "Map",
    path: "/map",
    icon: "map",
  },
];

export const findMenuItem = (id: MenuItem["id"]): MenuItem | undefined => {
  return menuItems.find((item) => item.id === id);
};

export const getActiveMenuItem = (path: string): MenuItem | undefined => {
  return menuItems.find((item) => item.path === path);
};

export const defaultMenuState = {
  items: menuItems,
  activeItem: menuItems[0],
};

export * from "./types";
