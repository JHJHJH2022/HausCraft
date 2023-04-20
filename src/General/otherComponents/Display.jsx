export default function Display({
  buildingNum,
  buildingNumFive,
  buildingNumFour,
  buildingNumThree,
  buildingNumTwo,
  parkingNum,
  amenityChildrenNum,
  amenityAdultNum,
  amenityElderlyNum,
  maxHeight2,
  maxHeight3,
  maxHeight4,
  maxHeight5,
  buildingNumInPlan,
  currentSessionId,
}) {
  return (
    <div className=" absolute w-80 z-40 p-5 bg-neutral/80 top-36 rounded-lg m-5 text-white flex flex-col">
      {/* button id must be same as typology in useStore! */}
      <h1 className="text-accent font-bold py-2 text-xl">{currentSessionId}</h1>
      <hr class="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <div className="flex flex-col gap-3">
        <p className="text-lg font-bold">Housing and Parking Units</p>

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
        <h5 className="flex justify-between content-center">
          <span>Maximum Height</span>
          <span className="text-secondary font-bold text-xl">
            {Math.max(maxHeight2, maxHeight3, maxHeight4, maxHeight5) * 3 + 3} m{" "}
          </span>
        </h5>

        <h5 className="flex justify-between content-center">
          <span>Parking Lots</span>
          <span className="text-secondary font-bold text-xl">
            {parkingNum}{" "}
          </span>
        </h5>

        <hr class="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <p className="text-lg font-bold">Amenities Units</p>

        <h5 className="flex justify-between content-center">
          <span>Total Number of Amenities</span>
          <span className="text-secondary font-bold text-xl">
            {amenityChildrenNum + amenityAdultNum + amenityElderlyNum}{" "}
          </span>
        </h5>
        <h5 className="flex justify-between content-center">
          <span>Total Area of Amenities</span>
          <span className="text-secondary font-bold text-xl">
            {(amenityChildrenNum + amenityAdultNum + amenityElderlyNum) * 150}{" "}
            m2
          </span>
        </h5>

        <h5 className="flex justify-between content-center">
          <span>Children Playground</span>
          <span className="text-secondary font-bold text-xl">
            {amenityChildrenNum * 150} m2
          </span>
        </h5>
        <h5 className="flex justify-between content-center">
          <span>Adult Fitness Station</span>
          <span className="text-secondary font-bold text-xl">
            {amenityAdultNum * 150} m2
          </span>
        </h5>
        <h5 className="flex justify-between content-center">
          <span>Elderly Fitness Station</span>
          <span className="text-secondary font-bold text-xl">
            {amenityElderlyNum * 150} m2
          </span>
        </h5>

        <hr class="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <p className="text-lg font-bold">Landscape Units</p>
        <h5 className="flex justify-between content-center">
          <span>Total Landscape Area</span>
          <span className="text-secondary font-bold text-xl">
            {56980 - buildingNumInPlan * 250} m2{" "}
          </span>
        </h5>
        <h5 className="flex justify-between content-center">
          <span>Site Landscape Coverage</span>
          <span className="text-secondary font-bold text-xl">
            {Math.floor(((56980 - buildingNumInPlan * 100) / 56980) * 100)}%{" "}
          </span>
        </h5>
      </div>
    </div>
  );
}
