export default function StraightRoad({
  position,
  rotation,
  length,
  thickness,
  width,
}) {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <boxGeometry args={[length, thickness, width]} />
      <meshStandardMaterial color={"grey"} />
    </mesh>
  );
}
