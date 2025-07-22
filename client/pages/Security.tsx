import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/ui/header";
import { GlamoButton } from "../components/ui/glamo-button";
import { Sidebar } from "@/components/ui/sidebar";
import { GlamoInput } from "@/components/ui/glamo-input";

export const Security: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginEnabled, setLoginEnabled] = useState(true);
  const [httpApiEnabled, setHttpApiEnabled] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
        <h1 className="text-white text-[36px] font-bold mb-8">
          システム - セキュリティ
        </h1>
        <div className="mb-12">
          <h2 className="text-white text-[28px] font-bold mb-6 mx-10">
            ログイン情報変更
          </h2>
          <div className="relative flex mx-10">
            <div className="flex items-center gap-36 mb-4">
              <label className="text-white text-2xl font-normal w-32">
                ユーザー
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
              <label className="text-white text-2xl font-normal w-32">
                パスワード
              </label>
              <GlamoInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // error={errors.password}
                showPasswordToggle
                onPasswordToggle={() => setShowPassword(!showPassword)}
                isPasswordVisible={showPassword}
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

        <div className="w-full h-px bg-white mb-12"></div>
        <div className="mb-12 mx-10">
          <h2 className="text-white text-[28px] font-bold mb-6">許可IP</h2>
          <div className="flex gap-48 items-center mb-8">
            <div className="text-white text-2xl font-normal">適用対象</div>
            <div className="flex gap-[200px]">
              <button
                onClick={() => setLoginEnabled(!loginEnabled)}
                className={`w-[200px] h-15 rounded-2xl border-4 border-glamo-blue-700 flex items-center justify-center gap-5 ${
                  loginEnabled
                    ? "bg-glamo-blue-600/40 shadow-inner"
                    : "bg-transparent"
                }`}
              >
                {loginEnabled && (
                  <svg
                    className="w-6 h-5 stroke-white stroke-[4px]"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.63867 12.9336L8.63867 19.2188L21.6387 2.93359"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <span className="text-white text-2xl font-bold">ログイン</span>
              </button>

              <button
                onClick={() => setHttpApiEnabled(!httpApiEnabled)}
                className={`w-[200px] h-15 rounded-2xl border-4 border-glamo-blue-700 flex items-center justify-center gap-5 ${
                  httpApiEnabled
                    ? "bg-glamo-blue-600/40 shadow-inner"
                    : "bg-transparent"
                }`}
              >
                {httpApiEnabled && (
                  <svg
                    className="w-6 h-5 stroke-white stroke-[4px]"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.63867 12.9336L8.63867 19.2188L21.6387 2.93359"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <span className="text-white text-2xl font-bold">HTTPAPI</span>
              </button>
            </div>
          </div>
          <div className="flex gap-32 mb-8">
            <div className="text-white text-2xl font-normal mb-4">
              許可IPアドレス
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="w-[400px] h-15 rounded-2xl bg-white flex items-center justify-center">
                  <span className="text-black text-2xl font-normal">
                    192.168.1.1
                  </span>
                </div>
                <div className="w-[400px] h-15 rounded-2xl bg-white"></div>
                <div className="w-[400px] h-15 rounded-2xl bg-white"></div>
                <div className="w-[400px] h-15 rounded-2xl bg-white"></div>
                <div className="w-[400px] h-15 rounded-2xl bg-white"></div>
                <GlamoButton
                  variant="outline"
                  size="lg"
                  onClick={handleCancel}
                  className="w-[200px] h-15"
                >
                  キャンセル
                </GlamoButton>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="w-[400px] h-15 rounded-2xl bg-white"></div>
                <div className="w-[400px] h-15 rounded-2xl bg-white"></div>
                <div className="w-[400px] h-15 rounded-2xl bg-white"></div>
                <div className="w-[400px] h-15 rounded-2xl bg-white"></div>
                <div className="w-[400px] h-15 rounded-2xl bg-white"></div>
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
