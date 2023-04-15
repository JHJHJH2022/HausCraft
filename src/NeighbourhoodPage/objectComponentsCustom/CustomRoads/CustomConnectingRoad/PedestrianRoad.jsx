export default function PedestrianRoad({ length }) {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[length, 0.5, 2.4]} />
      <meshStandardMaterial color={"#A4A6AD"} />
    </mesh>
  );
}
