import { IoIosNotificationsOutline } from "react-icons/io";
import Progress from "./Progress";
import WeekDays from "./WeekDays";

const Landing = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-5">
      <div className="w-full h-auto flex flex justify-between items-center">
        <h1 className="text-3xl font-bold">Hello, Welcome Back👋</h1>
        <IoIosNotificationsOutline size={30} />
      </div>

      <WeekDays />
      <Progress />
    </div>
  );
};

export default Landing;
