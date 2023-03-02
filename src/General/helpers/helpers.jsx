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

export const ptsToPolylineShape = (pts) => {
  // pts are in the format of an array of arrays, each has 3 values representing x,y,z, same as format of all pts in useStore. only x and z are required since 2d vectors are supplied to create shape
  if (!pts) return;

  const shape = new THREE.Shape();

  // move the shape to origin first
  shape.moveTo(pts[0][0], pts[0][2]);

  // continue rest of the shape
  for (let pt of pts) {
    shape.lineTo(pt[0], pt[2]);
  }

  return shape;
};

const rotateVectorY = (vector, angle) => {
  var axis = new THREE.Vector3(0, 1, 0);
  vector.applyAxisAngle(axis, angle);
  return vector;
};

export const offsetPoints = (all, dist, flip) => {
  // all Pts is an array of vector 3

  // make a copy of allPts
  const allPts = all.slice();

  // connect to line curves and add to array
  const lineCrvs = [];
  for (let i = 0; i < allPts.length - 1; i++) {
    var path = new THREE.LineCurve3(allPts[i], allPts[i + 1]);
    lineCrvs.push(path);
  }

  const normals = [];
  for (let line of lineCrvs) {
    let normal = rotateVectorY(
      line.getTangentAt(0.5),
      Math.PI / 2
    ).multiplyScalar(dist);
    if (flip) {
      normal.negate();
    }
    normals.push(normal);
  }

  // offset
  const allOffsetPts = [];
  console.log(normals);

  for (let i = 0; i < allPts.length; i++) {
    let v;
    if (i === 0) {
      v = allPts[i].clone().add(normals[i]); // .clone()!!!!!!!!!!!
    } else if (i === allPts.length - 1) {
      v = allPts[i].clone().add(normals[i - 1]);
    } else {
      if (
        // if going in same direction, just add normal once
        /*  normals[i - 1]
          .clone()
          .normalize()
          .equals(normals[i].clone().normalize()) */
        Math.round(normals[i - 1].x) == Math.round(normals[i].x) ||
        Math.round(normals[i - 1].z) == Math.round(normals[i].z)
      ) {
        v = allPts[i].clone().add(normals[i]);
      } else {
        v = allPts[i].clone().add(normals[i - 1].add(normals[i]));
      }
    }
    allOffsetPts.push(v);
  }

  return allOffsetPts;
};

export const offsetPointsTwoSides = (allPts, dist) => {
  const a = offsetPoints(allPts, dist, true);

  const b = offsetPoints(allPts, dist, false);
  const allPtsBothSides = [];

  for (let i = 0; i < a.length; i++) {
    allPtsBothSides.push(a[i]);
  }
  for (let i = b.length - 1; i >= 0; i--) {
    allPtsBothSides.push(b[i]);
  }
  return allPtsBothSides;
};

export const vectorArrToArrofArr = (vecArr) => {
  //this function takes in an array of vector3 and return an array of array consisting of 3 floats represnting xyz of the vector3s
  const arrArr = [];
  for (let vec of vecArr) {
    let arr = [];
    vec.toArray(arr);
    arrArr.push(arr);
  }
  return arrArr;
};
