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
  return (
    <>
      {/* children == true && shape == "A" && */ <AdultA />}
      {/* children == true && shape == "A" &&  */ <AdultB />}
      <ChildrenA />
      <ChildrenB />
      <ElderlyA />
      <ElderlyB />
    </>
  );
}
