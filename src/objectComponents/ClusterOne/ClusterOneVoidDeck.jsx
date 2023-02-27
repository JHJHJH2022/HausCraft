import { importObjects } from "../../imports/ImportedObjects";

export default function ClusterOneVoidDeck() {
  const meshes = importObjects().cluster1VoidDeckObj;
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.voiddeck3room.geometry}
        material={meshes.voiddeck3room.material}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.voiddeck4room.geometry}
        material={meshes.voiddeck4room.material}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.voiddeck5room.geometry}
        material={meshes.voiddeck5room.material}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.voiddeckFloor.geometry}
        material={meshes.voiddeckFloor.material}
      ></mesh>
    </group>
  );
}
