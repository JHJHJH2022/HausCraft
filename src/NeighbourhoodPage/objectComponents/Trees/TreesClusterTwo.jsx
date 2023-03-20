import { importObjects } from "../../imports/ImportedObjects";

import * as materials from "../../imports/Materials";

export default function TreesClusterTwo() {
  const meshes = importObjects().treesCluster2Obj;
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.treesCluster2Beech.geometry}
        /* material={meshes.treesCluster2Beech.material} */
        material={materials.TreeBeechMaterial}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.treesCluster2Lime.geometry}
        /*  material={meshes.treesCluster2Lime.material} */
        material={materials.TreeLimeMaterial}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.treesCluster2Spruce.geometry}
        // material={meshes.treesCluster2Spruce.material}
        material={materials.TreeSpruceMaterial}
      ></mesh>
    </group>
  );
}
