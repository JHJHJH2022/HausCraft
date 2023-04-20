import { useGLTF, useTexture } from "@react-three/drei";

export default function Tree3() {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/landscapeModels/tree3.glb");

  const geometry = model.nodes.tree002.geometry;
  const material = model.nodes.tree002.material;

  const geometry1 = model.nodes.tree002_1.geometry;
  const material1 = model.nodes.tree002_1.material;

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
