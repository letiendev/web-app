import React from "react";

interface HeaderProps {
  title?: string;
  showHamburger?: boolean;
  showLogout?: boolean;
  showNotification?: boolean;
  notificationText?: string;
  onHamburgerClick?: () => void;
  onLogoutClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title = "Glamo宅配ボックス",
  showHamburger = false,
  showLogout = false,
  showNotification = false,
  notificationText,
  onHamburgerClick,
  onLogoutClick,
}) => {
  return (
    <div className="relative">
      <div className="glamo-header">
        {showHamburger && (
          <button
            onClick={onHamburgerClick}
            className="absolute left-8 top-4 hamburger-icon"
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </button>
        )}

        <h1 className="glamo-title">{title}</h1>

        {showLogout && (
          <button
            onClick={onLogoutClick}
            className="absolute right-8 top-4 text-white text-3xl font-normal hover:text-glamo-red transition-colors"
          >
            ログアウト
          </button>
        )}
      </div>

      {showNotification && notificationText && (
        <div className="w-full h-15 bg-glamo-red flex items-center justify-center">
          <span className="text-white text-3xl font-bold text-center">
            {notificationText}
          </span>
        </div>
      )}
    </div>
  );
};
