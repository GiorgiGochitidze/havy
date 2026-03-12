"use client";

import { useState } from "react";

const CalorieCard = () => {
  const [calories, setCalories] = useState(2150);
  const [goal, setGoal] = useState(3000);
  const percentage = Math.min(calories / goal, 1);

  const radius = 54;
  const cx = 80;
  const cy = 80;
  const startAngle = -210;
  const endAngle = 30;
  const totalAngle = endAngle - startAngle;
  const currentAngle = startAngle + totalAngle * percentage;

  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const describeArc = (start: number, end: number) => {
    const s = {
      x: cx + radius * Math.cos(toRad(start)),
      y: cy + radius * Math.sin(toRad(start)),
    };
    const e = {
      x: cx + radius * Math.cos(toRad(end)),
      y: cy + radius * Math.sin(toRad(end)),
    };
    const large = end - start > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${radius} ${radius} 0 ${large} 1 ${e.x} ${e.y}`;
  };

  const needleX = cx + (radius - 10) * Math.cos(toRad(currentAngle));
  const needleY = cy + (radius - 10) * Math.sin(toRad(currentAngle));

  const status = calories < goal * 0.5 ? "Under" : calories < goal ? "On Track" : "Over";

  const handleCalorieChange = (val: string) => {
    if (val === "" || val === "-") { setCalories(0); return; }
    const num = parseInt(val, 10);
    if (!isNaN(num)) setCalories(Math.min(num, goal));
  };

  const handleGoalChange = (val: string) => {
    if (val === "" || val === "-") { setGoal(0); return; }
    const num = parseInt(val, 10);
    if (!isNaN(num)) setGoal(num);
  };

  return (
    <div className="w-full rounded-2xl p-4 flex flex-col gap-1" style={{ backgroundColor: "#f87171" }}>
      <div className="flex items-center gap-1.5">
        <span className="text-lg">🔥</span>
        <span className="text-white font-semibold text-sm">Calories</span>
      </div>

      <div className="flex justify-center">
        <svg width="160" height="100" viewBox="0 0 160 100">
          <path d={describeArc(startAngle, endAngle)} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="10" strokeLinecap="round" />
          <path d={describeArc(startAngle, currentAngle)} fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" />
          <line x1={cx} y1={cy} x2={needleX} y2={needleY} stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx={cx} cy={cy} r="4" fill="white" />
        </svg>
      </div>

      <div className="flex flex-col items-center -mt-6 gap-0.5">
        {/* Hide native spinner arrows */}
        <style>{`input[type=number]::-webkit-outer-spin-button,input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}input[type=number]{-moz-appearance:textfield;}`}</style>

        <input
          type="number"
          value={calories === 0 ? "" : calories}
          placeholder="0"
          onChange={(e) => handleCalorieChange(e.target.value)}
          className="text-white font-bold text-xl bg-transparent text-center w-24 outline-none border-b border-white/40 placeholder-white/50"
        />
        <p className="text-white/70 text-xs">Today</p>
        <p className="text-white font-semibold text-sm">{status}</p>

        {/* Goal changer */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-white/60 text-xs">Goal:</span>
          <input
            type="number"
            value={goal === 0 ? "" : goal}
            placeholder="3000"
            onChange={(e) => handleGoalChange(e.target.value)}
            className="text-white text-xs bg-white/20 rounded px-1.5 py-0.5 w-16 text-center outline-none placeholder-white/50"
          />
          <span className="text-white/60 text-xs">kcal</span>
        </div>
      </div>
    </div>
  );
};

export default CalorieCard;