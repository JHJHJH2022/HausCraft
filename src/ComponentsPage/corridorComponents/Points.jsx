import * as THREE from "three";
import { useStoreAll } from "../hooks/useStoreAll";

export default function Points() {
  const [points] = useStoreAll((state) => [state.points]);
  const allPtsArr = [];
  for (let point of points) {
    var v = new THREE.Vector3();
    v.fromArray(point.position);
    allPtsArr.push(v);
  }

  /*   const handleDelete = (e) => {
    if (e.altKey) {
      e.stopPropagation();
      removeobjects(index);
      console.log("deleted");
    }
  }; */
  const geometry = new THREE.BufferGeometry();
  geometry.setFromPoints(allPtsArr);

  const material = new THREE.PointsMaterial({
    color: 0xff0000,
    size: 5,
  });

  return (
    <points
      /* onClick={handleDelete} */
      geometry={geometry}
      material={material}
    ></points>
  );
}
