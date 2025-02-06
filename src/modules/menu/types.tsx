import { IconType } from "react-icons";

export type MenuItem = {
  id: "events" | "places" | "home" | "cafes" | "map";
  title: string;
  path: string;
  icon: IconType;
};

export type MenuState = {
  items: MenuItem[];
  activeItem: MenuItem;
};
