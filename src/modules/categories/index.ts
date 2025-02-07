export type CategoryId =
  | "Tümü"
  | "Kafe"
  | "Restaurant"
  | "Tatlıcı"
  | "Çorbacı"
  | "Kahvaltı"
  | "Bar"
  | "Kitap Kafe";

export type Category = {
  id: CategoryId;
  name: string;
  path: string;
  icon: React.ReactNode; // More specific type for icon
};

export type CategoriesState = {
  items: Category[];
  activeItem: Category;
};

export const categoriesConfig: Category[] = [
  { id: "Tümü", name: "Tümü", path: "/all", icon: null },
  { id: "Kafe", name: "Kafe", path: "/cafe", icon: null },
  { id: "Restaurant", name: "Restaurant", path: "/restaurant", icon: null },
  { id: "Tatlıcı", name: "Tatlıcı", path: "/tatli", icon: null },
  { id: "Çorbacı", name: "Çorbacı", path: "/corba", icon: null },
  { id: "Kahvaltı", name: "Kahvaltı", path: "/kahvalti", icon: null },
  { id: "Bar", name: "Bar", path: "/bar", icon: null },
  { id: "Kitap Kafe", name: "Kitap Kafe", path: "/kitap-kafe", icon: null },
];

export const findCategoryById = (id: CategoryId): Category | undefined => {
  return categoriesConfig.find((item) => item.id === id);
};

export const defaultCategoriesState: CategoriesState = {
  items: categoriesConfig,
  activeItem: categoriesConfig[0],
};
