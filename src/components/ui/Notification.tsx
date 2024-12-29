import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface NotificationProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export default function Notification({ type, message, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg flex items-center space-x-2 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      <span className="text-white">{message}</span>
      <button onClick={onClose} className="text-white hover:text-gray-200">
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}