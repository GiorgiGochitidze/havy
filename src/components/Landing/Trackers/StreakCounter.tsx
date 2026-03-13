"use client";

import { useState } from "react";
import { FaFire } from "react-icons/fa";

const StreakCounter = () => {
  const [streak, setStreak] = useState(5);

  const message =
    streak === 0 ? "Start today! 💪" :
    streak < 3 ? "Getting started!" :
    streak < 7 ? "Building momentum!" :
    streak < 14 ? "On fire! 🔥" :
    streak < 30 ? "Unstoppable! ⚡" :
    "Legendary! 🏆";

  return (
    <div className="w-full rounded-xl p-5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <FaFire size={16} color="#f97316" />
        <p className="font-bold text-sm">Training Streak</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-end gap-1">
          <span className="text-4xl font-black text-gray-800">{streak}</span>
          <span className="text-sm text-gray-400 mb-1">days</span>
        </div>
        <span className="text-sm font-semibold text-orange-400">{message}</span>
      </div>

      {/* Last 7 days dots */}
      <div className="flex gap-1.5 mt-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-2 rounded-full"
            style={{ backgroundColor: i < (streak % 7 || 7) ? "#f97316" : "#f3f4f6" }}
          />
        ))}
      </div>
      <p className="text-[10px] text-gray-300">Last 7 days</p>

      {/* Buttons */}
      <div className="flex gap-2 mt-1">
        <button
          onClick={() => setStreak((s) => Math.max(0, s - 1))}
          className="flex-1 py-1.5 rounded-lg text-xs font-semibold text-gray-400 bg-gray-100 hover:bg-gray-200 transition"
        >
          − Remove
        </button>
        <button
          onClick={() => setStreak((s) => s + 1)}
          className="flex-1 py-1.5 rounded-lg text-xs font-semibold text-white transition"
          style={{ backgroundColor: "#f97316" }}
        >
          + Add Day
        </button>
      </div>
    </div>
  );
};

export default StreakCounter;