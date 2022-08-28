import * as THREE from "three";

// 目标：了解three基本内容

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(
  75, // 视锥体垂直视野角度
  window.innerWidth / window.innerHeight, // 视锥体长宽比
  0.1, // 视锥体近端面
  1000 // 视锥体远端面
); // 透视相机（PerspectiveCamera）

camera.position.set(0, 0, 10); // 设置相机位置
scene.add(camera); // 将相机添加到场景中

// 创建几何体对象
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

// 创建材质
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffff00,
}); // 基础网格材质（MeshBasicMaterial）

// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube); // 将几何体添加到场景中

// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);
// 将webgl渲染的canvas内容添加到body上
document.body.appendChild(renderer.domElement);

// 使用渲染器，通过相机将场景渲染出来
renderer.render(scene, camera);
