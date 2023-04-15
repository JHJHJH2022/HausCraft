import Tree1 from "./CustomLandscapeModules/Tree1";
import Tree2 from "./CustomLandscapeModules/Tree2";
import Tree3 from "./CustomLandscapeModules/Tree3";
import Tree4 from "./CustomLandscapeModules/Tree4";
import Tree5 from "./CustomLandscapeModules/Tree5";
import * as random from "seedrandom";

export default function CustomLandscapeModule({
  densityFactor,
  displacementFactorX,
  displacementFactorY,
  seed,
}) {
  const getRandomNum = (seed) => {
    const getRandom = random(seed);
    return getRandom();
  };

  const get = (seed) => {
    return getRandomNum(seed) * 2 - 1;
  };

  return (
    <>
      <group
        position={[
          displacementFactorX * -get(seed),
          0,
          displacementFactorY * -get(seed + 1),
        ]}
      >
        <group position={[densityFactor * -2, 0, 0]}>
          <Tree1 />
        </group>
      </group>
      <group
        position={[
          displacementFactorX * -get(seed + 2),
          0,
          displacementFactorY * -get(seed + 3),
        ]}
      >
        <group position={[densityFactor * -1, 0, 0]}>
          <Tree2 />
        </group>
      </group>
      <group
        position={[
          displacementFactorX * -get(seed + 4),
          0,
          displacementFactorY * -get(seed + 5),
        ]}
      >
        <group position={[densityFactor * 0, 0, 0]}>
          <Tree3 />
        </group>
      </group>
      <group
        position={[
          displacementFactorX * -get(seed + 6),
          0,
          displacementFactorY * -get(seed + 7),
        ]}
      >
        <group position={[densityFactor * 1, 0, 0]}>
          <Tree4 />
        </group>
      </group>
      <group
        position={[
          displacementFactorX * -get(seed + 8),
          0,
          displacementFactorY * get(seed + 9),
        ]}
      >
        <group position={[densityFactor * -get(seed), 0, 0]}>
          <Tree5 />
        </group>
      </group>
    </>
  );
}
