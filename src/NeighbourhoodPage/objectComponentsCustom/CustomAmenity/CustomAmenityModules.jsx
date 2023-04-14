import { useGLTF, useTexture } from "@react-three/drei";

export default function CustomAmenityModules({
  children,
  adult,
  elderly,
  shape,
}) {
  console.log(elderly);
  const dragon = useGLTF("dragon.glb");

  const bakedTexture = useTexture("dragonBakedNoLight.jpg");
  bakedTexture.flipY = false;

  return (
    <mesh castShadow receiveShadow geometry={dragon.nodes.dragon.geometry}>
      {children && <meshStandardMaterial map={bakedTexture} />}
      {adult && (
        <meshStandardMaterial /* map={bakedTexture}  */ color="yellow" />
      )}
      {elderly && (
        <meshStandardMaterial /* map={bakedTexture}  */ color="pink" />
      )}
    </mesh>
  );
}
