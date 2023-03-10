import { usePlane } from "@react-three/cannon";
export default function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0.5, 0], // set to human eye height
  }));

  return (
    <mesh ref={ref}>
      {/* <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" /> */}
    </mesh>
  );
}
