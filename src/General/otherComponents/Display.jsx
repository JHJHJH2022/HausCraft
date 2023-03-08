export default function Display({
  buildingNum,
  parkingNum,
  handleClick,
  handleSave,
  handleGet,
}) {
  return (
    <div className=" absolute w-72 z-40 p-5 bg-black/30 top-36 rounded-lg m-5 text-white">
      {/* button id must be same as typology in useStore! */}
      <h1 className="font-bold py-2 text-xl">Design 7</h1>
      <div className="flex flex-col">
        <h5>
          <span className="highlightText">{buildingNum}</span> housing unit
          {buildingNum == 1 ? "" : "s"} has been placed
        </h5>
        <h5>
          <span className="highlightText">{parkingNum}</span> parking lot
          {parkingNum == 1 ? "" : "s"} has been placed
        </h5>
      </div>
    </div>
  );
}
