import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/ui/header";
import { GlamoButton } from "../components/ui/glamo-button";
import { Sidebar } from "@/components/ui/sidebar";
import { GlamoInput } from "@/components/ui/glamo-input";

export const DeliveryBox: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginEnabled, setLoginEnabled] = useState(true);
  const [httpApiEnabled, setHttpApiEnabled] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  const handleCancel = () => {
    navigate("/dashboard");
  };

  const handleSave = () => {
    console.log("Security settings saved");
    navigate("/dashboard");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      <div className="px-[80px] py-8">
        <h1 className="text-white text-[36px] font-bold mb-8">外部連携</h1>
        <div className="mb-12">
          <h2 className="text-white text-[28px] font-bold mb-6 mx-10">
            通知先
          </h2>
          <div className="relative flex mx-10">
            <div className="flex items-center gap-36 mb-4">
              <label className="text-white text-2xl font-normal w-72">
                フロントオートロック連携
              </label>
              <GlamoInput
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // error={errors.username}
                placeholder=""
              />
            </div>
            {/* {errors.username && (
              <div className="absolute right-[-230px] mt-2 ml-4">
                <span className="text-glamo-yellow text-2xl font-bold">
                  記入してください。
                </span>
              </div>
            )} */}
          </div>

          <div className="relative flex mx-10">
            <div className="flex items-center gap-36 mb-4">
              <label className="text-white text-2xl font-normal w-72">
                空室着荷通知
              </label>
              <GlamoInput
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // error={errors.username}
                placeholder=""
              />
            </div>
            {/* {errors.password && (
              <div className="absolute right-[-230px] mt-2 ml-4">
                <span className="text-glamo-yellow text-2xl font-bold">
                  記入してください。
                </span>
              </div>
            )} */}
          </div>
        </div>

        <div className="flex justify-center gap-8 pt-16">
          <GlamoButton variant="outline" className="w-[200px]">
            キャンセル
          </GlamoButton>
          <GlamoButton className="w-[200px]">保存</GlamoButton>
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
