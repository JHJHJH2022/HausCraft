import CustomLandscapeModules from "./CustomLandscapeModules";

export default function CustomLandscapeFull({
  shape,
  length,
  width,
  radius,
  density,
  sizeVariation,
  displacement,
}) {
  return (
    <CustomLandscapeModules
      shape={shape}
      length={length}
      width={width}
      radius={radius}
      density={density}
      sizeVariation={sizeVariation}
      displacement={displacement}
    />
  );
}
