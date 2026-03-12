type ScheduledTrainingsType = {
  imgUrl: string;
  trainingDay: string;
};

const Scheduled = ({ imgUrl, trainingDay }: ScheduledTrainingsType) => {
  return (
    <div className="w-full h-20 items-center px-2.5 rounded-xl flex shadow-[0px_5px_15px_rgba(0,0,0,0.35)] bg-white gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imgUrl} alt="Working Man" className="w-15 h-15" />
      <div className="flex flex-col">
        <p>{trainingDay !== "Rest" && "Training -"}{trainingDay} Day</p>
        <p className="text-[#9D9D9D]">{trainingDay !== "Rest" ? "Workout" : "Recovery"}</p>
      </div>
    </div>
  );
};

export default Scheduled;
