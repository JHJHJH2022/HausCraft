import { useGLTF, useTexture } from "@react-three/drei";

export default function CustomTurnThreeWay() {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/roadModels/roadB.glb");

  const geometry = model.nodes.Cube021.geometry;
  const material = model.nodes.Cube021.material;

  const geometry1 = model.nodes.Cube021_1.geometry;
  const material1 = model.nodes.Cube021_1.material;

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
