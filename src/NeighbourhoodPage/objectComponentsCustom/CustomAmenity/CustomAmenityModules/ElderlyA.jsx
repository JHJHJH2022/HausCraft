import { useGLTF, useTexture } from "@react-three/drei";

export default function ElderlyA({ position }) {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/amenityModels/elderlyA.glb");

  const geometry = model.nodes.Circle006.geometry;
  const material = model.nodes.Circle006.material;

  const geometry1 = model.nodes.Circle006_1.geometry;
  const material1 = model.nodes.Circle006_1.material;

  const geometry2 = model.nodes.Circle006_2.geometry;
  const material2 = model.nodes.Circle006_2.material;

  const geometry3 = model.nodes.Circle006_3.geometry;
  const material3 = model.nodes.Circle006_3.material;

  const geometry4 = model.nodes.Circle006_4.geometry;
  const material4 = model.nodes.Circle006_4.material;

  const geometry5 = model.nodes.Circle006_5.geometry;
  const material5 = model.nodes.Circle006_5.material;

  const bakedTexture = useTexture(
    "./bakedTextures/amenityTextures/playgroundFloor.jpg"
  );
  bakedTexture.flipY = false;
  bakedTexture.repeat.set(1, 1);
  console.log(model.nodes);
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
    </>
  );
}
