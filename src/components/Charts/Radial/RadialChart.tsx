"use client";

import { useEffect, useState } from "react";

const workouts = [
  { name: "Push-Ups", total: 26, goal: 26, color: "#08CB00" },
  { name: "Bicep Curls", total: 30, goal: 30, color: "#00BFFF" },
  { name: "Squats", total: 30, goal: 30, color: "#FF6B35" },
  { name: "Lateral Raises", total: 30, goal: 30, color: "#C084FC" },
];

const SIZE = 260;
const CENTER = SIZE / 2;
const STROKE = 14;
const GAP = 22;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
) {
  const s = polarToCartesian(cx, cy, r, startAngle);
  const e = polarToCartesian(cx, cy, r, endAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

const RadialChart = () => {
  const [progress, setProgress] = useState(workouts.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(workouts.map((w) => w.total / w.goal));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const totalDone = workouts.reduce((a, w) => a + w.total, 0);
  const totalGoal = workouts.reduce((a, w) => a + w.goal, 0);
  const overallPct = Math.round((totalDone / totalGoal) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 w-full flex items-center gap-6">
      <div className="text-center">
        <p className="text-sm mb-1.5 font-semibold text-gray-400 uppercase tracking-widest">
          Today&apos;s Grind
        </p>

        <div className="relative" style={{ width: SIZE, height: SIZE }}>
          <svg width={SIZE} height={SIZE}>
            {workouts.map((w, i) => {
              const r = CENTER - STROKE / 2 - i * GAP;
              const end = 5 + progress[i] * 350;
              return (
                <g key={w.name}>
                  {/* Track */}
                  <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={r}
                    fill="none"
                    stroke="#f3f4f6"
                    strokeWidth={STROKE}
                    strokeLinecap="round"
                  />
                  {/* Progress arc */}
                  <path
                    d={describeArc(CENTER, CENTER, r, 5, Math.max(5.5, end))}
                    fill="none"
                    stroke={w.color}
                    strokeWidth={STROKE}
                    strokeLinecap="round"
                    style={{
                      transition: "all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      transitionDelay: `${i * 0.15}s`,
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-gray-800">
              {overallPct}%
            </span>
            <span className="text-xs text-gray-400 font-medium mt-0.5">
              overall
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-2.5 w-full">
        {workouts.map((w) => {
          const pct = Math.round((w.total / w.goal) * 100);
          return (
            <div
              key={w.name}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: w.color }}
                />
                <span className="text-sm text-gray-600 font-medium">
                  {w.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">
                  {w.total.toLocaleString()} / {w.goal.toLocaleString()}
                </span>
                <span className="text-xs font-bold" style={{ color: w.color }}>
                  {pct}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadialChart;
