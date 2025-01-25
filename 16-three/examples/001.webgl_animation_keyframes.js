import * as THREE from "three";

import Stats from "./jsm/libs/stats.module.js";

import { OrbitControls } from "./jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "./jsm/environments/RoomEnvironment.js";

import { GLTFLoader } from "./jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "./jsm/loaders/DRACOLoader.js";

let mixer;

let w = window.innerWidth, h = window.innerHeight;

const clock = new THREE.Clock();
const container = document.getElementById("container");

const stats = new Stats();
container.appendChild(stats.dom);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(w, h);
renderer.outputEncoding = THREE.sRGBEncoding;
container.appendChild(renderer.domElement);

// 将环境贴图添加到场景
// 创建一个“预过滤的Mipmapped辐射环境贴图（PMREM）
const pmremGenerator = new THREE.PMREMGenerator(renderer);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfe3dd);
scene.environment = pmremGenerator.fromScene(
  new RoomEnvironment(),
  0.04
).texture;

const camera = new THREE.PerspectiveCamera(
  40,
  w / h,
  1,
  100
);
camera.position.set(5, 2, 8);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.5, 0);
controls.update();
controls.enablePan = false;
controls.enableDamping = true;

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/examples/js/libs/draco/gltf/");

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);
loader.load(
  "/examples/models/gltf/LittlestTokyo.glb",
  function (gltf) {
    const model = gltf.scene;
    model.position.set(1, 1, 0);
    model.scale.set(0.01, 0.01, 0.01);
    scene.add(model);

    console.log('gltf = ', gltf);

    mixer = new THREE.AnimationMixer(model);
    mixer.clipAction(gltf.animations[0]).play();

    animate();
  },
  undefined,
  function (e) {
    console.error(e);
  }
);

window.onresize = function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
};

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();

  mixer.update(delta);

  controls.update();

  stats.update();

  renderer.render(scene, camera);
}
