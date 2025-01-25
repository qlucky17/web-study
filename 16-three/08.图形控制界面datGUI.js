import * as THREE from "three";
import Stat from "three/examples/jsm/libs/stats.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";

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

// 添加物体
const g = new THREE.SphereGeometry(0.7);
const m = new THREE.MeshBasicMaterial({
  color: 0xff00ff,
  wireframe: true,
});
const cube = new THREE.Mesh(g, m);
scene.add(cube);

// 添加坐标轴
const axes = new THREE.AxesHelper(3, 3, 3);
scene.add(axes);

// 帧率检测
const stat = new Stat();
document.querySelector("#app").appendChild(stat.domElement);

// 控制器
const controler = new OrbitControls(camera, renderer.domElement);

// gui
const gui = new dat.GUI();
gui.add(camera.position, "x", -5, 5, 0.01).name("相机位置x");
gui.add(camera.position, "y", -5, 5, 0.01).name("相机位置y");
gui.add(camera.position, "z", -5, 5, 0.01).name("相机位置z");

const folder1 = gui.addFolder("物体位置");
folder1.add(cube.position, "x", -5, 5, 0.01).name("x");
folder1.add(cube.position, "y", -5, 5, 0.01).name("y");
folder1.add(cube.position, "z", -5, 5, 0.01).name("z");

const clock = new THREE.Clock();
const tick = function () {
  const time = clock.getElapsedTime();
  renderer.render(scene, camera);
  stat.update();
  controler.update();
  requestAnimationFrame(tick);
};
tick();
