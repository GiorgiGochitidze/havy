import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  return (
    <header className="w-full h-20 flex justify-between items-center px-5">
      <h1 className="text-3xl text-(--primary) font-bold">Havy</h1>
      <div className="streak"></div>
      <SlMenu size={25} />
    </header>
  );
};

export default Navbar;
