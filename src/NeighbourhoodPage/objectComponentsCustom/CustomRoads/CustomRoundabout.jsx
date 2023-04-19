import { useGLTF, useTexture } from "@react-three/drei";

export default function CustomRoundabout() {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/roadModels/roadE.glb");

  const geometry = model.nodes.Cube034.geometry;
  const material = model.nodes.Cube034.material;

  const geometry1 = model.nodes.Cube034_1.geometry;
  const material1 = model.nodes.Cube034_1.material;

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
