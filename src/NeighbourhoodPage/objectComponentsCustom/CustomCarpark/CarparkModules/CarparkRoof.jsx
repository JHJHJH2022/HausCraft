import { useGLTF, useTexture } from "@react-three/drei";

export default function CarparkRoof({ roof }) {
  // load all-in-one model
  const model = useGLTF("./customComponentsModels/carparkModels/carparkA.glb");

  const geometry = model.nodes.Plane003.geometry;
  const material = model.nodes.Plane003.material;

  const geometry1 = model.nodes.Plane003_1.geometry;
  const material1 = model.nodes.Plane003_1.material;

  const geometry2 = model.nodes.Plane003_2.geometry;
  const material2 = model.nodes.Plane003_2.material;

  const bakedTexture = useTexture("./bakedTextures/grassTexture1.jpg");
  /*  bakedTexture.flipZ = true; */
  bakedTexture.repeat.set(10, 10);

  const bakedTexture1 = useTexture("./bakedTextures/PVPanelTexture.jpg");
  /*  bakedTexture.flipZ = true; */
  bakedTexture1.repeat.set(50, 50);

  console.log(model.nodes.Plane003.geometry);
  console.log(roof);

  // return geometry
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={geometry}
        /*   material={material} */
      >
        {roof == "A" && (
          <meshStandardMaterial
            attach="material"
            map={bakedTexture1}
            /*   color={"darkgreen"} */
          />
        )}
        {roof == "B" && (
          <meshStandardMaterial
            attach="material"
            map={bakedTexture}
            /*   color={"darkgreen"} */
          />
        )}
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={geometry1}
        material={material1}
      ></mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={geometry2}
        material={material2}
      ></mesh>
    </>
  );
}
