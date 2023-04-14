import { importObjects } from "../../imports/ImportedObjects";

export default function CarparkSingleLevel({ roof, ground, level, length }) {
  const meshes = importObjects().carparkLevelObj;
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.carparkLevelColumns.geometry}
        material={meshes.carparkLevelColumns.material}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={meshes.carparkLevelFloor.geometry}
        /* material={meshes.carparkLevelFloor.material} */
      >
        {roof === "A" && <meshStandardMaterial color={"green"} />}
        {roof === "B" && <meshStandardMaterial color={"blue"} />}
        {roof === "C" && <meshStandardMaterial color={"pink"} />}
      </mesh>
    </group>
  );
}
