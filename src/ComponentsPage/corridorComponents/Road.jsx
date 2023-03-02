import * as THREE from "three";
import * as hp from "../../General/helpers/helpers";
import { useStoreAll } from "../hooks/useStoreAll";
import { DoubleSide } from "three";

// constants
const corridorThickness = 0.3;
const corridorWidth = 2;
const parapetWidth = 2;
const parapetHeight = 8;

export default function Road() {
  const [points] = useStoreAll((state) => [state.points]);
  if (points.length > 1) {
    const posArr = [];
    const vectorArr = [];

    for (let pt of points) {
      posArr.push(pt.position);
      vectorArr.push(new THREE.Vector3().fromArray(pt.position));
    }
    const allOffsetPts = hp.offsetPointsTwoSides(vectorArr, corridorWidth / 2);
    const geometry = new THREE.BufferGeometry();
    geometry.setFromPoints(vectorArr);
    const geometryOffset = new THREE.BufferGeometry();
    geometryOffset.setFromPoints(allOffsetPts);

    const material = new THREE.PointsMaterial({
      color: "hotpink",
      size: 5,
    });
    const materialOffset = new THREE.PointsMaterial({
      color: 0xffff00,
      size: 5,
    });

    //parapetA
    const parapetPtsA = hp.offsetPoints(
      vectorArr,
      corridorWidth / 2 + parapetWidth / 2,
      true
    );
    const parapetPtsAall = hp.offsetPointsTwoSides(
      parapetPtsA,
      parapetWidth / 2
    );
    const parapetADot = new THREE.BufferGeometry();
    parapetADot.setFromPoints(parapetPtsAall);
    const parapetAMaterial = new THREE.PointsMaterial({
      color: "green",
      size: 5,
    });

    //parapetB
    const parapetPtsB = hp.offsetPoints(
      vectorArr,
      corridorWidth / 2 + parapetWidth / 2,
      false
    );
    const parapetPtsBall = hp.offsetPointsTwoSides(
      parapetPtsB,
      parapetWidth / 2
    );
    const parapetBDot = new THREE.BufferGeometry();
    parapetBDot.setFromPoints(parapetPtsBall);
    const parapetBMaterial = new THREE.PointsMaterial({
      color: "blue",
      size: 5,
    });
    // return shape
    const allPtsArray = hp.vectorArrToArrofArr(allOffsetPts);

    const shape = hp.ptsToPolylineShape(allPtsArray);

    const extrudeSettings = {
      steps: 2,
      depth: corridorThickness,
      bevelEnabled: false,
    };

    // return shape A
    const allPtsArrayA = hp.vectorArrToArrofArr(parapetPtsAall);

    const extrudeSettingsA = {
      steps: 2,
      depth: parapetHeight,
      bevelEnabled: false,
    };
    const shapeA = hp.ptsToPolylineShape(allPtsArrayA);
    const floorgeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const floorgeometryA = new THREE.ExtrudeGeometry(shapeA, extrudeSettingsA);
    const floormaterial = new THREE.MeshStandardMaterial({ color: "white" });

    // return shape B
    const allPtsArrayB = hp.vectorArrToArrofArr(parapetPtsBall);

    const extrudeSettingsB = {
      steps: 2,
      depth: parapetHeight,
      bevelEnabled: false,
    };
    const shapeB = hp.ptsToPolylineShape(allPtsArrayB);
    const floorgeometryB = new THREE.ExtrudeGeometry(shapeB, extrudeSettingsB);

    return (
      <>
        <points geometry={geometry} material={material}></points>
        <points geometry={parapetADot} material={parapetAMaterial}></points>
        <points geometry={parapetBDot} material={parapetBMaterial}></points>

        <mesh
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, corridorThickness, 0]}
          geometry={floorgeometry}
          material={floormaterial}
        ></mesh>
      </>
    );
  } else return;
}
