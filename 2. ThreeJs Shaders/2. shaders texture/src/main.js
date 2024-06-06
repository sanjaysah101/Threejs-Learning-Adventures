import {
  AxesHelper,
  Mesh,
  PerspectiveCamera,
  PlaneGeometry,
  RawShaderMaterial,
  Scene,
  TextureLoader,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import vertexShader from './vertexShader.vert';
import fragmentShader from './fragmentShader.frag';

import brickTexture from '/brickTexture.jpg';
import cubeGridTexture from '/cubeGridTexture.jpg';
import woodenTexture from '/woodenTexture.jpg';

const scene = new Scene();
const axesHelper = new AxesHelper(5);

const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

scene.add(axesHelper);

camera.position.set(5, 5, 5);

const renderer = new WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const sheet = new PlaneGeometry(2, 2);

const sheetMaterial = new RawShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    color: { type: 'f', value: 0.0 },
    brickTexture: {
      value: new TextureLoader().load(brickTexture),
      type: 't',
    },
    cubeGridTexture: {
      value: new TextureLoader().load(cubeGridTexture),
      type: 't',
    },
    woodenTexture: {
      value: new TextureLoader().load(woodenTexture),
      type: 't',
    },
  },
});

const sheetMesh = new Mesh(sheet, sheetMaterial);

new OrbitControls(camera, renderer.domElement);

scene.add(sheetMesh);

const animate = () => {
  requestAnimationFrame(animate);

  sheetMaterial.uniforms.color.value += 0.01;
  renderer.render(scene, camera);
};

animate();
