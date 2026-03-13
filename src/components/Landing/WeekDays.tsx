const days = [
  { short: "Mon", full: "Monday",    training: "Pull", intensity: 0.9 },
  { short: "Tue", full: "Tuesday",   training: "Push", intensity: 0.7 },
  { short: "Wed", full: "Wednesday", training: "Legs", intensity: 1.0 },
  { short: "Thu", full: "Thursday",  training: "Pull", intensity: 0.85 },
  { short: "Fri", full: "Friday",    training: "Push", intensity: 0.65 },
  { short: "Sat", full: "Saturday",  training: "Legs", intensity: 0.95 },
  { short: "Sun", full: "Sunday",    training: "Rest", intensity: 0.1 },
];

const MAX_HEIGHT = 180; // px

const WeekDays = () => {
  const today = new Date().getDay();
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <div className="flex gap-2 bg-white p-4 rounded-2xl w-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] items-end">
      {days.map((day, i) => {
        const isToday = i === todayIndex;
        const isRest = day.training === "Rest";
        const barHeight = Math.round(day.intensity * MAX_HEIGHT);
        return (
          <div key={day.short} className="flex flex-col w-full items-center gap-2">
            <span
              className="text-[10px] font-semibold"
              style={{ color: isToday ? "#08CB00" : isRest ? "#d1d5db" : "#9ca3af" }}
            >
              {day.training}
            </span>
            <div
              className="w-8 rounded-lg transition-all duration-300"
              style={{
                height: `${barHeight}px`,
                backgroundColor: isToday ? "#08CB00" : isRest ? "#f3f4f6" : "#e5e7eb",
              }}
            />
            <span
              className="text-xs font-semibold"
              style={{ color: isToday ? "#08CB00" : "#9ca3af" }}
            >
              {day.short}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default WeekDays;