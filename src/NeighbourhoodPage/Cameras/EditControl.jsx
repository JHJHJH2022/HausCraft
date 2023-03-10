import { OrthographicCamera, OrbitControls } from "@react-three/drei";
export default function EditControl({ isDragging, isChangingNoOfFloors }) {
  return (
    <>
      <OrbitControls
        minZoom={5}
        maxZoom={20}
        enabled={!isDragging && !isChangingNoOfFloors}
        near={0.1}
        far={500}
      />
    </>
  );
}
