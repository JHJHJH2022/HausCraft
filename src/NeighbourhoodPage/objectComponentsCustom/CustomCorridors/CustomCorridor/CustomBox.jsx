export default function CustomBox({
  position,
  rotation,
  length,
  thickness,
  width,
  color,
}) {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <boxGeometry args={[length, thickness, width]} />
      <meshStandardMaterial color={"lightgrey"} />
    </mesh>
  );
}
