import { IconType } from "react-icons";

type WorkoutsDoneType = {
  Icon: IconType
  name: string;
  amount: number;
  bgColor: string;
}

const ProgressCard = ({Icon, name, amount, bgColor}: WorkoutsDoneType) => {
  return (
    <div className={`w-62.5 h-52.5 flex-col flex justify-center items-center text-white ${bgColor} rounded-xl p-5 gap-1.5`}>
      <div className="flex items-center justify-center gap-2 font-bold">
        <Icon size={30} />
        <p className="text-xl">{name}</p>
      </div>
      <div className="w-25 h-25 text-xl font-bold text-white border-white flex justify-center items-center border-10 rounded-full">
        <p>{amount}</p>
      </div>
      <p className="">Reps Done</p>
    </div>
  );
};

export default ProgressCard;
