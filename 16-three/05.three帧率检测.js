import * as THREE from "three";
import Stat from "three/examples/jsm/libs/stats.module";

const w = 600 || window.innerWidth,
  h = 600 || window.innerHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
// camera.position.set(0, 0, 5);
camera.position.set(3, 3, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.setClearColor("#000");
document.querySelector("#app").appendChild(renderer.domElement);

let cubes = [];
const createCube = function () {
  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00 * Math.random(),
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = (Math.random() - 0.5) * 4;
  cube.position.y = (Math.random() - 0.5) * 4;
  cube.position.z = (Math.random() - 0.5) * 4;
  cubes.push(cube);
  scene.add(cube);
};
for (let i = 0; i < 20; i++) {
  createCube();
}

// 添加坐标轴
const axes = new THREE.AxesHelper(6, 6, 6);
scene.add(axes);

// 帧率检测
const stat = new Stat();
document.querySelector("#app").appendChild(stat.domElement);

const clock = new THREE.Clock();
const tick = function () {
  const time = clock.getElapsedTime();
  cubes.forEach((cube, index) => {
    // cube.position.x = Math.sin(time * 2) * 1;
    // cube.position.y = Math.cos(time * 2) * 1;
    cube.rotation.x = time * 0.4 + index;
    cube.rotation.y = time * 0.4 + index;
  });
  renderer.render(scene, camera);
  stat.update();
  requestAnimationFrame(tick);
};
tick();
