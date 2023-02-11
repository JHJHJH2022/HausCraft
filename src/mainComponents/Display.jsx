export default function Display({
  buildingNum,
  handleClickBuidlingIndiv,
  handleClickTree,
  handleClick,
}) {
  return (
    <div className="sidebar">
      <h5>
        {buildingNum} building{buildingNum == 1 ? "" : "s"} has been placed
      </h5>
      <div className="buttons">
        <button id="buildingIndiv" onClick={handleClick}>
          Add Building
        </button>
        <button id="cluster1" onClick={handleClick}>
          Add Cluster One
        </button>
        <button id="tree" onClick={handleClick}>
          Add Tree
        </button>
      </div>
    </div>
  );
}
