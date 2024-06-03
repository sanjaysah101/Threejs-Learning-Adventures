import {
  BufferAttribute,
  BufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const pointLight = new PointLight(0xffffff, 50, 100);

const scene = new Scene();
scene.add(pointLight);

scene.background = new Color(0x323232);
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 20;

const renderer = new WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('app').appendChild(renderer.domElement);

const bufferGeometry = new BufferGeometry();
const vertices = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]);

const colors = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0]);

const normals = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

const indices = new Uint16Array([0, 1, 2, 0, 2, 3]);

bufferGeometry.setAttribute('position', new BufferAttribute(vertices, 3));
bufferGeometry.setAttribute('color', new BufferAttribute(colors, 3));
bufferGeometry.setAttribute('normal', new BufferAttribute(normals, 3));
bufferGeometry.setIndex(new BufferAttribute(indices, 1));

const material = new MeshStandardMaterial({ vertexColors: true });
const mesh = new Mesh(bufferGeometry, material);
scene.add(mesh);

const moonGeometry = new SphereGeometry();
const moonMaterial = new MeshBasicMaterial({ color: 0xffff00 });
const torch = new Mesh(moonGeometry, moonMaterial);
scene.add(torch);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

let angle = 0;
mesh.scale.set(3, 3, 3);

const degToRad = (deg) => (deg * Math.PI) / 180;

function animate() {
  requestAnimationFrame(animate);

  angle += degToRad(0.5);
  const sin = 10 * Math.sin(angle);
  const cos = 10 * Math.cos(angle);

  torch.position.set(cos, 0, sin);
  pointLight.position.set(cos, 0, sin);

  renderer.render(scene, camera);
}

animate();
