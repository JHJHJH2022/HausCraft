import { useGLTF, useTexture } from "@react-three/drei";

export default function Tree1() {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/landscapeModels/tree1.glb");

  const geometry = model.nodes.tree017.geometry;
  const material = model.nodes.tree017.material;

  const geometry1 = model.nodes.tree017_1.geometry;
  const material1 = model.nodes.tree017_1.material;

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
