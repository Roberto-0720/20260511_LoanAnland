"use client";

import { MessageCircle } from "lucide-react";

export default function ZaloButton() {
  return (
    <a
      href="https://zalo.me/0389980626"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Liên hệ qua Zalo"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-blue-500 zalo-pulse" />

        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 
                        flex items-center justify-center shadow-lg shadow-blue-500/30
                        transition-all duration-200 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/40">
          <MessageCircle size={26} className="text-white" fill="white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 
                        bg-white text-primary text-sm font-medium 
                        px-3 py-2 rounded-lg shadow-lg whitespace-nowrap
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200
                        pointer-events-none">
          Nhắn Zalo tư vấn
          <div className="absolute left-full top-1/2 -translate-y-1/2 
                          border-4 border-transparent border-l-white" />
        </div>
      </div>
    </a>
  );
}
