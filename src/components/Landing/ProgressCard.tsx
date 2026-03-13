import { IconType } from "react-icons";

type WorkoutsDoneType = {
  Icon: IconType;
  name: string;
  amount: number;
  bgColor: string;
};

const ProgressCard = ({ Icon, name, amount, bgColor }: WorkoutsDoneType) => {
  return (
    <div
      className={`w-62.5 max-[1028px]:w-full h-auto flex-col flex justify-center items-center text-white ${bgColor} rounded-xl p-5 gap-1.5`}
    >
      <div className="flex items-center justify-between w-full gap-2 font-bold">
        <Icon size={30} />
        <p className="text-xl">{name}</p>
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default ProgressCard;
