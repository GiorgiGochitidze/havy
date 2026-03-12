import { FaRegUserCircle } from "react-icons/fa";
import MiniStats from "./MiniStats";
import Goals from "./Goals";

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

      <Goals />
    </div>
  );
};

export default MiniProfile;
