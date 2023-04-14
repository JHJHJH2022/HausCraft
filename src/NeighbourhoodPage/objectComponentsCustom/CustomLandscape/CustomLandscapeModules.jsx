import { importObjects } from "../../imports/ImportedObjects";

export default function CustomLandscapeModule({
  shape,
  length,
  width,
  radius,
  density,
  sizeVariation,
  displacement,
}) {
  const meshes = importObjects().treeObj;

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={meshes.tree.geometry}
      scale={[2, 2, 2]}
      position={[0, 4, 0]}
    >
      {shape == "A" && <meshStandardMaterial color={"pink"} />}
      {shape == "B" && <meshStandardMaterial color={"green"} />}
    </mesh>
  );
}
