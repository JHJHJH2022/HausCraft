import { importObjects } from "../../imports/ImportedObjects";

export default function CarparkGround({ carparkGroundHeight }) {
  const meshes = importObjects().carparkGroundObj;
  return (
    <group position={[0, -carparkGroundHeight - 0.2, 0]}>
      // why -carparkGroundHeight - 0.2?? something wrong with this carpark or
      the import process ground model
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.carparkGroundColumns.geometry}
        material={meshes.carparkGroundColumns.material}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.carparkGroundFloor.geometry}
        material={meshes.carparkGroundFloor.material}
      ></mesh>
    </group>
  );
}
