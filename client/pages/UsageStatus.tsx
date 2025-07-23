import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/ui/header';
import { GlamoButton } from '@/components/ui/glamo-button';
import { GlamoTable } from '@/components/ui/glamo-table';
import { Sidebar } from '@/components/ui/sidebar';
import { RemoteUnlockModal } from "@/components/ui/remote-unlock-modal";
import { RemoteUnlockInfoModal } from "@/components/ui/remote-unlock-info-modal";

export const UsageStatus: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [remoteUnlockOpen, setRemoteUnlockOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState<any>(null);
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
  const columns = [
    { key: 'box', header: 'ボックス番号', width: '250px' },
    { key: 'room', header: '利用中部屋番号', width: '250px' },
    { key: 'status', header: '状態', width: '250px' },
    { key: 'password', header: '集荷パスワード', width: '250px' },
    { key: 'date', header: '利用開始日', width: '250px' },
  ];

  const data = [
    {
      box: 'G01',
      room: '--',
      status: '--',
      password: '--',
      date: '--',
    },
    {
      box: 'G02',
      room: '101',
      status: 'お届け',
      password: '--',
      date: '2024/8/20',
    },
    {
      box: 'G03',
      room: '--',
      status: '--',
      password: '--',
      date: '--',
    },
    {
      box: 'G04',
      room: '302',
      status: '集荷',
      password: '876543333',
      date: '2024/8/3',
    },
    {
      box: 'G05',
      room: '204',
      status: '集荷',
      password: '393456835',
      date: '2024/8/19',
    },
  ];
  const handleRowClick = (row: any, index: number, event: React.MouseEvent) => {
    setSelectedRowData(row);
    setInfoModalOpen(true);
  };

  const handleCloseModal = () => {
    setInfoModalOpen(false);
    setSelectedRowData(null);
  };

  const handleUnlock = () => {
    console.log(`Unlocking box ${selectedRowData?.box}`);
    setInfoModalOpen(false);
    setSelectedRowData(null);
  };
  return (
    <div className="glamo-container">
      <Header
        title="Glamo宅配ボックス"
        showHamburger
        showLogout
        onHamburgerClick={() => setSidebarOpen(true)}
        onLogoutClick={() => navigate("/login")}
      />

      <div className="px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-3xl font-bold ml-16">
            情報 - 利用状況
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-white text-3xl font-bold">
              宅配ボックスの利用状況
            </h3>
            <div className="flex gap-4">
              <GlamoButton
                onClick={() => console.log("Remote unlock")}
                className="w-[150px]"
                size="sm"
              >
                遠隔解錠
              </GlamoButton>
              <GlamoButton
                onClick={() => console.log("Update")}
                className="w-[150px]"
                size="sm"
              >
                更新
              </GlamoButton>
            </div>
          </div>
          <GlamoTable
            columns={columns}
            data={data}
            className="mx-auto"
            onRowClick={handleRowClick}
          />
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
      <RemoteUnlockModal
        isOpen={remoteUnlockOpen}
        onClose={() => setRemoteUnlockOpen(false)}
        onUnlock={() => {
          console.log("Box unlocked!");
          setRemoteUnlockOpen(false);
        }}
      />

      <RemoteUnlockInfoModal
        isOpen={infoModalOpen}
        onClose={handleCloseModal}
        data={selectedRowData}
        onUnlock={handleUnlock}
      />
    </div>
  );
};
