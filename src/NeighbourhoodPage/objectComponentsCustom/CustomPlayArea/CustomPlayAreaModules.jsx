import { useGLTF, useTexture } from "@react-three/drei";

export default function CustomPlayAreaModules({ rotation, position }) {
  const dragon = useGLTF("dragon.glb");

  const bakedTexture = useTexture("dragonBakedNoLight.jpg");
  bakedTexture.flipY = false;

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={dragon.nodes.dragon.geometry}
      rotation={rotation}
      position={position}
    >
      <meshStandardMaterial map={bakedTexture} />
    </mesh>
  );
}
