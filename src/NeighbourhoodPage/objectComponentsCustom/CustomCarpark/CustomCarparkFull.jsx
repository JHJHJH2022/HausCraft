import CustomCarparkModules from "./CustomCarparkModules";

export default function CustomCarparkFull({ roof, ground, level, length }) {
  return (
    <CustomCarparkModules
      roof={roof}
      ground={ground}
      level={level}
      length={length}
    />
  );
}
