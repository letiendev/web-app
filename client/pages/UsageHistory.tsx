import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/ui/header";
import { GlamoButton } from "../components/ui/glamo-button";
import { Sidebar } from "@/components/ui/sidebar";

interface UsageData {
  index: string;
  roomNumber: string;
  boxNumber: string;
  action: string;
  keyId: string;
  keyName: string;
  date: string;
}

const usageData: UsageData[] = [
  {
    index: "11",
    roomNumber: "101",
    boxNumber: "A01",
    action: "お預け",
    keyId: "1234545678",
    keyName: "お父さん",
    date: "2025/7/30",
  },
  {
    index: "12",
    roomNumber: "101",
    boxNumber: "A02",
    action: "集荷",
    keyId: "12345678",
    keyName: "--",
    date: "2024/8/20",
  },
  {
    index: "13",
    roomNumber: "102",
    boxNumber: "A03",
    action: "お届け",
    keyId: "9786576543",
    keyName: "お母さん",
    date: "2099/12/31",
  },
  {
    index: "14",
    roomNumber: "103",
    boxNumber: "A04",
    action: "受",
    keyId: "3456789876",
    keyName: "ツァン",
    date: "2024/8/3",
  },
  {
    index: "15",
    roomNumber: "202",
    boxNumber: "B05",
    action: "受取",
    keyId: "4546878987",
    keyName: "グラモン",
    date: "2024/8/19",
  },
  {
    index: "16",
    roomNumber: "303",
    boxNumber: "B10",
    action: "受取",
    keyId: "1235687545",
    keyName: "Glamo",
    date: "2024/2/19",
  },
  {
    index: "17",
    roomNumber: "101",
    boxNumber: "A01",
    action: "お預け",
    keyId: "1234545678",
    keyName: "お父さん",
    date: "2025/7/30",
  },
  {
    index: "18",
    roomNumber: "101",
    boxNumber: "A02",
    action: "集荷",
    keyId: "12345678",
    keyName: "--",
    date: "2024/8/20",
  },
  {
    index: "19",
    roomNumber: "102",
    boxNumber: "A03",
    action: "お届け",
    keyId: "9786576543",
    keyName: "お母さん",
    date: "2099/12/31",
  },
  {
    index: "20",
    roomNumber: "103",
    boxNumber: "A04",
    action: "受取",
    keyId: "3456789876",
    keyName: "ツァン",
    date: "2024/8/3",
  },
];

export const UsageHistory: React.FC = () => {
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

  const handleUpdate = () => {
    console.log("Update data");
  };

  const handleClear = () => {
    console.log("Clear data");
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
        <h1 className="text-white text-[36px] font-bold mb-8">
          情報 - 利用履歴
        </h1>

        <div className="flex justify-between items-center mb-12 mx-10">
          <h2 className="text-white text-[28px] font-bold">
            宅配ボックス利用履歴
          </h2>

          <GlamoButton
            variant="default"
            size="lg"
            onClick={handleUpdate}
            className="w-[200px] h-15"
          >
            更新
          </GlamoButton>
        </div>

        {/* Data Table */}
        <div className="w-[1200px] mx-auto mb-12">
          <div className="border-4 border-glamo-blue-800 rounded-2xl bg-glamo-blue-800/40 overflow-hidden">
            {/* Table Header */}
            <div className="flex justify-around items-center h-[50px] px-5 border-b-2 border-glamo-blue-800">
              <div className="w-[150px] text-white text-2xl font-bold">
                Index
              </div>
              <div className="w-[150px] text-white text-2xl font-bold text-center">
                部屋番号
              </div>
              <div className="w-[150px] text-white text-2xl font-bold text-center">
                ボックス番号
              </div>
              <div className="w-[150px] text-white text-2xl font-bold text-center">
                動作
              </div>
              <div className="w-[150px] text-white text-2xl font-bold text-center">
                キーID
              </div>
              <div className="w-[150px] text-white text-2xl font-bold text-center">
                鍵名前
              </div>
              <div className="w-[150px] text-white text-2xl font-bold text-center">
                日時
              </div>
            </div>

            {/* Table Rows */}
            {usageData.map((item, index) => (
              <div
                key={index}
                className="flex justify-around items-center h-[50px] px-5 border-b-2 border-glamo-blue-800"
              >
                <div className="w-[150px] text-white text-2xl font-normal">
                  {item.index}
                </div>
                <div className="w-[150px] text-white text-2xl font-normal text-center">
                  {item.roomNumber}
                </div>
                <div className="w-[150px] text-white text-2xl font-normal text-center">
                  {item.boxNumber}
                </div>
                <div className="w-[150px] text-white text-2xl font-normal text-center">
                  {item.action}
                </div>
                <div className="w-[150px] text-white text-2xl font-normal text-center">
                  {item.keyId}
                </div>
                <div className="w-[150px] text-white text-2xl font-normal text-center">
                  {item.keyName}
                </div>
                <div className="w-[150px] text-white text-2xl font-normal text-center">
                  {item.date}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <GlamoButton
              variant="outline"
              size="lg"
              onClick={handleClear}
              className="w-[200px] h-15"
            >
              クリア
            </GlamoButton>
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
