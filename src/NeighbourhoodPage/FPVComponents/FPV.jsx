import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function FPV() {
  const { camera, gl } = useThree();
  if (camera.type == "PerspectiveCamera") {
    return <PointerLockControls args={[camera, gl.domElement]} />;
  } else {
    return;
  }
}
