export default function Display({ buildingNum, parkingNum, handleClick }) {
  return (
    <div className="sidebar">
      {/* button id must be same as typology in useStore! */}
      <div>
        <h5>
          {buildingNum} housing unit{buildingNum == 1 ? "" : "s"} has been
          placed
        </h5>
        <h5>
          {parkingNum} parking lot{parkingNum == 1 ? "" : "s"} has been placed
        </h5>
      </div>
      <div className="buttons">
        <button id="carpark" onClick={handleClick}>
          Add Car Park
        </button>
        <button id="buildingIndiv" onClick={handleClick}>
          Add Building
        </button>
        <button id="cluster1" onClick={handleClick}>
          Add Building Cluster One
        </button>
        <button id="cluster2" onClick={handleClick}>
          Add Building Cluster Two
        </button>
        <button id="tree" onClick={handleClick}>
          Add Tree
        </button>
        <button id="treesCluster1" onClick={handleClick}>
          Add Trees Cluster One
        </button>
        <button id="treesCluster2" onClick={handleClick}>
          Add Trees Cluster Two
        </button>
      </div>
    </div>
  );
}
