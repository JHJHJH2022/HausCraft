import { useGLTF, useTexture } from "@react-three/drei";

export default function PairTwoRoomAll({
  rotation,
  position,
  geomType,
  unitType,
}) {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/allUnitTypes.glb");

  // load all textures
  const bakedTexture2 = useTexture("./bakedTextures/twoRoom.jpg");
  bakedTexture2.flipY = false;

  const bakedTexture3 = useTexture("./bakedTextures/threeRoom.jpg");
  bakedTexture3.flipY = false;

  const bakedTexture4 = useTexture("./bakedTextures/fourRoom.jpg");
  bakedTexture4.flipY = false;

  const bakedTexture5 = useTexture("./bakedTextures/fiveRoom.jpg");
  bakedTexture5.flipY = false;

  // texture baked on unit type input
  const bakedTexture =
    unitType === "fiveRoom"
      ? bakedTexture5
      : unitType === "fourRoom"
      ? bakedTexture4
      : unitType === "threeRoom"
      ? bakedTexture3
      : bakedTexture2;

  // nodename based on unit type and geomtype input
  const nodeName = unitType + geomType;

  const geometry = model.nodes[nodeName].geometry;

  // return geometry
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={geometry}
      rotation={rotation}
      position={position}
    >
      <meshStandardMaterial map={bakedTexture} />
    </mesh>
  );
}
