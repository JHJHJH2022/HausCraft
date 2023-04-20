import { useGLTF, useTexture } from "@react-three/drei";

export default function Tree4() {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/landscapeModels/tree4.glb");

  const geometry = model.nodes.Leaf_1_Mat.geometry;
  const material = model.nodes.Leaf_1_Mat.material;

  const geometry1 = model.nodes.Leaf_1_Mat_1.geometry;
  const material1 = model.nodes.Leaf_1_Mat_1.material;

  const geometry2 = model.nodes.Leaf_1_Mat_2.geometry;
  const material2 = model.nodes.Leaf_1_Mat_2.material;

  const geometry3 = model.nodes.Leaf_1_Mat_3.geometry;
  const material3 = model.nodes.Leaf_1_Mat_3.material;

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
    </>
  );
}
