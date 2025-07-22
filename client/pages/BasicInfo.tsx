import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/ui/header';
import { Sidebar } from '@/components/ui/sidebar';

export const BasicInfo: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      onClick: () => setSidebarOpen(false),
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

  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center gap-8 py-4">
      <div className="text-white text-2xl font-normal w-56">
        {label}
      </div>
      <div className="w-[500px] h-15 rounded-2xl border-4 border-glamo-blue-800 flex items-center justify-center">
        <span className="text-white text-2xl font-bold">
          {value}
        </span>
      </div>
    </div>
  );

  const SectionTitle = ({ title }: { title: string }) => (
    <div className="text-white text-3xl font-bold py-8">
      {title}
    </div>
  );

  const Divider = () => (
    <div className="w-full h-px bg-white my-8" />
  );

  return (
    <div className="glamo-container">
      <Header
        title="Glamo宅配ボックス"
        showHamburger
        showLogout
        onHamburgerClick={() => setSidebarOpen(true)}
        onLogoutClick={() => navigate('/login')}
      />
      
      <div className="px-8 py-8">
        <h2 className="text-white text-3xl font-bold mb-8 ml-16">
          情報 - 基本情報
        </h2>
        
        <div className="max-w-6xl mx-auto space-y-4">
          <SectionTitle title="ステータス" />
          <InfoRow label="型番" value="GDB-001" />
          <InfoRow label="アプリバージョン" value="1.0.2" />
          <InfoRow label="シリアル番号" value="D01xxxxxxxx000000001" />
          <InfoRow label="MACアドレス" value="xx:xx:xx:xx:xx:xx" />
          <InfoRow label="起動時間" value="2日　3時間16分" />
          
          <Divider />
          
          <SectionTitle title="ネットワーク" />
          <InfoRow label="タイプ" value="Static" />
          <InfoRow label="IPアドレス" value="192.168.1.102" />
          <InfoRow label="ゲートウェイ" value="192.168.1.1" />
          <InfoRow label="優先DNSサーバー" value="192.168.1.1" />
          <InfoRow label="代替DNSサーバー" value="0.0.0.0" />
          
          <Divider />
          
          <SectionTitle title="物件情報" />
          <InfoRow label="建物名" value="池袋KSビル" />
          <InfoRow label="物件コード" value="G000001" />
          <InfoRow label="管理番号" value="G000001" />
          
          <Divider />
          
          <SectionTitle title="ボックス情報" />
          <InfoRow label="操作面" value="両面" />
          <InfoRow label="ボックスレイアウト" value="Type A" />
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
