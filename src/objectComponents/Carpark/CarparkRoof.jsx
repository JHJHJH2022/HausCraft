import { importObjects } from "../../imports/ImportedObjects";

export default function CarparkRoof({ height }) {
  const meshes = importObjects().carparkRoofObj;
  return (
    <group position={[0, height, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.carparkRoofColumns.geometry}
        material={meshes.carparkRoofColumns.material}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.carparkRoofWall.geometry}
        material={meshes.carparkRoofWall.material}
      ></mesh>

      {/*  <mesh
        castShadow
        receiveShadow
        geometry={meshes.carparkRoofGreen.geometry}
        material={meshes.carparkRoofGreen.material}
      ></mesh> */}
    </group>
  );
}
