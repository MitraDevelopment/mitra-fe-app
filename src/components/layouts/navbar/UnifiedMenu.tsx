"use client";

import { MenuState, MenuItem } from "../../../modules/menu/types";

interface UnifiedMenuProps {
  menuState: MenuState;
  onMenuSelect: (item: MenuItem) => void;
  variant: "desktop" | "mobile";
}

const UnifiedMenu: React.FC<UnifiedMenuProps> = ({
  menuState,
  onMenuSelect,
  variant,
}) => {
  const isDesktop = variant === "desktop";

  return (
    <div
      className={
        isDesktop
          ? "fixed left-0 top-0 w-16 h-screen flex items-center" // Bu satırı değiştirdik
          : "fixed bottom-4 left-4 right-4"
      }
    >
      <nav
        className={`
        bg-white rounded-full shadow-lg relative
        flex items-center
        ${
          isDesktop
            ? "flex-col h-[400px] px-3 justify-center gap-6"
            : "h-16 px-6 justify-between"
        }
      `}
      >
        {menuState.items.map((item) => {
          const Icon = item.icon;
          const isSelected = item.id === menuState.activeItem.id;

          return (
            <button
              key={item.id}
              onClick={() => onMenuSelect(item)}
              className={`
                relative flex items-center justify-center 
                transition-all duration-300
                ${
                  isSelected
                    ? "w-12 h-12 rounded-full bg-rose-500 text-white"
                    : "w-12 h-12 text-gray-400"
                }
              `}
            >
              <Icon className="text-2xl" />
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default UnifiedMenu;
