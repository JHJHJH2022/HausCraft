import { Html } from "@react-three/drei";

export default function BuildingHeightLimit({ heightLimit, setHeightLimit }) {
  const handleInput = (e) => {
    setHeightLimit(e.target.value);
  };

  return (
    <>
      <gridHelper
        args={[250, 50, "lightpink", "lightpink"]}
        position={[0, heightLimit, 0]}
      />
      <Html
        wrapperClass="label"
        position={[0, heightLimit, 125]}
        center
        distanceFactor={0.2}
        className="w-16"
      >
        <form>
          <label>
            <input
              type="text"
              className="bg-white"
              value={heightLimit}
              onChange={handleInput}
            />
          </label>
        </form>
      </Html>
      <Html
        wrapperClass="label"
        position={[-125, heightLimit, 0]}
        center
        distanceFactor={0.2}
        className="w-16"
      >
        <form>
          <label>
            <input
              type="text"
              className="bg-white"
              value={heightLimit}
              onChange={handleInput}
            />
          </label>
        </form>
      </Html>
      <Html
        wrapperClass="label"
        position={[125, heightLimit, 0]}
        center
        distanceFactor={0.2}
        className="w-16"
      >
        <form>
          <label>
            <input
              type="text"
              className="bg-white"
              value={heightLimit}
              onChange={handleInput}
            />
          </label>
        </form>
      </Html>
      <Html
        wrapperClass="label"
        position={[0, heightLimit, -125]}
        center
        distanceFactor={0.2}
        className="w-16"
      >
        <form>
          <label>
            <input
              type="text"
              className="bg-white"
              value={heightLimit}
              onChange={handleInput}
            />
          </label>
        </form>
      </Html>
    </>
  );
}
