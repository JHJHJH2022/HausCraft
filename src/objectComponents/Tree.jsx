import { importObjects } from "../objectComponentsHelpers/ImportedObjects";

export default function Tree() {
  const meshes = importObjects().treeObj;
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={meshes.tree.geometry}
      material={meshes.tree.material}
    ></mesh>
  );
}