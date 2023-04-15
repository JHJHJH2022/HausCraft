import { importObjects } from "../imports/ImportedObjects";
import { useGLTF, useTexture } from "@react-three/drei";

export default function Site() {
  const meshes = importObjects().siteObj;
  const height = meshes.height / 2;

  /*  const bakedTexture = useTexture("./bakedTextures/grassTexture2-01.jpg"); */

  /*  bakedTexture.repeat.set(1, 1); */
  return (
    <group position={[0, -height - 2, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.road.geometry}
        material={meshes.road.material}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.siteGreen.geometry}
        material={meshes.siteGreen.material}
      >
        {/*    <meshStandardMaterial map={bakedTexture} /> */}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.surrounding.geometry}
        material={meshes.surrounding.material}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={meshes.crossing.geometry}
        material={meshes.crossing.material}
      ></mesh>
    </group>
  );
}

/*     crossing: crossing,
    road: road,
    siteGreen: siteGreen,
    surrounding: surrounding, */
