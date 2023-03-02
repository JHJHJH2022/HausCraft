export default function Display({
  buildingNum,
  parkingNum,
  handleClick,
  handleSave,
  handleGet,
}) {
  return (
    <div className="sidebar">
      {/* button id must be same as typology in useStore! */}
      <div>
        <h5 className="indicators">
          <span className="highlightText">{buildingNum}</span> housing unit
          {buildingNum == 1 ? "" : "s"} has been placed
        </h5>
        <h5 className="indicators">
          <span className="highlightText">{parkingNum}</span> parking lot
          {parkingNum == 1 ? "" : "s"} has been placed
        </h5>
      </div>
      <div className="buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleGet}>Get</button>
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
