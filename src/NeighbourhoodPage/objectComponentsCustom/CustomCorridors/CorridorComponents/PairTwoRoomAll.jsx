import { useGLTF, useTexture } from "@react-three/drei";

export default function PairTwoRoomAll({ rotation, position, geomType }) {
  const model = useGLTF("./customComponentsModels/PairTwoRoomAll.glb");
  console.log(model.nodes);

  const bakedTexture = useTexture("./bakedTextures/PairTwoRoomAll.jpg");
  bakedTexture.flipY = false;
  console.log(bakedTexture);

  const geometry =
    geomType === "level"
      ? model.nodes.twoRoomLevel.geometry
      : geomType === "roof"
      ? model.nodes.twoRoomRoof.geometry
      : geomType === "voiddeck"
      ? model.nodes.twoRoomVoiddeck.geometry
      : model.nodes.twoRoomLevel.geometry;

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
