import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  AmbientLight,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
} from "three";

// renderer.shadowMap.enabled = true;
// plan.receiveShadow = true;
// light.castShadow = true;
// obj.castShadow = true;

const w = 600 || window.innerWidth,
  h = 600 || window.innerHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
camera.position.set(7, 7, 7);
camera.lookAt(0, 0, 0);
camera.zoom = 1.5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.setClearColor("#000");
renderer.shadowMap.enabled = true;
document.querySelector("#app").appendChild(renderer.domElement);

// 添加地面
const planG = new THREE.PlaneGeometry(4, 4);
const planM = new THREE.MeshStandardMaterial({
  color: 0xcccccc,
});
const plan = new THREE.Mesh(planG, planM);
plan.rotation.x = -0.5 * Math.PI;
plan.receiveShadow = true;
scene.add(plan);

// 添加物体
const g = new THREE.SphereGeometry(0.5);
const m = new THREE.MeshPhongMaterial({ color: 0xffff00 });
const obj = new THREE.Mesh(g, m);
obj.position.y = 0.5;
obj.castShadow = true;
scene.add(obj);

// 添加灯光
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 0);
light.castShadow = true;
// light.angle = (45 / 180) * Math.PI;
scene.add(light);

const lightHelper = new THREE.DirectionalLightHelper(light);
scene.add(lightHelper);

scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// 添加坐标轴
const axes = new THREE.AxesHelper(3, 3, 3);
scene.add(axes);

// 控制器
const controler = new OrbitControls(camera, renderer.domElement);

// const camerHelper = new THREE.CameraHelper(camera);
// scene.add(camerHelper);

const clock = new THREE.Clock();
const tick = function () {
  const time = clock.getElapsedTime();
  // obj.position.y = Math.abs(Math.sin(time * 2)) + 0.5;
  obj.position.x = Math.sin(time * 2);
  obj.position.y = Math.abs(Math.cos(time * 2)) + 0.5;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
  controler.update();
  lightHelper.update();
  camera.updateProjectionMatrix(); //改变camer的zoom属性, 要updateProjectionMatrix才能生效
};
tick();
