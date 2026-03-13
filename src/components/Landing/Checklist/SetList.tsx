type SetListProps = {
  name: string;
  sets: string[];
};

const SetList = ({ sets }: SetListProps) => {
  return (
    <div className="flex gap-2 flex-wrap mt-1">
      {sets.map((set, i) => (
        <span
          key={i}
          className="text-[11px] text-gray-400 bg-white px-2 py-0.5 rounded-full border border-gray-200"
        >
          {set}
        </span>
      ))}
    </div>
  );
};

export default SetList;
