"use client";

import { ArrowDown } from "lucide-react";

export default function DownloadButton() {
  return (
    <div className="flex justify-center items-center p-4">
      <button
        className="relative bg-emerald-400 text-black font-bold py-4 px-6 rounded-lg flex items-center justify-between min-w-[280px] hover:bg-emerald-500 transition-colors"
        style={{
          boxShadow: "3px 3px 0 0 #000000",
          borderLeft: "2px solid #000000",
          borderTop: "2px solid #000000",
          borderRight: "2px solid #000000",
          borderBottom: "2px solid #000000",
        }}
        onClick={() => {
          console.log("Download CV clicked");
        }}
      >
        <span className="text-xl tracking-wide">DOWNLOAD MY CV</span>
        <div className="border border-black rounded p-1 ml-2">
          <ArrowDown size={20} />
        </div>
      </button>
    </div>
  );
}
