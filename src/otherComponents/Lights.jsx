export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        intensity={3} // 4 when cast shadow
        position={[30, 100, 20]}
        castShadow
        shadow-mapSize-height={1512}
        shadow-mapSize-width={1512}
        shadow-camera-left={350}
        shadow-camera-right={-350}
        shadow-camera-top={350}
        shadow-camera-bottom={-350}
        shadowBias={0.5}
      />
    </>
  );
}
