import { useGLTF, useTexture } from "@react-three/drei";

export default function ChildrenB({ position }) {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/amenityModels/childrenB.glb");

  const geometry = model.nodes.PlayGround_01003.geometry;
  const material = model.nodes.PlayGround_01003.material;

  const geometry1 = model.nodes.PlayGround_01003_1.geometry;
  const material1 = model.nodes.PlayGround_01003_1.material;

  const geometry2 = model.nodes.PlayGround_01003_2.geometry;
  const material2 = model.nodes.PlayGround_01003_2.material;

  const geometry3 = model.nodes.PlayGround_01003_3.geometry;
  const material3 = model.nodes.PlayGround_01003_3.material;

  const geometry4 = model.nodes.PlayGround_01003_4.geometry;
  const material4 = model.nodes.PlayGround_01003_4.material;

  const geometry5 = model.nodes.PlayGround_01003_5.geometry;
  const material5 = model.nodes.PlayGround_01003_5.material;

  const bakedTexture = useTexture(
    "./bakedTextures/amenityTextures/playgroundFloor.jpg"
  );
  bakedTexture.flipY = false;
  bakedTexture.repeat.set(1, 1);

  // map={bakedTexture}
  // return geometry
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={geometry}
        material={material}
        position={position}
      ></mesh>
      <mesh castShadow receiveShadow geometry={geometry1} position={position}>
        <meshStandardMaterial color={"hsl(10, 35%, 82%)"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={geometry2}
        material={material2}
        position={position}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={geometry3}
        material={material3}
        position={position}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={geometry4}
        material={material4}
        position={position}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={geometry5}
        material={material5}
        position={position}
      ></mesh>
    </>
  );
}
