import * as THREE from "three";

const w = 600 || window.innerWidth,
  h = 600 || window.innerHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
camera.position.set(0, 0, 8);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.setClearColor("#000");
document.querySelector("#app").appendChild(renderer.domElement);

// 添加物体
const group = new THREE.Group();

const g1 = new THREE.BoxGeometry(1, 1, 1);
const m1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube1 = new THREE.Mesh(g1, m1);
group.add(cube1);
cube1.position.y = 1;

const g2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const m2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube2 = new THREE.Mesh(g2, m2);
group.add(cube2);

const g3 = new THREE.BoxGeometry(0.3, 0.3, 0.3);
const m3 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube3 = new THREE.Mesh(g3, m3);
group.add(cube3);
cube3.position.y = -1;

scene.add(group);

// 添加坐标轴
const axes = new THREE.AxesHelper(6, 6, 6);
scene.add(axes);

const clock = new THREE.Clock();
const tick = function () {
  const time = clock.getElapsedTime();
  // cube1.rotation.z = time;
  // cube2.rotation.z = time;
  // cube3.rotation.z = time;
  group.rotation.z = time;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};
tick();
