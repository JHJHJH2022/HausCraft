import { importObjects } from "../../imports/ImportedObjects";

export default function TreesClusterOne() {
  const meshes = importObjects().treesCluster1Obj;
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.treesCluster1Beech.geometry}
        material={meshes.treesCluster1Beech.material}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.treesCluster1Lime.geometry}
        material={meshes.treesCluster1Lime.material}
      ></mesh>
    </group>
  );
}
