import * as THREE from "three";

const w = 600 || window.innerWidth,
  h = 600 || window.innerHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
// camera.position.set(0, 0, 5);
camera.position.set(2, 2, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.setClearColor("#000");
document.querySelector("#app").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 添加坐标轴
const axes = new THREE.AxesHelper(2, 2, 2);
scene.add(axes);

const render = function () {
  cube.position.z = -4;
  renderer.render(scene, camera);
};
render();
