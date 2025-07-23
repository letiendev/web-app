import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/ui/header';
import { GlamoButton } from '@/components/ui/glamo-button';
import { Sidebar } from '@/components/ui/sidebar';

interface NavTile {
  id: string;
  label: string;
  onClick: () => void;
}

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navTiles: NavTile[] = [
        {
      id: 'info',
      label: '情報',
      onClick: () => navigate('/basic-info'),
    },
    {
      id: 'box-settings',
      label: '宅配ボックス設定',
      onClick: () => console.log('Navigate to box settings'),
    },
    {
      id: 'key-management',
      label: '鍵管理',
      onClick: () => console.log('Navigate to key management'),
    },
    {
      id: 'external-integration',
      label: '外部連携',
      onClick: () => console.log('Navigate to external integration'),
    },
    {
      id: 'system',
      label: 'システム',
      onClick: () => console.log('Navigate to system'),
    },
  ];

  const sidebarItems = [
    {
      id: "home",
      label: "ホーム",
      onClick: () => {
        setSidebarOpen(false);
        navigate("/dashboard");
      },
    },
    {
      id: "info",
      label: "情報",
      expanded: true,
      children: [
        {
          id: "basic-info",
          label: "基本情報",
          onClick: () => {
            setSidebarOpen(false);
            navigate("/basic-info");
          },
        },
        {
          id: "usage-status",
          label: "利用状況",
          onClick: () => {
            setSidebarOpen(false);
            navigate("/usage-status");
          },
        },
        {
          id: "usage-history",
          label: "利用履歴",
          onClick: () => {
            setSidebarOpen(false);
            navigate("/usage-history");
          },
        },
      ],
    },
    {
      id: "box-settings",
      label: "宅配ボックス設定",
      onClick: () => {
        setSidebarOpen(false);
        navigate("/box-settings");
      },
    },
    {
      id: "key-management",
      label: "鍵管理",
      onClick: () => {
        setSidebarOpen(false);
        navigate("/key-management");
      },
    },
    {
      id: "external-integration",
      label: "外部連携",
      onClick: () => {
        setSidebarOpen(false);
        navigate("/system-settings");
      },
    },
    {
      id: "system",
      label: "システム",
      expanded: true,
      children: [
        {
          id: "basic-settings",
          label: "基本設定",
          onClick: () => {
            setSidebarOpen(false);
            navigate("/delivery-box");
          },
        },
        {
          id: "display-audio",
          label: "表示/音声設定",
          onClick: () => {
            setSidebarOpen(false);
            navigate("/display-settings");
          },
        },
        {
          id: "security",
          label: "セキュリティ",
          onClick: () => {
            setSidebarOpen(false);
            navigate("/security");
          },
        },
      ],
    },
  ];

  return (
    <div className="glamo-container">
      <Header
        title="Glamo宅配ボックス"
        showHamburger
        showLogout
        showNotification
        notificationText="　　基本情報の設定が完了していません。"
        onHamburgerClick={() => setSidebarOpen(true)}
                onLogoutClick={() => navigate('/login')}
      />
      
      <div className="flex justify-center min-h-[calc(100vh-160px)] px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-16 max-w-7xl">
          {navTiles.map((tile) => (
            <GlamoButton
              key={tile.id}
              variant="nav-tile"
              size="nav"
              onClick={tile.onClick}
              className="glamo-nav-tile"
            >
              {tile.label}
            </GlamoButton>
          ))}
        </div>
      </div>
      
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        items={sidebarItems}
      />
      
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};
