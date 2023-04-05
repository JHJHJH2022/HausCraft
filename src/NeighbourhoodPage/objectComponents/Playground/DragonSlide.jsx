import { useGLTF, useTexture } from "@react-three/drei";

export default function DragonSlide() {
  const dragon = useGLTF("dragon.glb");
  console.log(dragon.nodes.dragon.geometry);

  const bakedTexture = useTexture("dragonBaked.jpg");
  bakedTexture.flipY = false;
  console.log(bakedTexture);

  return (
    <mesh castShadow receiveShadow geometry={dragon.nodes.dragon.geometry}>
      <meshStandardMaterial map={bakedTexture} />
    </mesh>
  );
}
