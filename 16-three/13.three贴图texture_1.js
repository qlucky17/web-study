import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  AmbientLight,
  DoubleSide,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
} from "three";

let w = window.innerWidth,
  h = window.innerHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
camera.position.set(0, 3, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.setClearColor("#000");
renderer.shadowMap.enabled = true;
document.querySelector("#app").appendChild(renderer.domElement);

// 贴图
import img1 from "./images/1.webp";
import img2 from "./images/2.webp";
import img3 from "./images/3.webp";
import img4 from "./images/4.webp";
import img5 from "./images/5.webp";
import img6 from "./images/6.webp";
const loader = new THREE.TextureLoader();
const texture = loader.load(
  "https://img1.baidu.com/it/u=1321275328,211149858&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
);
// const texture = new THREE.CanvasTexture(createImage());
const t1 = loader.load(img1);
const t2 = loader.load(img2);
const t3 = loader.load(img3);
const t4 = loader.load(img4);
const t5 = loader.load(img5);
const t6 = loader.load(img6);

// 添加地面
const planG = new THREE.PlaneGeometry(4, 4);
const planM = new THREE.MeshStandardMaterial({
  // color: 0xcccccc,
  map: texture,
  side: THREE.DoubleSide,
});
const plan = new THREE.Mesh(planG, planM);
plan.rotation.x = -0.5 * Math.PI;
plan.receiveShadow = true;
scene.add(plan);

// 添加物体
// const g = new THREE.SphereGeometry(0.5);
// const m = new THREE.MeshPhongMaterial({ color: 0xffff00, map: t1 });
// const obj = new THREE.Mesh(g, m);
const g = new THREE.BoxGeometry(0.7, 0.7, 0.7);
const obj = new THREE.Mesh(g, [
  new THREE.MeshPhongMaterial({ map: t1 }),
  new THREE.MeshPhongMaterial({ map: t2 }),
  new THREE.MeshPhongMaterial({ map: t3 }),
  new THREE.MeshPhongMaterial({ map: t4 }),
  new THREE.MeshPhongMaterial({ map: t5 }),
  new THREE.MeshPhongMaterial({ map: t6 }),
]);
obj.position.y = 0.5;
obj.castShadow = true;
scene.add(obj);

// 添加灯光
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 0);
light.castShadow = true;
// light.angle = (45 / 180) * Math.PI;
scene.add(light);

scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// 添加坐标轴
// const axes = new THREE.AxesHelper(3, 3, 3);
// scene.add(axes);

// 控制器
const controler = new OrbitControls(camera, renderer.domElement);

const clock = new THREE.Clock();
const tick = function () {
  const time = clock.getElapsedTime();
  obj.position.y = Math.abs(Math.sin(time * 2)) + 0.5;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
  controler.update();
};
tick();


function createImage() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;

  const context = canvas.getContext("2d");
  context.fillStyle =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  context.fillRect(0, 0, 256, 256);

  return canvas;
}
