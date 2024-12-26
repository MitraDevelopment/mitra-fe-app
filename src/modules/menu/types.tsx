export type MenuItem = {
  id: "home" | "events" | "places" | "cafes" | "map";
  title: string;
  path: string;
  icon?: string;
};

export type MenuState = {
  items: MenuItem[];
  activeItem: MenuItem;
};
