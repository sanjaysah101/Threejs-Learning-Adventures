import {
  Mesh,
  PerspectiveCamera,
  PlaneGeometry,
  RawShaderMaterial,
  Scene,
  WebGLRenderer,
} from 'three';

import vertexShaderSource from './vertexShaderSource.vert';
import fragmentShaderSource from './fragmentShaderSource.frag';

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new PlaneGeometry(1, 1, 1, 1);

const shaderMaterial = new RawShaderMaterial({
  fragmentShader: fragmentShaderSource,
  vertexShader: vertexShaderSource,
});

const mesh = new Mesh(geometry, shaderMaterial);

scene.add(mesh);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
