const CheckList = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-5 rounded-xl p-5 h-25 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <p className="text-xl font-bold">Today&apos;s Training Checklist</p>
      <ol className="list-decimal list-inside" type="1">
        <li>
          Push-ups - x3 sets to failure
          <ul className="list-disc list-inside ml-4.5">
            <li>Set 1 - x10</li>
            <li>Set 2 - x8</li>
            <li>Set 3 - x6</li>
          </ul>
        </li>
        <li>
          Pike Push-ups - 3 sets x3-6 reps
          <ul className="list-disc list-inside ml-4.5">
            <li>Set 1 - x3</li>
            <li>Set 2 - x3</li>
            <li>Set 3 - x3</li>
          </ul>
        </li>
         <li>
          Chair Dips - 3 sets x8-12 reps
          <ul className="list-disc list-inside ml-4.5">
            <li>Set 1 - x12</li>
            <li>Set 2 - x12</li>
            <li>Set 3 - x12</li>
          </ul>
        </li>
        <li>
          Overhead Press (bottle) - 3 sets x10 reps
          <ul className="list-disc list-inside ml-4.5">
            <li>Set 1 - x10</li>
            <li>Set 2 - x10</li>
            <li>Set 3 - x10</li>
          </ul>
        </li>
        <li>
          Chest Press (bottle) - 3 sets x10-12 reps
          <ul className="list-disc list-inside ml-4.5">
            <li>Set 1 - x10</li>
            <li>Set 2 - x10</li>
            <li>Set 3 - x10</li>
          </ul>
        </li>
        <li>
          Diamond Push-ups - 3 sets x2-5 reps
          <ul className="list-disc list-inside ml-4.5">
            <li>Set 1 - x2-5</li>
            <li>Set 2 - x2-5</li>
            <li>Set 3 - x2-5</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default CheckList;
