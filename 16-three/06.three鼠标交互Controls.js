import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const w = 600 || window.innerWidth,
  h = 600 || window.innerHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.setClearColor("#000");
document.querySelector("#app").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 添加坐标轴
const axes = new THREE.AxesHelper(6, 6, 6);
scene.add(axes);

// 控制器
const controler = new OrbitControls(camera, renderer.domElement);

// const clock = new THREE.Clock();
const tick = function () {
  // const time = clock.getElapsedTime();
  renderer.render(scene, camera);
  controler.update();
  requestAnimationFrame(tick);
};
tick();
