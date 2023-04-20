import { OrthographicCamera, OrbitControls } from "@react-three/drei";
export default function EditControl({
  isDragging,
  isChangingNoOfFloors,
  editMode,
}) {
  return (
    <>
      <OrbitControls
        minZoom={editMode ? 2 : 3}
        maxZoom={50}
        enabled={!isDragging && !isChangingNoOfFloors}
        near={0.1}
        far={500}
      />
    </>
  );
}
