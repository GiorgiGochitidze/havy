import { FaRegUserCircle } from "react-icons/fa";
import MiniStats from "./MiniStats";
import Scheduled from "./Scheduled";
import CalorieCard from "../Charts/Speedometer/CalorieCard";
import StreakCounter from "../Landing/Trackers/StreakCounter";
import SleepTracker from "../Landing/Trackers/SleepTracker";
import { IoIosNotificationsOutline } from "react-icons/io";

const MiniProfile = () => {
  return (
    <div className="min-w-100 max-[420px]:min-w-auto h-autp flex flex-col gap-4 p-5">
      <div className="flex items-center max-[820px]:justify-between justify-start gap-1.5">
        <div className="flex items-center gap-1.5 justify-center">
          <div className="w-10 h-10 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] bg-white rounded-lg flex items-center justify-center">
            <FaRegUserCircle size={25} />
          </div>
          <p>Giorgi Gochitidze</p>
        </div>

        <div className="w-fit h-auto min-[820px]:hidden flex flex-row justify-between items-center">
          <h1 className="text-3xl max-[650px]:text-xl max-[500px]:hidden font-bold">Hello, Welcome Back👋</h1>
          <IoIosNotificationsOutline size={30} />
        </div>
      </div>

      <MiniStats />

      <div className="flex gap-5 flex-col max-[820px]:flex-row max-[600px]:flex-col min-[820px]:flex min-[820px]:hidden">
        <StreakCounter />
        <SleepTracker />
      </div>

      <CalorieCard />

      <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
        <p className="text-2xl">Scheduled</p>
        <Scheduled imgUrl="/assets/pushup.png" trainingDay="Push" />
        <Scheduled imgUrl="/assets/pull.png" trainingDay="Pull" />
        <Scheduled imgUrl="/assets/leg.png" trainingDay="Leg + Core" />
        <div className="w-full h-0.25 bg-(--text-secondary) my-5"></div>
        <Scheduled imgUrl="/assets/pushup.png" trainingDay="Push" />
        <Scheduled imgUrl="/assets/pull.png" trainingDay="Pull" />
        <Scheduled imgUrl="/assets/leg.png" trainingDay="Leg + Core" />
        <div className="w-full h-0.25 bg-(--text-secondary) my-5"></div>
        <Scheduled imgUrl="/assets/rest.png" trainingDay="Rest" />
      </div>
    </div>
  );
};

export default MiniProfile;
