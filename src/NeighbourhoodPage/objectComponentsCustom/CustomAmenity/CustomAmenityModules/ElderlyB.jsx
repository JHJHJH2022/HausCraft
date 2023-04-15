import { useGLTF, useTexture } from "@react-three/drei";

export default function ElderlyB({ position }) {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/amenityModels/elderlyB.glb");

  const geometry = model.nodes.Cube004.geometry;
  const material = model.nodes.Cube004.material;

  const geometry1 = model.nodes.Cube004_1.geometry;
  const material1 = model.nodes.Cube004_1.material;

  const geometry2 = model.nodes.Cube004_2.geometry;
  const material2 = model.nodes.Cube004_2.material;

  const geometry3 = model.nodes.Cube004_3.geometry;
  const material3 = model.nodes.Cube004_3.material;

  const geometry4 = model.nodes.Cube004_4.geometry;
  const material4 = model.nodes.Cube004_4.material;

  const geometry5 = model.nodes.Cube004_5.geometry;
  const material5 = model.nodes.Cube004_5.material;

  const geometry6 = model.nodes.Cube004_6.geometry;
  const material6 = model.nodes.Cube004_6.material;

  const bakedTexture = useTexture(
    "./bakedTextures/amenityTextures/playgroundFloor.jpg"
  );
  bakedTexture.flipY = false;
  bakedTexture.repeat.set(1, 1);
  // return geometry
  return (
    <>
      <mesh castShadow receiveShadow geometry={geometry} position={position}>
        <meshStandardMaterial color={"hsl(165, 35%, 82%)"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={geometry1}
        material={material1}
        position={position}
      ></mesh>
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
      <mesh
        castShadow
        receiveShadow
        geometry={geometry6}
        material={material6}
        position={position}
      ></mesh>
    </>
  );
}
