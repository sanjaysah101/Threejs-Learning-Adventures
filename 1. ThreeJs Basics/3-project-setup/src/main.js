import {
  AmbientLight,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  TextureLoader,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ambientLight = new AmbientLight(0xffffff, 0.05);
const pointLight = new PointLight(0xffffff, 50, 100);

const earthTexture = new TextureLoader().load('/earth_day.jpg');
const moonTexture = new TextureLoader().load('/moon.jpg');

const scene = new Scene();

scene.add(pointLight);
scene.add(ambientLight);

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

const earthGeometry = new SphereGeometry();
const earthMaterial = new MeshStandardMaterial({
  map: earthTexture,
});
const earth = new Mesh(earthGeometry, earthMaterial);

const moonGeometry = new SphereGeometry();
const moonMaterial = new MeshBasicMaterial({
  map: moonTexture,
});
const moon = new Mesh(moonGeometry, moonMaterial);

scene.add(earth);
scene.add(moon);

const controls = new OrbitControls(camera, renderer.domElement);

let angle = 0;
earth.scale.set(3, 3, 3);

const degToRad = (deg) => (deg * Math.PI) / 180;

controls.update();
const animate = () => {
  requestAnimationFrame(animate);

  angle += degToRad(0.5);

  const sin = 10 * Math.sin(angle);
  const cos = 10 * Math.cos(angle);

  earth.rotation.y += 0.001;
  moon.position.set(cos, 0, sin);
  pointLight.position.set(cos, 0, sin);

  renderer.render(scene, camera);
};

animate();
