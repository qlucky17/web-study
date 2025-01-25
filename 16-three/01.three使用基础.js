import * as THREE from "three";
// console.log(THREE);

const w = 600 || window.innerWidth,
  h = 600 || window.innerHeight;

// 1. 创建场景、相机、渲染器
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);
camera.position.set(0, 0, 8); //调整相机的位置;
// camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.setClearColor("#000");
document.querySelector("#app").appendChild(renderer.domElement);

// 2. 创建物体(可以理解：物体由几何形状+材质组合而成)
const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({color: 0x00ff00 }); //MeshBasicMaterial材质不会受到灯光的影响
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// 物体变换：transform ---- position, rotation, scale

// 3. 将物体添加到场景中
scene.add(cube);

// 4. 添加灯光
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

// 5. 渲染
const render = function () {
  renderer.render(scene, camera);
};
render();

// 6. 动画
// const tick = function () {
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   render();
//   requestAnimationFrame(tick);
// };
// tick();

// 动画：解决不同频率的问题，60hz: 60 * 0.01 = 0.6， 120hz: 120 * 0.01 = 1.2
// let time = Date.now();
// const tick = function () {
//   let curTime = Date.now();
//   let deltaTime = curTime - time;
//   time = curTime;
//   cube.rotation.x += deltaTime * 0.001;
//   cube.rotation.y += deltaTime * 0.001;
//   render();
//   requestAnimationFrame(tick);
// };
// tick();

// 动画：使用THREE提供的Clock对象(three做过优化的)
const clock = new THREE.Clock();
const tick = function () {
  const time = clock.getElapsedTime();
  cube.position.x = Math.sin(time * 2) * 2;
  cube.position.y = Math.cos(time * 2) * 2;
  render();
  requestAnimationFrame(tick);
};
tick();
