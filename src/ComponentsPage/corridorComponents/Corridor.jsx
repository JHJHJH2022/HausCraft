import * as THREE from "three";
import * as hp from "../../General/helpers/helpers";
import { useStoreAll } from "../hooks/useStoreAll";
import { DoubleSide } from "three";

export default function Corridor() {
  const [points] = useStoreAll((state) => [state.points]);
  if (points[0]) {
    const posArr = [];
    const vectorArr = [];

    for (let pt of points) {
      posArr.push(pt.position);
      vectorArr.push(new THREE.Vector3().fromArray(pt.position));
    }

    const shape = hp.ptsToPolylineShape(posArr);

    const geometry = new THREE.ShapeGeometry(shape);
    return (
      <mesh rotation={[Math.PI / 2, 0, 0]} geometry={geometry}>
        <meshBasicMaterial color="grey" side={DoubleSide} />
      </mesh>
    );
  } else return;
}
