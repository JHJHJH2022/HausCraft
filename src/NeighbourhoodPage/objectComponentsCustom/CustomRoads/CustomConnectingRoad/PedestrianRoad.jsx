import { useGLTF, useTexture } from "@react-three/drei";
import { nanoid } from "nanoid";

export default function PedestrianRoad({ length }) {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/roadModels/roadP.glb");

  const geometry = model.nodes.roadP.geometry;
  const material = model.nodes.roadP.material;

  console.log(model.nodes);

  // map all levels
  const array = Array(length).fill(1);
  let n = -1;

  return array.map(() => {
    n += 1;
    return (
      <group position={[n, 0, 0]} key={nanoid()}>
        <mesh
          castShadow
          receiveShadow
          geometry={geometry}
          material={material}
        ></mesh>
      </group>
    );
  });
}
