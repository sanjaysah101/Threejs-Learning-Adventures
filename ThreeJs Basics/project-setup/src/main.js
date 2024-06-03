import {
  AmbientLight,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from 'three';

const ambientLight = new AmbientLight(0xffffff, 0.01);
const pointLight = new PointLight(0xffffff, 50, 100);

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
const earthMaterial = new MeshStandardMaterial({ color: 0x00ff00 });
const box = new Mesh(earthGeometry, earthMaterial);

const moonGeometry = new SphereGeometry();
const moonMaterial = new MeshBasicMaterial({ color: 0xffffff });
const torch = new Mesh(moonGeometry, moonMaterial);

scene.add(box);
scene.add(torch);

let angle = 0;
box.scale.set(3, 3, 3);

const degToRad = (deg) => (deg * Math.PI) / 180;

const animate = () => {
  requestAnimationFrame(animate);

  angle += degToRad(1);

  const sin = 10 * Math.sin(angle);
  const cos = 10 * Math.cos(angle);

  torch.position.set(cos, 0, sin);
  pointLight.position.set(cos, 0, sin);

  renderer.render(scene, camera);
};

animate();
