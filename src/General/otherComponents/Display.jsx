export default function Display({ buildingNum, parkingNum, currentSessionId }) {
  return (
    <div className=" absolute w-80 z-40 p-5 bg-black/30 top-36 rounded-lg m-5 text-white">
      {/* button id must be same as typology in useStore! */}
      <h1 className="font-bold py-2 text-xl">{currentSessionId}</h1>
      <div className="flex flex-col">
        <h5>
          <span className="text-primary/70 text-xl">{buildingNum} </span>{" "}
          housing unit
          {buildingNum == 1 ? "" : "s"} has been placed
        </h5>
        <h5>
          <span className="text-primary/70 text-xl">{parkingNum} </span> parking
          lot
          {parkingNum == 1 ? "" : "s"} has been placed
        </h5>
      </div>
    </div>
  );
}
