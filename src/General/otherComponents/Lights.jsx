export default function Lights({ timeOfDay }) {
  let sunValue = 13 - timeOfDay;
  let intensity = Math.log2(9 - Math.abs(sunValue)) / 2;
  if (intensity < 0) {
    intensity = 0;
  }
  // range of sun value is -6 to 6 inclusive

  return (
    <>
      <ambientLight intensity={0.4} /> {/* originial was 0.2 */}
      <directionalLight
        intensity={intensity} // 4 when cast shadow
        position={[(100 / 6) * sunValue - 10, 150, (200 / 6) * sunValue - 10]}
        shadow-mapSize={1512}
        shadow-camera-left={350}
        shadow-camera-right={-350}
        shadow-camera-top={350}
        shadow-camera-bottom={-350}
        shadow-bias={-0.01}
        castShadow
      />
    </>
  );
}
