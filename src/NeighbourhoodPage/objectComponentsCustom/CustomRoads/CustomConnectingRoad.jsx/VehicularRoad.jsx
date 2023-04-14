export default function VehicularRoad({ length }) {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[length, 0.3, 7]} />
      <meshStandardMaterial color={"grey"} />
    </mesh>
  );
}
