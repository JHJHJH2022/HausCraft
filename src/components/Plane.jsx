import * as THREE from "three";

export default function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
      <planeGeometry attach="geometry" args={[200, 200]} receiveShadow />
      <meshPhongMaterial
        attach="material"
        color="#ccc"
        side={THREE.DoubleSide}
        receiveShadow
      />
    </mesh>
  );
}
