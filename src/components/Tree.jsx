import { useGLTF } from "@react-three/drei";

export default function Tree() {
  const treePos = [1, 0, 1];

  const tree = useGLTF("tree.gltf");
  const treeObj = tree.nodes["tree-lime"];
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={treeObj.geometry}
      material={treeObj.material}
      scale={0.05}
      position={treePos}
    ></mesh>
  );
}
