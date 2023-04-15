export default function CustomRoundabout() {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[30, 0.5, 2.4]} />
      <meshStandardMaterial color={"#A4A6AD"} />
    </mesh>
  );
}
