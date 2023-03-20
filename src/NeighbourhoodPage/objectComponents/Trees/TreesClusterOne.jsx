import { importObjects } from "../../imports/ImportedObjects";
import * as materials from "../../imports/Materials";

export default function TreesClusterOne() {
  const meshes = importObjects().treesCluster1Obj;
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.treesCluster1Beech.geometry}
        material={meshes.treesCluster1Beech.material}
        // material={materials.TreeBeechMaterial}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.treesCluster1Lime.geometry}
        material={meshes.treesCluster1Lime.material}
        // material={materials.TreeLimeMaterial}
      ></mesh>
    </group>
  );
}
