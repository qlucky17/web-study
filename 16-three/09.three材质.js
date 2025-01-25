import * as THREE from "three";
import Stat from "three/examples/jsm/libs/stats.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";
import {
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
} from "three";

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
/* 
材质:
MeshBasicMaterial, MeshNormalMaterial: 不需要灯光
MeshLambertMaterial: 需要灯光
MeshPhongMaterial: 需要灯光, 在MeshLambertMaterialf基础上添加了高光效果
MeshStandardMaterial: 需要灯光, 通过调整属性可以达到MeshLambertMaterial和MeshPhongMateriald的效果
其它更高级的材质: 详见api 
*/
const m = new THREE.MeshPhongMaterial();
m.color = new THREE.Color(0xffffff);
// m.wireframe = true;
const cube = new THREE.Mesh(g, m);
scene.add(cube);

const light = new THREE.DirectionalLight(0xff00ff, 1);
light.position.set(1, 0, 4);
scene.add(light);

// 添加坐标轴
const axes = new THREE.AxesHelper(3, 3, 3);
scene.add(axes);

// 帧率检测
const stat = new Stat();
document.querySelector("#app").appendChild(stat.domElement);

// 控制器
const controler = new OrbitControls(camera, renderer.domElement);

const clock = new THREE.Clock();
const tick = function () {
  const time = clock.getElapsedTime();
  renderer.render(scene, camera);
  stat.update();
  controler.update();
  requestAnimationFrame(tick);
};
tick();
