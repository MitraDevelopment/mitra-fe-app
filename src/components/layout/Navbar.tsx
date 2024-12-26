import { getActiveMenuItem, findMenuItem } from "@/modules/menu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { path } = usePathname();
  const { activeItem } = getActiveMenuItem(pathname) || {};
  const { title } = activeItem || {};

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export { Navbar };
