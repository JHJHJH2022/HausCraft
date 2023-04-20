import CustomCarparkSingleLevel from "./CustomCarparkSingleLevel";
import CarparkRoof from "./CarparkModules/CarparkRoof";
import CarparkGround from "./CarparkModules/CarparkGround";

export default function CustomCarparkFull({ roof, ground, level, length }) {
  return (
    <>
      <group position={[0, 3.5 * level + 1, 0]}>
        <CarparkRoof roof={roof} />
      </group>
      <group position={[0, 1, 0]}>
        <CustomCarparkSingleLevel level={level} />
      </group>
      <CarparkGround />
    </>
  );
}
