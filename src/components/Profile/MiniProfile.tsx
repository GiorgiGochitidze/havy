import { FaRegUserCircle } from "react-icons/fa";
import MiniStats from "./MiniStats";
import Scheduled from "./Scheduled";
import CalorieCard from "../Charts/Speedometer/CalorieCard";

const MiniProfile = () => {
  return (
    <div className="min-w-100 h-autp flex flex-col gap-4 p-5">
      <div className="flex items-center justify-start gap-1.5">
        <div className="w-10 h-10 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] bg-white rounded-lg flex items-center justify-center">
          <FaRegUserCircle size={25} />
        </div>
        <p>Giorgi Gochitidze</p>
      </div>

      <MiniStats />

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
