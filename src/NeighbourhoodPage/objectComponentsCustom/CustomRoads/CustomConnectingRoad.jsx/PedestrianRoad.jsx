export default function PedestrianRoad({ length }) {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[length, 0.5, 2.4]} />
      <meshStandardMaterial color={"#C9987A"} />
    </mesh>
  );
}
