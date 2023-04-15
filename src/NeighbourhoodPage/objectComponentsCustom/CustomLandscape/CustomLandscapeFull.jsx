import CustomLandscapeModules from "./CustomLandscapeModules";

export default function CustomLandscapeFull({
  shape,
  length: numX,
  width: numY,
  radius: seed,
  density,
  sizeVariation: displacementY,
  displacement: displacementX,
}) {
  const densityFactor = 20 * density;
  const displacementFactorX = 50 * displacementX;
  const displacementFactorY = 50 * displacementY;
  const numXArr = new Array(numX).fill(0);
  console.log(numXArr);
  let counter = -1;
  let dist = 0;

  return numXArr.map(() => {
    counter += 1;
    dist = counter * densityFactor * 5;
    return (
      <group position={[dist, 0, 0]}>
        <CustomLandscapeModules
          shape={shape}
          /*  length={length}
      width={width} */
          densityFactor={densityFactor}
          displacementFactorX={displacementFactorX}
          displacementFactorY={displacementFactorY}
          seed={seed + counter}
        />
      </group>
    );
  });
}
