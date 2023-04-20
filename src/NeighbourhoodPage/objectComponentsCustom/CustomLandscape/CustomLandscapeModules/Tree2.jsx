import { useGLTF, useTexture } from "@react-three/drei";

export default function Tree2() {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/landscapeModels/tree2.glb");

  const geometry = model.nodes.Leaves.geometry;
  const material = model.nodes.Leaves.material;

  const geometry1 = model.nodes.Leaves_1.geometry;
  const material1 = model.nodes.Leaves_1.material;

  const geometry2 = model.nodes.Leaves_2.geometry;
  const material2 = model.nodes.Leaves_2.material;

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

      <mesh
        castShadow
        receiveShadow
        geometry={geometry2}
        material={material2}
      ></mesh>
    </>
  );
}
