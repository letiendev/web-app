import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  id: string;
  label: string;
  children?: SidebarItem[];
  onClick?: () => void;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: SidebarItem[];
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  items,
  className,
}) => {
  const [expandedMap, setExpandedMap] = useState<{ [key: string]: boolean }>(
    {},
  );

  const toggleExpand = (id: string) => {
    setExpandedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderItem = (item: SidebarItem, level = 0) => {
    const isParent = item.children && item.children.length > 0;
    const expanded = expandedMap[item.id];

    return (
      <div key={item.id}>
        <div
          className={cn(
            level === 0 ? "glamo-sidebar-item" : "glamo-sidebar-subitem",
            "flex items-center justify-between cursor-pointer py-2 px-4",
          )}
          onClick={() => {
            if (isParent) {
              toggleExpand(item.id);
            } else {
              item.onClick?.();
            }
          }}
        >
          <span>{item.label}</span>
          {isParent && (
            <svg
              className={cn(
                "w-4 h-4 transform transition-transform duration-200",
                expanded && "rotate-180",
              )}
              viewBox="0 0 23 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.75 0.75L22.5799 11.2189C23.14 11.779 23.14 12.7127 22.5799 13.2728L21.2728 14.5799C20.7127 15.14 19.779 15.14 19.2189 14.5799L11.75 7.11099L4.28112 14.5799C3.72096 15.14 2.78735 15.14 2.22718 14.5799L0.920124 13.2728C0.359959 12.7127 0.359959 11.779 0.920124 11.2189L8.389 3.75L11.75 0.75Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        {isParent && expanded && (
          <div className="ml-6">
            {item.children!.map((child) => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "glamo-sidebar fixed top-0 left-0 h-full w-80 bg-black text-white transition-transform duration-300 z-50",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className,
      )}
    >
      <button
        onClick={onClose}
        className="glamo-close-button absolute top-4 right-4"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 85 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.2134 63.6396L63.6398 21.2132"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M63.6396 63.6396L21.2132 21.2132"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="glamo-sidebar-content mt-16 space-y-2">
        {items.map((item) => renderItem(item))}
      </div>
    </div>
  );
};
