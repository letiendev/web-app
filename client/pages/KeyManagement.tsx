import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/ui/header";
import { GlamoButton } from "../components/ui/glamo-button";
import { Sidebar } from "@/components/ui/sidebar";

interface KeyData {
  roomNumber: string;
  keyId: string;
  keyName: string;
  startDate: string;
  endDate: string;
  opacity?: number;
}

const keyData: KeyData[] = [
  {
    roomNumber: "101",
    keyId: "1234545678",
    keyName: "お父さん",
    startDate: "2017/04/01 00:00:00",
    endDate: "無期限",
  },
  {
    roomNumber: "101",
    keyId: "9786576543",
    keyName: "お母さん",
    startDate: "2023/8/20 00:00:00",
    endDate: "2024/8/20  00:00:00",
  },
  {
    roomNumber: "102",
    keyId: "3456789876",
    keyName: "ツァン",
    startDate: "2000/1/1  00:00:00",
    endDate: "2099/12/31  00:00:00",
  },
  {
    roomNumber: "103",
    keyId: "4546878987",
    keyName: "グラモン",
    startDate: "2024/8/3  00:00:00",
    endDate: "2024/8/3  00:00:00",
  },
  {
    roomNumber: "202",
    keyId: "1235687545",
    keyName: "Glamo",
    startDate: "2024/8/19  00:00:00",
    endDate: "2024/8/19  00:00:00",
  },
  {
    roomNumber: "202",
    keyId: "9876544377",
    keyName: "Glamo_old",
    startDate: "2023/8/19  00:00:00",
    endDate: "2024/2/19  00:00:00",
    opacity: 0.4,
  },
  {
    roomNumber: "203",
    keyId: "1234545678",
    keyName: "お父さん",
    startDate: "2024/7/2  00:00:00",
    endDate: "2025/7/30  00:00:00",
  },
  {
    roomNumber: "204",
    keyId: "9786576543",
    keyName: "お母さん",
    startDate: "2023/8/20  00:00:00",
    endDate: "2024/8/20  00:00:00",
  },
  {
    roomNumber: "204",
    keyId: "3456789876",
    keyName: "ツァン",
    startDate: "2000/1/1  00:00:00",
    endDate: "2099/12/31  00:00:00",
  },
  {
    roomNumber: "301",
    keyId: "4546878987",
    keyName: "グラモン",
    startDate: "2024/8/3  00:00:00",
    endDate: "2024/8/3  00:00:00",
  },
];

export const KeyManagement: React.FC = () => {
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

  const handleLogout = () => {
    navigate("/");
  };

  const handlePreviousPage = () => {
    console.log("Previous page");
  };

  const handleNextPage = () => {
    console.log("Next page");
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

      {/* Main Content */}
      <div className="px-[80px] py-8">
        <h1 className="text-white text-[36px] font-bold mb-8">鍵管理</h1>

        <div className="mb-12">
          <h2 className="text-white text-[28px] font-bold mb-6 mx-12">鍵一覧</h2>

          {/* Data Table */}
          <div className="w-[1200px] mx-auto">
            <div className="border-4 items-center border-glamo-blue-800 rounded-2xl bg-glamo-blue-800/40 overflow-hidden">
              {/* Table Header */}
              <div className="flex justify-around items-center h-[50px] px-5 border-b-2 border-glamo-blue-800">
                <div className="w-[96px] text-white text-2xl font-bold">
                  部屋番号
                </div>
                <div className="w-[200px] text-white text-2xl font-bold text-center">
                  キーID
                </div>
                <div className="w-[200px] text-white text-2xl font-bold text-center">
                  鍵名前
                </div>
                <div className="w-[300px] text-white text-2xl font-bold text-center">
                  開始日時
                </div>
                <div className="w-[300px] text-white text-2xl font-bold text-center">
                  終了日時
                </div>
              </div>

              {/* Table Rows */}
              {keyData.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-around items-center h-[50px] px-5 border-b-2 border-glamo-blue-800 ${
                    item.opacity ? "opacity-40" : ""
                  }`}
                >
                  <div className="w-[96px] text-white text-2xl font-normal">
                    {item.roomNumber}
                  </div>
                  <div className="w-[200px] text-white text-2xl font-normal text-center">
                    {item.keyId}
                  </div>
                  <div className="w-[200px] text-white text-2xl font-normal text-center">
                    {item.keyName}
                  </div>
                  <div className="w-[300px] text-white text-2xl font-normal text-center">
                    {item.startDate}
                  </div>
                  <div className="w-[300px] text-white text-2xl font-normal text-center">
                    {item.endDate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-12">
          <GlamoButton
            variant="default"
            size="lg"
            onClick={handlePreviousPage}
            className="w-[200px] h-15"
          >
            前のページ
          </GlamoButton>

          <div className="text-white text-2xl font-normal">2/100</div>

          <GlamoButton
            variant="default"
            size="lg"
            onClick={handleNextPage}
            className="w-[200px] h-15"
          >
            次のページ
          </GlamoButton>
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
