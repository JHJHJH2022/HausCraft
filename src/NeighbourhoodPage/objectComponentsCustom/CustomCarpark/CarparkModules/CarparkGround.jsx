import { useGLTF, useTexture } from "@react-three/drei";

export default function CarparkGround() {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/carparkModels/carparkC.glb");

  const geometry = model.nodes.Cube570.geometry;
  const material = model.nodes.Cube570.material;

  const geometry1 = model.nodes.Cube570_1.geometry;
  const material1 = model.nodes.Cube570_1.material;

  console.log(model.nodes);

  // return geometry
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={geometry}
        material={material}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={geometry1}
        material={material1}
      ></mesh>
    </>
  );
}
