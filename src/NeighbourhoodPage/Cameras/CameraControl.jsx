import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import EditControl from "./EditControl";
import StreetViewControl from "./StreetViewControl";

export default function CameraControl({
  streetView,
  isDragging,
  isChangingNoOfFloors,
}) {
  return (
    <>
      <OrthographicCamera
        makeDefault={!streetView}
        near={0}
        zoom={6}
        position={[100, 100, 150]}
      />

      <PerspectiveCamera makeDefault={streetView} fov={60} />

      {!streetView && (
        <EditControl
          isDragging={isDragging}
          isChangingNoOfFloors={isChangingNoOfFloors}
        />
      )}
      {streetView && <StreetViewControl />}
    </>
  );
}
