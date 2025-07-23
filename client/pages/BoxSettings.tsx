import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/ui/header";
import { GlamoButton } from "../components/ui/glamo-button";
import { Sidebar } from "@/components/ui/sidebar";
import { GlamoToggle } from "@/components/ui/glamo-toggle";

export const BoxSettings: React.FC = () => {
  const navigate = useNavigate();
  const [cardReaderEnabled, setCardReaderEnabled] = useState(true);
  const [image, setImage] = useState("");
  const [screensaverEnabled, setScreensaverEnabled] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleLogout = () => {
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  const handleSave = () => {
    console.log("Settings saved");
    navigate("/dashboard");
  };

  const handleDelete = () => {
    console.log("Delete action");
  };
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
        showHamburger
        showLogout
        onHamburgerClick={() => setSidebarOpen(true)}
        onLogoutClick={() => navigate("/login")}
      />
      <div className="px-[80px] py-8">
        <h1 className="text-white text-[36px] font-bold mb-8">
          宅配ボックス設定
        </h1>
        <div className="mb-12 mx-12">
          <h2 className="text-white text-[28px] font-bold mb-6">
            ボックス情報
          </h2>
          <div className="flex items-center gap-8 mb-8">
            <div className="text-white text-2xl font-normal w-48">
              ボックスタイプ
            </div>
            <div className="w-[600px] h-15 rounded-2xl border-4 border-glamo-blue-800 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">両面-Type A</span>
            </div>
          </div>
          <div className="flex items-center gap-8 mb-8">
            <div className="text-white text-2xl font-normal w-48">
              郵便ポスト設定
            </div>
            <div className="w-[600px] h-15 rounded-2xl border-4 border-glamo-blue-800 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">設定済み</span>
            </div>
            <GlamoButton
              variant="red"
              size="lg"
              onClick={handleDelete}
              className="w-[200px] h-15"
            >
              削除
            </GlamoButton>
          </div>
        </div>

        {/* Visual Box Layout */}
        <div className="flex justify-center mb-12">
          <div className="w-[1000px] h-[640px] rounded-2xl border-4 border-glamo-blue-800 bg-white/40 relative">
            {/* Box Image Container */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-[464px] h-[600px] relative">
                {image ? (
                  <div className="mt-4">
                    <img
                      src={image}
                      alt="選択した画像"
                      className="w-48 h-auto mb-2"
                    />
                    <button
                      className="text-red-500 border border-red-500 px-4 py-1 rounded"
                      onClick={() => setImage(null)}
                    >
                      削除
                    </button>
                  </div>
                ) : (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setImage(url);
                      }
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-white mb-12"></div>
        <div className="mb-12">
          <div className="flex items-center gap-8 mb-8">
            <h2 className="text-white text-[28px] font-bold mb-6">
              カードリーダー
            </h2>
            <GlamoToggle
              checked={screensaverEnabled}
              onChange={setScreensaverEnabled}
            />
          </div>
          <div className="flex items-center gap-8 mb-8">
            <div className="text-white text-2xl font-normal w-48">秘密キー</div>
            <div className="w-[600px] h-15 rounded-2xl border-4 border-glamo-blue-800 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">設定済み</span>
            </div>
            <GlamoButton
              variant="red"
              size="lg"
              onClick={handleDelete}
              className="w-[200px] h-15"
            >
              削除
            </GlamoButton>
          </div>

          {/* Test Card Key */}
          <div className="flex items-center gap-8">
            <div className="text-white text-2xl font-normal w-48">
              テストカードキー
            </div>
            <div className="w-[600px] h-15 rounded-2xl bg-white"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-12">
          <GlamoButton
            variant="outline"
            size="lg"
            onClick={handleCancel}
            className="w-[200px] h-15"
          >
            キャンセル
          </GlamoButton>
          <GlamoButton
            variant="default"
            size="lg"
            onClick={handleSave}
            className="w-[200px] h-15"
          >
            保存
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
