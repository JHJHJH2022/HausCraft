export default function VehicularRoad({ length }) {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[length, 0.1, 7]} />
      <meshStandardMaterial color={"#50555F"} />
    </mesh>
  );
}
