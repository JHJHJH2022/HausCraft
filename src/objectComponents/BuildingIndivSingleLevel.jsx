import { importObjects } from "./ImportedObjects";

export default function BuildingIndivSingleLevel({ upperFloorPos }) {
  const meshes = importObjects().buildingIndivObj;
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.walls.geometry}
        material={meshes.walls.material}
        position={upperFloorPos}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.windows.geometry}
        material={meshes.windows.material}
        position={upperFloorPos}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.others.geometry}
        material={meshes.others.material}
        position={upperFloorPos}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.floor.geometry}
        material={meshes.floor.material}
        position={upperFloorPos}
      ></mesh>
    </group>
  );
}
