export default function Display({ buildingNum, handleClick }) {
  return (
    <div className="sidebar">
      {/* button id must be same as typology in useStore! */}
      <h5>
        {buildingNum} building{buildingNum == 1 ? "" : "s"} has been placed
      </h5>
      <div className="buttons">
        <button id="carpark" onClick={handleClick}>
          Add Car Park
        </button>
        <button id="buildingIndiv" onClick={handleClick}>
          Add Building
        </button>
        <button id="cluster1" onClick={handleClick}>
          Add Cluster One
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
