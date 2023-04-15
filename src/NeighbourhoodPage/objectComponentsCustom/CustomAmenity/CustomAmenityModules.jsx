import { useGLTF, useTexture } from "@react-three/drei";

import AdultA from "./CustomAmenityModules/AdultA";
import AdultB from "./CustomAmenityModules/AdultB";
import ChildrenA from "./CustomAmenityModules/ChildrenA";
import ChildrenB from "./CustomAmenityModules/ChildrenB";
import ElderlyA from "./CustomAmenityModules/ElderlyA";
import ElderlyB from "./CustomAmenityModules/ElderlyB";

export default function CustomAmenityModules({
  children,
  adult,
  elderly,
  shape,
}) {
  if (shape == "A")
    return (
      <>
        {adult && (
          <group position={[-7.5, 0, 0]}>
            <AdultA />
          </group>
        )}

        {children && (
          <group position={[7.5, 0, 0]}>
            <ChildrenA />
          </group>
        )}
        {elderly && (
          <group position={[0, 0, 13]}>
            <ElderlyA />
          </group>
        )}
      </>
    );
  else if (shape == "B")
    return (
      <>
        {adult && (
          <group position={[-8, 0, 0]}>
            <AdultB />
          </group>
        )}

        {children && (
          <group position={[8, 0, 0]}>
            <ChildrenB />
          </group>
        )}
        {elderly && (
          <group position={[0, 0, 11]}>
            <ElderlyB />
          </group>
        )}
      </>
    );
}
