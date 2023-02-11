import * as THREE from "three";
import { Vector3 } from "three";

export const getMeshHeight = (object) => {
  object.geometry.computeBoundingBox();
  const box = new THREE.Box3();
  box.copy(object.geometry.boundingBox).applyMatrix4(object.matrixWorld);
  const bboxVector = new Vector3();
  box.getSize(bboxVector);
  let objectHeight = bboxVector.y;
  return objectHeight;
};

export const angleSnap = (inputAngle, snapAngle) => {
  const angleRadian = (snapAngle * Math.PI) / 180;
  return Math.ceil(inputAngle / angleRadian) * angleRadian;
};
