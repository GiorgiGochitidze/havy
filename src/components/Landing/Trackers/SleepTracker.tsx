"use client";

import { useState } from "react";
import { FaMoon } from "react-icons/fa";

const SleepTracker = () => {
  const [hours, setHours] = useState(0);

  const quality =
    hours === 0
      ? "–"
      : hours < 6
        ? "Poor 😵"
        : hours < 7
          ? "Okay 😐"
          : hours <= 9
            ? "Great 😴"
            : "Too much 🥱";

  const qualityColor =
    hours === 0
      ? "#9ca3af"
      : hours < 6
        ? "#ef4444"
        : hours < 7
          ? "#f97316"
          : hours <= 9
            ? "#08CB00"
            : "#facc15";

  return (
    <div className="w-full rounded-xl p-5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <FaMoon size={16} color="#6366f1" />
        <p className="font-bold text-sm">Sleep Last Night</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-end gap-1">
          <span className="text-4xl font-black text-gray-800">{hours}</span>
          <span className="text-sm text-gray-400 mb-1">hrs</span>
        </div>
        <span className="text-sm font-semibold" style={{ color: qualityColor }}>
          {quality}
        </span>
      </div>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={12}
        step={0.5}
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
        className="w-full accent-indigo-500"
      />
      <div className="flex justify-between text-[10px] text-gray-300">
        <span>0h</span>
        <span>6h</span>
        <span>12h</span>
      </div>
    </div>
  );
};

export default SleepTracker;
