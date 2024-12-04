import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("#c");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// let time = Date.now();

//Clock
// const clock = new THREE.Clock();
gsap.to(mesh.position, { x: 3, duration: 3, delay: 1 });
gsap.to(mesh.position, { y: 2, duration: 2, delay: 0.5 });
gsap.to(mesh.position, { z: -4, duration: 3, delay: 1 });

//Animation
const tick = () => {
  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;
  // mesh.rotation.x += deltaTime * 0.001;
  // const elapsedTime = clock.getElapsedTime(); //Pre built function to get elapsed time
  // mesh.position.x = Math.cos(elapsedTime * 2);
  // mesh.position.y = Math.sin(elapsedTime * 2);
  // camera.lookAt(mesh.position);
  // mesh.position.z = Math.cos(elapsedTime);
  // mesh.position.z = elapsedTime * 0.1;

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
