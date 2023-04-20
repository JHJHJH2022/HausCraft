import { useGLTF, useTexture } from "@react-three/drei";
import { nanoid } from "nanoid";

export default function VehicularRoad({ length }) {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/roadModels/roadA.glb");

  const geometry = model.nodes.Cube040.geometry;
  const material = model.nodes.Cube040.material;

  const geometry1 = model.nodes.Cube040_1.geometry;
  const material1 = model.nodes.Cube040_1.material;

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

        <mesh
          castShadow
          receiveShadow
          geometry={geometry1}
          material={material1}
        ></mesh>
      </group>
    );
  });
}
