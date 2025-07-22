import React from "react";

interface BoxData {
  box: string;
  room: string;
  status: string;
  password: string;
  date: string;
}

interface RemoteUnlockInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: BoxData | null;
  onUnlock: () => void;
}

export const RemoteUnlockInfoModal: React.FC<RemoteUnlockInfoModalProps> = ({
  isOpen,
  onClose,
  data,
  onUnlock,
}) => {
  if (!isOpen || !data) return null;

  // Only show unlock option for active boxes (not empty ones)
  const canUnlock = data.status !== "--" && data.room !== "--";

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/80">
        {/* Modal */}
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-[#5C6D81] border-4 border-[#5C6D81] rounded-2xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-[60px] h-[60px] flex items-center justify-center text-white hover:text-gray-300 transition-colors"
          >
            <svg
              className="w-8 h-8 rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>

          <div className="flex h-full">
            {/* Left side - Box diagram */}
            <div className="flex-shrink-0 w-[450px] h-[500px] m-[80px] mr-[40px] relative">
              <div className="w-full h-full bg-white/40 border-4 border-[#5C6D81] rounded-2xl relative overflow-hidden">
                {/* Box layout diagram */}
                <div className="absolute inset-0 bg-[#424549]/80 flex items-center justify-center">
                </div>
              </div>
            </div>

            {/* Right side - Information and controls */}
            <div className="flex-1 px-8 py-20 flex flex-col">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-white text-4xl font-bold mb-8">遠隔解錠</h2>
              </div>

              {/* Notice text */}
              <div className="text-center mb-16">
                <p className="text-white text-2xl font-normal">
                  注意事項BLA BLA BLA...
                </p>
              </div>

              {/* Confirmation text */}
              <div className="text-center mb-8">
                <p className="text-white text-2xl font-normal">
                  このボックスを解錠しますか？
                </p>
              </div>

              {/* Box information */}
              <div className="text-center mb-12">
                <div className="text-yellow-400 text-4xl font-bold leading-tight">
                  {data.box}
                </div>
                <div className="text-yellow-400 text-4xl font-bold leading-tight">
                  {data.room} {data.status}
                </div>
              </div>

              {/* Unlock button */}
              <div className="flex justify-center">
                {canUnlock ? (
                  <button
                    onClick={onUnlock}
                    className="w-[200px] h-[60px] bg-[#F05D5E] rounded-2xl text-white text-2xl font-bold hover:bg-[#E04A4B] transition-colors"
                  >
                    解錠
                  </button>
                ) : (
                  <div className="w-[200px] h-[60px] bg-gray-500 rounded-2xl text-white text-2xl font-bold flex items-center justify-center cursor-not-allowed opacity-50">
                    使用不可
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
