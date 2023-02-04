export default function Display({ buildingNum, handleClick }) {


  return (
    <div className="sidebar">
      <h5>
        {buildingNum} building{buildingNum == 1 ? "" : "s"} has been placed
      </h5>
      <button onClick={handleClick}>Add Building</button>
    </div>
  );
}
