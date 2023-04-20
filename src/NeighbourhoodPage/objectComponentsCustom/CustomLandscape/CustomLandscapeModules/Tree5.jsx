import { useGLTF, useTexture } from "@react-three/drei";

export default function Tree5() {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/landscapeModels/tree5.glb");

  const geometry = model.nodes.leaves001.geometry;
  const material = model.nodes.leaves001.material;

  const geometry1 = model.nodes.leaves001_1.geometry;
  const material1 = model.nodes.leaves001_1.material;

  const geometry2 = model.nodes.leaves001_2.geometry;
  const material2 = model.nodes.leaves001_2.material;

  const geometry3 = model.nodes.leaves001_3.geometry;
  const material3 = model.nodes.leaves001_3.material;

  const geometry4 = model.nodes.leaves001_4.geometry;
  const material4 = model.nodes.leaves001_4.material;

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

      <mesh
        castShadow
        receiveShadow
        geometry={geometry3}
        material={material3}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={geometry4}
        material={material4}
      ></mesh>
    </>
  );
}
