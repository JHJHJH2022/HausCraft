export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={2.5}
        position={[20, 100, 80]}
        castShadow
        shadow-mapSize-height={1512}
        shadow-mapSize-width={1512}
        shadow-camera-left={200}
        shadow-camera-right={-200}
        shadow-camera-top={200}
        shadow-camera-bottom={-200}
      />
    </>
  );
}
