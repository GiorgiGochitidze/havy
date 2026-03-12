const days = [
  { short: "Mon", full: "Monday" },
  { short: "Tue", full: "Tuesday" },
  { short: "Wed", full: "Wednesday" },
  { short: "Thu", full: "Thursday" },
  { short: "Fri", full: "Friday" },
  { short: "Sat", full: "Saturday" },
  { short: "Sun", full: "Sunday" },
];

const WeekDays = () => {
  const today = new Date().getDay(); // 0 = Sunday
  const todayIndex = today === 0 ? 6 : today - 1; // convert to Mon=0 ... Sun=6

  return (
    <div className="flex gap-2 bg-white p-4 rounded-2xl w-fit shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      {days.map((day, i) => {
        const isToday = i === todayIndex;
        return (
          <div key={day.short} className="flex flex-col items-center gap-2">
            <span
              className="text-xs font-semibold"
              style={{ color: isToday ? "#08CB00" : "#9ca3af" }}
            >
              {day.short}
            </span>
            <div
              className="w-8 rounded-lg transition-all duration-300"
              style={{
                height: "120px",
                backgroundColor: isToday ? "#08CB00" : "#f3f4f6",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WeekDays;
