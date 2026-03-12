import { AiOutlineFire } from "react-icons/ai";
import ProgressCard from "./ProgressCard";
import { GiLeg } from "react-icons/gi";
import { LuBicepsFlexed } from "react-icons/lu";
import { BsPersonArmsUp } from "react-icons/bs";

const Progress = () => {
  return (
    <div className="w-full flex-wrap h-auto flex justify-between items-center gap-5">
      <ProgressCard
        name={"Biceps Curl"}
        amount={30}
        Icon={LuBicepsFlexed}
        bgColor="bg-[#8c0000]"
      />

      <ProgressCard
        name={"Push-Up"}
        amount={26}
        Icon={AiOutlineFire}
        bgColor="bg-[#480ca8]"
      />

      <ProgressCard
        name={"Squat"}
        amount={30}
        Icon={GiLeg}
        bgColor="bg-[#2dc653]"
      />

      <ProgressCard
        name={"Lateral Rises"}
        amount={30}
        Icon={BsPersonArmsUp}
        bgColor="bg-(--pushup)"
      />
    </div>
  );
};

export default Progress;
