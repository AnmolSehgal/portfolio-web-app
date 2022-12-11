import * as THREE from "three";

export const shapeRandomizer = () => {};

const NUMBER_OF_SHAPES = 2;
const X_AXIS_HIGHER_VALUE = 100;
const Y_AXIS_HIGHER_VALUE = 100;
const X_AXIS_LOWER_VALUE = -100;
const Y_AXIS_LOWER_VALUE = -100;

export const shapesGeometry = (randomNumber: number) => {
  switch (randomNumber) {
    case 0:
      return new THREE.BoxGeometry(1, 1, 1);
    // case 1:
    //   return new THREE.IcosahedronGeometry(1, 0.2);
    // case 2:
    //   return new THREE.
    // case 3:
    //   return new THREE.Shape();
    // case 4:
    //   return new THREE.Shape();
    // case 5:
    //   return new THREE.Shape();
    // case 6:
    //   return new THREE.Shape();
    default:
      return new THREE.SphereGeometry(1);
  }
};

export const shapeMaterial = () => {
  const colors = [0xcb68ee, 0xdbee68];
  const randomColorFromTheColorsList = colors[randomizer(colors)];

  console.log('color',randomColorFromTheColorsList)

  return new THREE.MeshLambertMaterial({
    color: randomColorFromTheColorsList,
    wireframe: randomizer(NUMBER_OF_SHAPES) > 0 || false,
  });
};

export const shape = () => {
  const shape = new THREE.Mesh(
    shapesGeometry(randomizer(NUMBER_OF_SHAPES)),
    shapeMaterial()
  );
  shape.position.x = randomNumberGeneratorFromGivenRange(X_AXIS_HIGHER_VALUE,X_AXIS_LOWER_VALUE);
  shape.position.y = randomNumberGeneratorFromGivenRange(Y_AXIS_HIGHER_VALUE,Y_AXIS_LOWER_VALUE);
  
    /*** */

  // shape.position.x = -10;
  // shape.position.y = 1;
  
  return shape;
};

export const randomizer = (array: Array<any> | number): number => {
  if (typeof array === "number") return Math.floor(Math.random() * array);
  return Math.floor(Math.random() * array.length);
};

export const randomNumberGeneratorFromGivenRange = (max:number, min:number) => {
  
let delta = max - min;  

const randomNumber = Math.round(min + Math.random() * delta);


return randomNumber;
};
