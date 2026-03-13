const MiniStats = () => {
    return ( 
         <div className="w-full flex items-center px-5 justify-between rounded-xl h-25 bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)]">
        <p className="text-2xl mt-2.5 text-center leading-[0.5]">
          <span className="font-bold">65.7</span>
          <span className="text-[#9DACC1] text-xs">kg</span> <br />{" "}
          <span className=" text-base text-[#6B6E7B]">Weight</span>
        </p>

        <p className="text-2xl mt-2.5 text-center leading-[0.7]">
          <span className="font-bold">175</span> <br />
          <span className=" text-base text-[#6B6E7B]">Height(cm)</span>
        </p>

        <p className="text-2xl mt-2.5 text-center leading-[0.5]">
          <span className="font-bold">18</span>
          <span className="text-[#9DACC1] text-xs">yrs</span> <br />{" "}
          <span className=" text-base text-[#6B6E7B]">Age</span>
        </p>
      </div>
     );
}
 
export default MiniStats;