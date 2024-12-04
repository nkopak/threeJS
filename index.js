import * as THREE from "three";

// Canvas
const canvas = document.querySelector("#c");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group();
scene.add(group);
group.rotation.y = 0.4;
group.rotation.x = 2;
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#00ff00" }),
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1.5, 1.5, 1.5),
  new THREE.MeshBasicMaterial({ color: "green" }),
);
cube2.position.x = 2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: "blue" }),
);
cube3.position.x = 4;
group.add(cube3);
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 2;
// mesh.position.y = -2;
// mesh.position.z = 1;
//The same as above - mesh.position.set(1.5, -2, 1);
// mesh.scale.x = 2;
// mesh.scale.set(0.5, 0.5, 0.5);
// mesh.rotation.y = 4;
// gimbal lock
// mesh.rotation.reorder("YXZ"); //need to be before setting the rotation
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.set(2, -3, 1);
//quaturnion

// scene.add(mesh);

// mesh.position.normalize(); // Normalize the position of the mesh

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);
/**
 * Sizes
 */
const sizes = {
  width: 1024,
  height: 720,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// console.log(mesh.position.length(camera.position)); // Position of the camera
camera.position.z = 5;
// camera.position.x = 2;
// camera.position.y = 1;
scene.add(camera);

// camera.lookAt(new THREE.Vector3(-2, 1, 0));
// camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
