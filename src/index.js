'use strict';

// Import Threejs.
import * as THREE from "three"

// Import stats.
import * as Stats from 'stats.js';

// Stats.
var stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

// 初始化一个 Three 场景
const scene = new THREE.Scene()

// 新建一个盒子形状
const geometry = new THREE.BoxGeometry()

// 贴上材质
// const material = new THREE.MeshLambertMaterial({
//       color: 0x454545,
// });
// const material = new THREE.MeshBasicMaterial({
//     color: 0x454545,
//     transparent: true,
//     opacity: 0.5
// });
var material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
});
// var material = new THREE.MeshPhongMaterial({
//   color: 0xff0000,
//   specular:0x444444,//高光部分的颜色
//   shininess:200,//高光部分的亮度，默认30
// });
const cube = new THREE.Mesh(geometry, material)
// 将网格装入场景，默认位置 0 0 0
scene.add(cube)

// 光源
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(200, 300, 400);//点光源放在x轴上
scene.add(pointLight)

// AxesHelper：辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);

// 新建一个摄像机
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)

// 初始化 Three 的渲染器
const renderer = new THREE.WebGLRenderer()

// 设置成屏幕大小，将生成的 canvas 插入到 body 下
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 改变摄像机的位置，离物体远点
camera.position.z = 5

const animate = () => {
    // 浏器器定时回调animate, 否则死循环会卡死
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
}

// 利用 requestAnimationFrame 实现 60 帧触发
animate()

// 屏幕容器改变大小后，从新计算视图
window.addEventListener('resize', () => {
    // 重新设置相机宽高比例
    camera.aspect = window.innerWidth / window.innerHeight
    // 更新相机投影矩阵
    camera.updateProjectionMatrix()
    // 重新设置渲染器渲染范围
    renderer.setSize(window.innerWidth, window.innerHeight)
})

// Draw Scene
function render() {
    stats.update()
    renderer.render(scene, camera);
}

render();