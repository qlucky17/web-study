import * as THREE from "three";
import Stat from "three/examples/jsm/libs/stats.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";
import {
  AmbientLight,
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
const m = new THREE.MeshPhongMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(g, m);
scene.add(cube);

/* 
灯光:
AmbientLight: 环境光
PointLight: 点光源, 方向四面八方, 会产生阴影
SpotLight: 台灯光, 圆锥状, 会产生阴影
DirectionalLight: 方向光, 平行光, 会产生阴影
HemisphereLigth: 平行光+反射光
AreaLight: 区域光, ReacAreaLight
 */
const light = new THREE.SpotLight(0xffffff);
light.position.set(1, 1, 0);
light.angle = (45 / 180) * Math.PI;
light.castShadow = true;
scene.add(light);

const lightHelper = new THREE.SpotLightHelper(light);
scene.add(lightHelper);

scene.add(new THREE.AmbientLight(0xffffff, 0.2));

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
  lightHelper.update();
  requestAnimationFrame(tick);
};
tick();
