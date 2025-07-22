import React from 'react';
import { cn } from '@/lib/utils';

interface GlamoToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onText?: string;
  offText?: string;
  className?: string;
}

export const GlamoToggle: React.FC<GlamoToggleProps> = ({
  checked,
  onChange,
  onText = "有効",
  offText = "無効",
  className,
}) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={cn(
        'glamo-toggle',
        !checked && 'off',
        className
      )}
    >
      <div className="glamo-toggle-circle" />
      <div className="glamo-toggle-text">
        {checked ? onText : offText}
      </div>
    </button>
  );
};
