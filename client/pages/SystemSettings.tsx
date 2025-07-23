import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/ui/header";
import { GlamoButton } from "@/components/ui/glamo-button";
import { Sidebar } from "@/components/ui/sidebar";

export const SystemSettings: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [autoUpdateUrl, setAutoUpdateUrl] = useState(
    "https://iremocon-g4-prod-public-bucket.s3.ap-no…",
  );

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleUpgrade = () => {
    console.log("Performing upgrade...");
  };

  const handleImport = () => {
    if (selectedFile) {
      console.log("Importing file:", selectedFile.name);
    }
  };

  const handleRestart = () => {
    console.log("Restarting system...");
  };

  const handleImmediateExecution = () => {
    console.log("Executing immediate update from URL:", autoUpdateUrl);
  };

  const handleSave = () => {
    console.log("Saving settings...");
    navigate("/dashboard");
  };

  const handleCancel = () => {
    navigate("/dashboard");
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
        <div className="mb-8">
          <h2 className="text-white text-4xl font-bold ml-12">
            システム - 基本設定
          </h2>
        </div>

        <div className="mb-12 mx-12">
          <div>
            <h3 className="text-white text-3xl font-bold mb-8 ml-16">
              基本情報
            </h3>

            {/* Two Column Layout */}
            <div className="grid grid-cols-3 gap-10 px-16">
              {/* Delivery Side (Left Column) */}
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-[#F05D5E] text-3xl font-bold mb-6 opacity-0">
                    配達側
                  </h4>
                </div>
                {/* App Version */}
                <div className="space-y-2 h-[60px]">
                  <label className="text-white text-2xl">
                    アプリバージョン
                  </label>
                </div>

                {/* Serial Number */}
                <div className="space-y-2 h-[60px]">
                  <label className="text-white text-2xl">シリアル番号</label>
                </div>

                {/* MAC Address */}
                <div className="space-y-2 h-[60px]">
                  <label className="text-white text-2xl">MACアドレス</label>
                </div>

                {/* Boot Time */}
                <div className="space-y-2 h-[60px]">
                  <label className="text-white text-2xl">起動時間</label>
                </div>

                {/* Restart System */}
                <div className="space-y-2 h-[60px]">
                  <label className="text-white text-2xl">
                    システムを再起動
                  </label>
                </div>
              </div>
              <div className="space-y-6">
                {/* Column Header */}
                <div className="text-center">
                  <h4 className="text-[#F05D5E] text-3xl font-bold mb-6">
                    配達側
                  </h4>
                </div>

                {/* App Version */}
                <div className="space-y-2">
                  <div className="w-full h-[60px] bg-transparent border-4 border-[#F05D5E] rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">1.0.2</span>
                  </div>
                </div>

                {/* Serial Number */}
                <div className="space-y-2">
                  <div className="w-full h-[60px] bg-transparent border-4 border-[#F05D5E] rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      XC0ABCDEFG00100001
                    </span>
                  </div>
                </div>

                {/* MAC Address */}
                <div className="space-y-2">
                  <div className="w-full h-[60px] bg-transparent border-4 border-[#F05D5E] rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      B8:D8:12:0D:FF:F2
                    </span>
                  </div>
                </div>

                {/* Boot Time */}
                <div className="space-y-2">
                  <div className="w-full h-[60px] bg-transparent border-4 border-[#F05D5E] rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      2日　3時間16分
                    </span>
                  </div>
                </div>

                {/* Restart System */}
                <div className="space-y-2">
                  <GlamoButton
                    onClick={handleRestart}
                    className="w-[200px] h-[60px]"
                  >
                    再起動
                  </GlamoButton>
                </div>
              </div>
              {/* User Side (Right Column) */}
              <div className="space-y-6">
                {/* Column Header */}
                <div className="text-center">
                  <h4 className="text-[#5DA8F0] text-3xl font-bold mb-6">
                    ユーザー側
                  </h4>
                </div>

                {/* App Version */}
                <div className="space-y-2">
                  <div className="w-full h-[60px] bg-transparent border-4 border-[#5DA8F0] rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">1.0.2</span>
                  </div>
                </div>

                {/* Serial Number */}
                <div className="space-y-2">
                  <div className="w-full h-[60px] bg-transparent border-4 border-[#5DA8F0] rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      XC0ABCDEFG00100002
                    </span>
                  </div>
                </div>

                {/* MAC Address */}
                <div className="space-y-2">
                  <div className="w-full h-[60px] bg-transparent border-4 border-[#5DA8F0] rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      B8:D8:12:0D:FF:F3
                    </span>
                  </div>
                </div>

                {/* Boot Time */}
                <div className="space-y-2">
                  <div className="w-full h-[60px] bg-transparent border-4 border-[#5DA8F0] rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      2日　3時間16分
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-white my-14"></div>

          {/* Auto Update Section */}
          <div>
            <h3 className="text-white text-3xl font-bold mb-8 ml-16">
              自動更新
            </h3>

            <div className="space-y-6">
              {/* URL */}
              <div className="flex items-center gap-8">
                <label className="text-white text-2xl w-72 ml-16">URL</label>
                <div className="w-[600px] h-[60px] bg-white rounded-2xl flex items-center px-4">
                  <input
                    type="text"
                    value={autoUpdateUrl}
                    onChange={(e) => setAutoUpdateUrl(e.target.value)}
                    className="text-black text-2xl bg-transparent border-none outline-none w-full"
                  />
                </div>
              </div>

              {/* Immediate Execution */}
              <div className="flex items-center gap-8">
                <label className="text-white text-2xl w-72 ml-16">
                  すぐ実行
                </label>
                <GlamoButton
                  onClick={handleImmediateExecution}
                  className="w-[200px] h-[60px]"
                >
                  すぐ実行
                </GlamoButton>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-8 pt-14">
            <button
              onClick={handleCancel}
              className="w-[200px] h-[60px] bg-transparent border-4 border-[#5E6E81] rounded-2xl text-white text-2xl font-bold hover:bg-[#5E6E81]/20 transition-colors"
            >
              キャンセル
            </button>
            <GlamoButton onClick={handleSave} className="w-[200px] h-[60px]">
              保存
            </GlamoButton>
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
