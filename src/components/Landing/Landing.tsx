import { IoIosNotificationsOutline } from "react-icons/io";
import Progress from "./Progress";
import WeekDays from "./WeekDays";
import RadialChart from "../Charts/Radial/RadialChart";
import CheckList from "./Checklist/CheckList";
import StreakCounter from "./Trackers/StreakCounter";
import SleepTracker from "./Trackers/SleepTracker";

const Landing = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-5">
      <div className="w-full max-[820px]:hidden h-auto flex flex justify-between items-center">
        <h1 className="text-3xl font-bold">Hello, Welcome Back👋</h1>
        <IoIosNotificationsOutline size={30} />
      </div>

      <div className="w-full h-auto flex-wrap flex items-stretch justify-start gap-5">
        <div className="w-full flex gap-5 items-start max-[1100px]:flex-col">
          <CheckList />
          <div className="flex flex-col w-full gap-5">
            <WeekDays />
            <div className="flex gap-5 flex-col max-[820px]:hidden">
              <StreakCounter />
              <SleepTracker />
            </div>
          </div>
        </div>
        <RadialChart />
      </div>
      <Progress />
    </div>
  );
};

export default Landing;
