import {
  BoxGeometry,
  Clock,
  GridHelper,
  Line,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
// import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 7;
camera.position.y = 5;

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const gridHelper = new GridHelper(100, 100, 0xff0000, 0x00ff00);

scene.add(gridHelper);

const box = new BoxGeometry();
const boxMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
const boxMesh = new Mesh(box, boxMaterial);
scene.add(boxMesh);

new OrbitControls(camera, renderer.domElement);

const clock = new Clock();
const controls = new FirstPersonControls(boxMesh, boxMesh);
controls.movementSpeed = 10;
controls.lookSpeed = 0.1;
controls.mouseDragOn = false;

function animate() {
  controls.update(clock.getDelta());
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
