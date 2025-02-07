"use client";

import { MenuState, MenuItem } from "../../../modules/menu/types";
import UnifiedMenu from "./UnifiedMenu";

interface ResponsiveMenuProps {
  menuState: MenuState;
  onMenuSelect: (item: MenuItem) => void;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = (props) => {
  return (
    <>
      {/* Desktop Menu - lg ve üstü ekranlar için */}
      <div className="hidden lg:block">
        <UnifiedMenu {...props} variant="desktop" />
      </div>

      {/* Mobile Menu - lg altı ekranlar için */}
      <div className="lg:hidden">
        <UnifiedMenu {...props} variant="mobile" />
      </div>
    </>
  );
};

export default ResponsiveMenu;
