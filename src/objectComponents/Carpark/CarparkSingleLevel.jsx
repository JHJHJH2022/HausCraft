import { importObjects } from "../../imports/ImportedObjects";

export default function CarparkSingleLevel({ upperFloorPos }) {
  const meshes = importObjects().carparkLevelObj;
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.carparkLevelColumns.geometry}
        material={meshes.carparkLevelColumns.material}
        position={upperFloorPos}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.carparkLevelFloor.geometry}
        material={meshes.carparkLevelFloor.material}
        position={upperFloorPos}
      ></mesh>
    </group>
  );
}
