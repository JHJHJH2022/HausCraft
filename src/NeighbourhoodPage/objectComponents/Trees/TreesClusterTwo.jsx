import { importObjects } from "../../imports/ImportedObjects";

export default function TreesClusterTwo() {
  const meshes = importObjects().treesCluster2Obj;
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.treesCluster2Beech.geometry}
        material={meshes.treesCluster2Beech.material}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.treesCluster2Lime.geometry}
        material={meshes.treesCluster2Lime.material}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.treesCluster2Spruce.geometry}
        material={meshes.treesCluster2Spruce.material}
      ></mesh>
    </group>
  );
}
