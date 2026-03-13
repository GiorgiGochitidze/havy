import Landing from "@/components/Landing/Landing";
import MiniProfile from "@/components/Profile/MiniProfile";

export default function Home() {
  return (
    <div className="flex">
      <main className="w-[calc(100%-400px)] h-auto gap-5 flex flex-col justify-start p-5">
        <Landing />
      </main>
     <MiniProfile />
    </div>
  );
}
