import {
  IoCalendarNumber,
} from "react-icons/io5";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { PiMosque } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MenuItem } from "./types";

export const menuConfig: MenuItem[] = [
  {
    id: "events",
    title: "Events",
    path: "/events",
    icon: IoCalendarNumber,
  },
  {
    id: "places",
    title: "Places",
    path: "/places",
    icon: PiMosque ,
  },
  {
    id: "home",
    title: "Home",
    path: "/",
    icon:  FaHouseChimneyWindow,
  },
  {
    id: "cafes",
    title: "Cafes",
    path: "/cafes",
    icon: GiCoffeeCup,
  },
  {
    id: "map",
    title: "Map",
    path: "/map",
    icon: FaMapMarkerAlt ,
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
