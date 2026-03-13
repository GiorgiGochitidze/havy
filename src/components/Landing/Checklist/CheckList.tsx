"use client";

import { useState } from "react";
import SetList from "./SetList";

const exercises = [
  {
    name: "Push-ups",
    detail: "x3 sets to failure",
    sets: ["Set 1 - x10", "Set 2 - x8", "Set 3 - x6"],
  },
  {
    name: "Pike Push-ups",
    detail: "3 sets x3-6 reps",
    sets: ["Set 1 - x3", "Set 2 - x3", "Set 3 - x3"],
  },
  {
    name: "Chair Dips",
    detail: "3 sets x8-12 reps",
    sets: ["Set 1 - x12", "Set 2 - x12", "Set 3 - x12"],
  },
  {
    name: "Overhead Press",
    detail: "3 sets x10 reps",
    sets: ["Set 1 - x10", "Set 2 - x10", "Set 3 - x10"],
  },
  {
    name: "Chest Press",
    detail: "3 sets x10-12 reps",
    sets: ["Set 1 - x10", "Set 2 - x10", "Set 3 - x10"],
  },
  {
    name: "Diamond Push-ups",
    detail: "3 sets x2-5 reps",
    sets: ["Set 1 - x2-5", "Set 2 - x2-5", "Set 3 - x2-5"],
  },
];

const CheckList = () => {
  const [done, setDone] = useState<number[]>([]);

  const toggle = (i: number) =>
    setDone((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );

  const progress = Math.round((done.length / exercises.length) * 100);

  return (
    <div className="w-full h-full flex flex-col gap-4 rounded-2xl p-5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Today&apos;s Checklist</p>
        <span className="text-sm font-semibold text-gray-400">
          {done.length}/{exercises.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, backgroundColor: "#08CB00" }}
        />
      </div>

      {/* Exercises */}
      <div className="flex flex-col gap-2">
        {exercises.map((ex, i) => {
          const isDone = done.includes(i);
          return (
            <div
              key={i}
              onClick={() => toggle(i)}
              className="flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200"
              style={{ backgroundColor: isDone ? "#f0fdf4" : "#f9fafb" }}
            >
              {/* Checkbox */}
              <div
                className="mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all"
                style={{
                  borderColor: isDone ? "#08CB00" : "#d1d5db",
                  backgroundColor: isDone ? "#08CB00" : "transparent",
                }}
              >
                {isDone && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5 flex-1">
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-semibold transition-all"
                    style={{
                      color: isDone ? "#86efac" : "#111827",
                      textDecoration: isDone ? "line-through" : "none",
                    }}
                  >
                    {ex.name}
                  </span>
                  <span className="text-[11px] text-gray-400">{ex.detail}</span>
                </div>
                <SetList name="" sets={ex.sets} />
              </div>
            </div>
          );
        })}
      </div>

      {progress === 100 && (
        <p className="text-center text-sm font-bold text-green-500">
          Workout Complete! 🎉
        </p>
      )}
    </div>
  );
};

export default CheckList;
