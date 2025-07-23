import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/ui/header";
import { GlamoButton } from "@/components/ui/glamo-button";
import { GlamoToggle } from "@/components/ui/glamo-toggle";
import { Sidebar } from "@/components/ui/sidebar";

export const DisplaySettings: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [screensaverEnabled, setScreensaverEnabled] = useState(true);
  const [sleepEnabled, setSleepEnabled] = useState(true);
  const [image, setImage] = useState("");
  const [volume, setVolume] = useState(7);
  const [alarmVolume, setAlarmVolume] = useState(5);
  const [waitMinutes, setWaitMinutes] = useState(5);
  const [waitSeconds, setWaitSeconds] = useState(0);
  const [sleepMinutes, setSleepMinutes] = useState(5);
  const [sleepSeconds, setSleepSeconds] = useState(0);
  const icon1 = (
    <svg
      width="34"
      height="34"
      viewBox="0 0 85 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      <path
        d="M21.2134 63.6396L63.6398 21.2132"
        stroke="currentColor"
        stroke-width="8"
        stroke-linecap="round"
      ></path>
      <path
        d="M63.6396 63.6396L21.2132 21.2132"
        stroke="currentColor"
        stroke-width="8"
        stroke-linecap="round"
      ></path>
    </svg>
  );
  const icon2 = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-dots text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
      <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    </svg>
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

  const Divider = () => <div className="w-full h-px bg-white my-12" />;

  const FileUploadRow = ({
    label,
    filename,
    showButtons = true,
  }: {
    label: string;
    filename: string;
    showButtons?: boolean;
  }) => (
    <div className="flex items-center gap-8 !mt-2 py-2">
      <div className="text-white text-2xl font-normal w-72">{label}</div>
      <div className="w-[400px] h-15 rounded-2xl border-4 border-glamo-blue-800 flex items-center justify-center bg-white">
        <span className="w-[350px] text-black text-2xl font-bold truncate overflow-hidden whitespace-nowrap">
          {image || ""}
        </span>
      </div>
      <div className="flex gap-4">
        {image ? (
          <GlamoButton
            variant="red"
            className="w-[200px] h-15"
            onClick={() => setImage(null)}
          >
            削除
          </GlamoButton>
        ) : (
          <GlamoButton className="w-[200px] h-15">
            <input
              className="absolute w-[200px] h-[55px] opacity-0"
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.files?.[0].name);
              }}
            />
            削除
          </GlamoButton>
        )}
      </div>
    </div>
  );
  const FileUploadRowCol = ({
    label,
    filename,
    icon,
  }: {
    label: string;
    filename: string;
    icon: any;
  }) => (
    <div className="flex items-center gap-8 !mt-2 py-2">
      <div className="text-white text-2xl font-normal w-72"></div>
      <div className="w-[400px] h-15 rounded-2xl flex items-center justify-center bg-white">
        <span className="w-[350px] text-black text-2xl font-bold truncate overflow-hidden whitespace-nowrap"></span>
        <div className="w-15 h-15 rounded-r-2xl bg-button-gradient flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex gap-4">
        <GlamoButton className="w-[200px] h-15">アップロード</GlamoButton>
      </div>
    </div>
  );
  const TimeSelector = ({
    minutes,
    seconds,
    onMinutesChange,
    onSecondsChange,
  }: {
    minutes: number;
    seconds: number;
    onMinutesChange: (value: number) => void;
    onSecondsChange: (value: number) => void;
  }) => (
    <div className="flex items-center gap-4">
      <div className="relative">
        <input
          type="number"
          min="0"
          max="59"
          className="w-20 px-2 py-1 rounded border border-gray-300"
          value={minutes}
          onChange={(e) => onMinutesChange(parseInt(e.target.value))}
        />
      </div>
      <span className="text-white text-3xl font-normal">分</span>
      <div className="relative">
        <input
          type="number"
          min="0"
          max="59"
          className="w-20 px-2 py-1 rounded border border-gray-300"
          value={seconds}
          onChange={(e) => onSecondsChange(parseInt(e.target.value))}
        />
      </div>
      <span className="text-white text-3xl font-normal">秒</span>
    </div>
  );

  const VolumeSlider = ({
    value,
    onChange,
    label,
  }: {
    value: number;
    onChange: (value: number) => void;
    label: string;
  }) => (
    <div className="flex items-center gap-8 py-4">
      <div className="text-white text-2xl font-normal w-72">{label}</div>
      <div className="glamo-slider w-[600px]">
        <div className="glamo-slider-track" />
        <div
          className="glamo-slider-fill"
          style={{ width: `${value * 10}%` }}
        />
        <div
          className="glamo-slider-thumb"
          style={{ left: `calc(${value * 10}% - 20px)` }}
        />
        <input
          type="range"
          min="0"
          max="10"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full absolute h-[40px] opacity-0"
        />
      </div>
      <span className="text-white text-2xl font-bold w-12 text-center">
        {Math.round(value)}
      </span>
    </div>
  );

  return (
    <div className="glamo-container">
      <Header
        title="Glamo宅配ボックス"
        showHamburger
        showLogout
        onHamburgerClick={() => setSidebarOpen(true)}
        onLogoutClick={() => navigate("/login")}
      />

      <div className="px-4 py-8">
        <h2 className="text-white text-3xl font-bold mb-8 ml-16">
          システム - 表示/音声設定
        </h2>
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-8">
              <h3 className="text-white text-3xl font-bold w-72">
                スクリーンセーバー
              </h3>
              <GlamoToggle
                checked={screensaverEnabled}
                onChange={setScreensaverEnabled}
              />
            </div>

            {screensaverEnabled && (
              <>
                <div className="flex items-center gap-8">
                  <div className="text-white text-2xl font-normal w-72">
                    待ち時間
                  </div>
                  <TimeSelector
                    minutes={waitMinutes}
                    seconds={waitSeconds}
                    onMinutesChange={setWaitMinutes}
                    onSecondsChange={setWaitSeconds}
                  />
                </div>

                <FileUploadRow label="表示画像" filename="picture.jpg" />
                <FileUploadRowCol
                  label=""
                  filename="picture.jpg"
                  icon={icon1}
                />
                <FileUploadRowCol
                  label=""
                  filename="picture.jpg"
                  icon={icon2}
                />
                <FileUploadRowCol
                  label=""
                  filename="picture.jpg"
                  icon={icon2}
                />
              </>
            )}
          </div>
          <Divider />
          <div className="space-y-6">
            <div className="flex items-center gap-8">
              <h3 className="text-white text-3xl font-bold w-72">スリープ</h3>
              <GlamoToggle checked={sleepEnabled} onChange={setSleepEnabled} />
            </div>

            {sleepEnabled && (
              <div className="flex items-center gap-8">
                <div className="text-white text-2xl font-normal w-72">
                  待ち時間
                </div>
                <TimeSelector
                  minutes={sleepMinutes}
                  seconds={sleepSeconds}
                  onMinutesChange={setSleepMinutes}
                  onSecondsChange={setSleepSeconds}
                />
              </div>
            )}
          </div>
          <Divider />
          <div className="space-y-6">
            <h3 className="text-white text-3xl font-bold">音声</h3>
            <VolumeSlider value={volume} onChange={setVolume} label="音量" />

            <VolumeSlider
              value={alarmVolume}
              onChange={setAlarmVolume}
              label="アラーム音量"
            />
          </div>
          <div className="flex justify-center gap-8 pt-16">
            <GlamoButton variant="outline" className="w-[200px]">
              キャンセル
            </GlamoButton>
            <GlamoButton className="w-[200px]">保存</GlamoButton>
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
