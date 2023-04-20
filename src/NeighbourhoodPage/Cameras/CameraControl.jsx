import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import EditControl from "./EditControl";
import StreetViewControl from "./StreetViewControl";

export default function CameraControl({
  streetView,
  isDragging,
  isChangingNoOfFloors,
  editMode,
}) {
  return (
    <>
      <OrthographicCamera
        makeDefault={!streetView}
        near={0}
        zoom={4}
        position={[200, 200, 250]}
      />

      <PerspectiveCamera makeDefault={streetView} fov={60} />

      {!streetView && (
        <EditControl
          isDragging={isDragging}
          isChangingNoOfFloors={isChangingNoOfFloors}
          editMode={editMode}
        />
      )}
      {streetView && <StreetViewControl />}
    </>
  );
}
