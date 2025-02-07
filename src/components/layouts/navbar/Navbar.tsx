"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MenuItem } from "@/modules/menu/types";
import UnifiedMenu from "./UnifiedMenu";
import { useMenuState } from "@/providers/MenuStateProvider";

const NavbarMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { menuState, setActiveItem } = useMenuState();

  // URL değiştiğinde active item'ı güncelle
  useEffect(() => {
    const activeItem = menuState.items.find((item) => item.path === pathname);
    if (activeItem && activeItem.id !== menuState.activeItem.id) {
      setActiveItem(activeItem.id);
    }
  }, [pathname, menuState.items, menuState.activeItem.id, setActiveItem]);

  const handleMenuSelect = (item: MenuItem) => {
    setActiveItem(item.id);
    if (item.path) {
      router.push(item.path);
    }
  };

  return (
    <>
      <div className="hidden lg:block h-full">
        <UnifiedMenu
          menuState={menuState}
          onMenuSelect={handleMenuSelect}
          variant="desktop"
        />
      </div>

      <div className="lg:hidden">
        <UnifiedMenu
          menuState={menuState}
          onMenuSelect={handleMenuSelect}
          variant="mobile"
        />
      </div>
    </>
  );
};

export default NavbarMenu;
