import {
  MdHome,
  MdCalendarMonth,
  MdBusiness,
  MdCoffee,
  MdPublic,
} from "react-icons/md";
import { MenuItem } from "./types";

export const menuConfig: MenuItem[] = [
  {
    id: "events",
    title: "Events",
    path: "/events",
    icon: MdCalendarMonth,
  },
  {
    id: "places",
    title: "Places",
    path: "/places",
    icon: MdBusiness,
  },
  {
    id: "home",
    title: "Home",
    path: "/",
    icon: MdHome,
  },
  {
    id: "cafes",
    title: "Cafes",
    path: "/cafes",
    icon: MdCoffee,
  },
  {
    id: "map",
    title: "Map",
    path: "/map",
    icon: MdPublic,
  },
];

export const findMenuItem = (id: MenuItem["id"]): MenuItem | undefined => {
  return menuConfig.find((item) => item.id === id);
};

export const getActiveMenuItem = (path: string): MenuItem | undefined => {
  return menuConfig.find((item) => item.path === path);
};

export const defaultMenuState = {
  items: menuConfig,
  activeItem: menuConfig[0],
};

export * from "./types";
