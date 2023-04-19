import { nanoid } from "nanoid";

import CarparkLevel from "./CarparkModules/CarparkLevel";

export default function CustomCarparkSingleLevel({ level }) {
  // map all levels
  const heightLevel = 3.5;
  const array = Array(level).fill(1);
  let n = -1;

  return array.map(() => {
    n += 1;
    return (
      <group position={[0, heightLevel * n, 0]} key={nanoid()}>
        <CarparkLevel />
      </group>
    );
  });
}
