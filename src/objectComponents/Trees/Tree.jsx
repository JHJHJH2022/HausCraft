import { importObjects } from "../../imports/ImportedObjects";

export default function Tree() {
  const meshes = importObjects().treeObj;
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={meshes.tree.geometry}
      material={meshes.tree.material}
      scale={[2, 2, 2]}
      position={[0, 4, 0]}
    ></mesh>
  );
}
