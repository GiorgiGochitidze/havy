import Landing from "@/components/Landing/Landing";
import MiniProfile from "@/components/Profile/MiniProfile";

export default function Home() {
  return (
    <div className="flex max-[820px]:flex-col-reverse">
      <main className="w-[calc(100%-400px)] max-[820px]:w-full h-auto gap-5 flex flex-col justify-start p-5">
        <Landing />
      </main>
     <MiniProfile />
    </div>
  );
}
