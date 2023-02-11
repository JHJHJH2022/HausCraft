import { importObjects } from "../objectComponentsHelpers/ImportedObjects";

export default function ClusterOneRoof({ height }) {
  const meshes = importObjects().cluster2RoofObj;
  return (
    <group position={[0, height, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.roof3room.geometry}
        material={meshes.roof3room.material}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.roof4room.geometry}
        material={meshes.roof4room.material}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.roof5room.geometry}
        material={meshes.roof5room.material}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.roofCorridor.geometry}
        material={meshes.roofCorridor.material}
      ></mesh>
    </group>
  );
}
