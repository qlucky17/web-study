import * as THREE from "three";

const w = 600 || window.innerWidth,
  h = 600 || window.innerHeight;

// 1. 创建场景、相机、渲染器
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
var renderer = new THREE.WebGLRenderer();
document.querySelector("#app").appendChild(renderer.domElement);

// 2. 创建物体
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);

// 3. 将物体添加到场景中
scene.add(line);

// 4. 调整相机的位置
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// 5. 渲染
renderer.setSize(w, h);
renderer.setClearColor("#000");
const render = function () {
  renderer.render(scene, camera);
};
render();
