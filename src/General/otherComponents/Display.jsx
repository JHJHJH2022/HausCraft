export default function Display({
  buildingNum,
  buildingNumFive,
  buildingNumFour,
  buildingNumThree,
  buildingNumTwo,
  parkingNum,
  currentSessionId,
}) {
  return (
    <div className=" absolute w-80 z-40 p-5 bg-neutral/80 top-36 rounded-lg m-5 text-white flex flex-col">
      {/* button id must be same as typology in useStore! */}
      <h1 className="text-accent font-bold py-2 text-xl">{currentSessionId}</h1>
      <hr class="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <div className="flex flex-col gap-3">
        <p className="text-lg font-bold">Housing Units</p>
        <h5 className="flex justify-between content-center">
          <span>Housing Units</span>
          <span className="text-secondary font-bold text-xl">
            {buildingNum}{" "}
          </span>
        </h5>
        <h5 className="flex justify-between content-center">
          <span>Total Housing Units</span>
          <span className="text-secondary font-bold text-xl">
            {buildingNumFive +
              buildingNumFour +
              buildingNumThree +
              buildingNumTwo}
          </span>
        </h5>
        <h5 className="flex justify-between content-center">
          <span>5 - Room Units</span>
          <span className="text-secondary font-bold text-xl">
            {buildingNumFive}{" "}
          </span>
        </h5>
        <h5 className="flex justify-between content-center">
          <span>4 - Room Units</span>
          <span className="text-secondary font-bold text-xl">
            {buildingNumFour}{" "}
          </span>
        </h5>
        <h5 className="flex justify-between content-center">
          <span>3 - Room Units</span>
          <span className="text-secondary font-bold text-xl">
            {buildingNumThree}{" "}
          </span>
        </h5>
        <h5 className="flex justify-between content-center">
          <span>2 - Room Units</span>
          <span className="text-secondary font-bold text-xl">
            {buildingNumTwo}{" "}
          </span>
        </h5>

        <hr class="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <p className="text-lg font-bold">Amenities Units</p>
        <h5 className="flex justify-between content-center">
          <span>Parking Lots</span>
          <span className="text-secondary font-bold text-xl">
            {parkingNum}{" "}
          </span>
        </h5>
        <h5 className="flex justify-between content-center">
          <span>Play Facilities</span>
          <span className="text-secondary font-bold text-xl">
            {parkingNum}{" "}
          </span>
        </h5>
        <h5 className="flex justify-between content-center">
          <span>Social Facilities</span>
          <span className="text-secondary font-bold text-xl">
            {parkingNum}{" "}
          </span>
        </h5>

        <hr class="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <p className="text-lg font-bold">Landscape Units</p>
        <h5 className="flex justify-between content-center">
          <span>Total Green Area</span>
          <span className="text-secondary font-bold text-xl">
            {parkingNum}{" "}
          </span>
        </h5>
        <h5 className="flex justify-between content-center">
          <span>Green Cover Ratio</span>
          <span className="text-secondary font-bold text-xl">
            {parkingNum}{" "}
          </span>
        </h5>
      </div>
    </div>
  );
}
