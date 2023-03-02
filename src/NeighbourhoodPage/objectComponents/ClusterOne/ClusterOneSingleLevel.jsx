import { importObjects } from "../../imports/ImportedObjects";

export default function ClusterOneSingleLevel({ upperFloorPos }) {
  const meshes = importObjects().cluster1LevelObj;
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.level3room.geometry}
        material={meshes.level3room.material}
        position={upperFloorPos}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.level4room.geometry}
        material={meshes.level4room.material}
        position={upperFloorPos}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.level5room.geometry}
        material={meshes.level5room.material}
        position={upperFloorPos}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.levelGlass.geometry}
        material={meshes.levelGlass.material}
        position={upperFloorPos}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.levelWall.geometry}
        material={meshes.levelWall.material}
        position={upperFloorPos}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.levelWindowFrame.geometry}
        material={meshes.levelWindowFrame.material}
        position={upperFloorPos}
      ></mesh>
    </group>
  );
}
