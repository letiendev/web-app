import React from 'react';
import { GlamoButton } from './glamo-button';

interface RemoteUnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlock: () => void;
}

export const RemoteUnlockModal: React.FC<RemoteUnlockModalProps> = ({
  isOpen,
  onClose,
  onUnlock
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-glamo-bg-primary/80 to-glamo-bg-secondary/80" />
      
      {/* Modal Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-[1400px] h-[800px] rounded-2xl border-4 border-glamo-blue-800 bg-glamo-blue-800 relative">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-15 h-15 flex items-center justify-center"
          >
            <svg 
              className="w-15 h-15 stroke-white stroke-[8px] transform rotate-45" 
              viewBox="0 0 85 85" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.2129 63.6396L63.6393 21.2132" stroke="white" strokeWidth="8" strokeLinecap="round"/>
              <path d="M63.6396 63.6396L21.2132 21.2132" stroke="white" strokeWidth="8" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Modal Content */}
          <div className="p-10 h-full flex">
            {/* Left Side - Box Visualization */}
            <div className="w-[600px] h-[640px] mr-12">
              <div className="w-full h-full rounded-2xl border-4 border-glamo-blue-800 bg-white/40 relative">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-[464px] h-[600px] relative">
                    {/* Main Box Structure */}
                    <div className="w-full h-full bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg shadow-lg relative">
                      {/* Box Labels */}
                      <div className="absolute left-[45px] top-[63px] text-glamo-yellow-text text-base font-normal">G01　空き</div>
                      <div className="absolute left-[45px] top-[371px] text-glamo-yellow-text text-base font-normal">G03　空き</div>
                      <div className="absolute left-[22px] top-[512px] text-glamo-yellow-text text-base font-bold">G05　204　集荷</div>
                      <div className="absolute right-[45px] top-[513px] text-glamo-yellow-text text-base font-bold">G04　302　集荷</div>
                      
                      {/* Selected Box - G02 with yellow border */}
                      <div className="absolute right-[45px] top-[274px] text-glamo-yellow-text text-base font-bold">G02　101　お届け</div>
                      <div className="absolute right-[22px] top-[254px] w-[139px] h-[46px] border-4 border-yellow-400"></div>
                      
                      {/* Central structure */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[224px] h-[378px] bg-gray-900/80 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Modal Content */}
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <h2 className="text-white text-[36px] font-bold mb-8">遠隔解錠</h2>
              
              <p className="text-white text-2xl font-normal mb-8">注意事項BLA BLA BLA...</p>
              
              <p className="text-white text-2xl font-normal mb-8">このボックスを解錠しますか？</p>
              
              <div className="mb-12">
                <div className="text-yellow-400 text-[40px] font-bold leading-tight">
                  G02<br />
                  101　お届け
                </div>
              </div>
              
              <GlamoButton 
                variant="red" 
                size="lg"
                onClick={onUnlock}
                className="w-[200px] h-15"
              >
                解錠
              </GlamoButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
