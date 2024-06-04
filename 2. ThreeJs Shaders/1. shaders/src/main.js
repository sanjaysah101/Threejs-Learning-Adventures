import {
  BoxGeometry,
  Mesh,
  PerspectiveCamera,
  PlaneGeometry,
  RawShaderMaterial,
  Scene,
  WebGLRenderer,
} from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
  uniforms: {
    color: { type: 'f', value: 0 },
  },
});

const mesh = new Mesh(geometry, shaderMaterial);

new OrbitControls(camera, renderer.domElement);

scene.add(mesh);

const animate = () => {
  shaderMaterial.uniforms.color.value += 0.1;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
