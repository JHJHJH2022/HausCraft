export default function VehicularRoad({ length }) {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[length, 0.3, 3.5]} />
      <meshStandardMaterial color={"grey"} />
    </mesh>
  );
}
