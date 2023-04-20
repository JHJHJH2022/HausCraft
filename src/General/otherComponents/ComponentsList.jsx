export default function Display({ handleClick }) {
  return (
    <div className="scrollHidden w-80 absolute z-40 p-5 bg-black/30 bottom-16 rounded-lg m-5 text-white overflow-y-scroll h-16">
      {/* button id must be same as typology in useStore! */}

      <div className="flex flex-col gap-2 py-3">
        <h1 className="font-bold py-2 text-xl">Components</h1>
        <button id="carpark" onClick={handleClick}>
          Car Park
        </button>

        <button id="buildingIndiv" onClick={handleClick}>
          Building
        </button>
        <button id="cluster1" onClick={handleClick}>
          Building Cluster One
        </button>
        <button id="cluster2" onClick={handleClick}>
          Building Cluster Two
        </button>
        <button id="tree" onClick={handleClick}>
          Tree
        </button>
        <button id="treesCluster1" onClick={handleClick}>
          Trees Cluster One
        </button>
        <button id="treesCluster2" onClick={handleClick}>
          Trees Cluster Two
        </button>
      </div>
    </div>
  );
}
