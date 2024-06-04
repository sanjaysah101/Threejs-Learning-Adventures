attribute vec3 position; // Attribute to hold vertex position
attribute vec2 uv;
uniform mat4 projectionMatrix; // Uniform for projection matrix
uniform mat4 modelViewMatrix; // Uniform for model-view matrix

varying vec2 vUv; // Varying to pass texture coordinates to fragment shader

void main() {
    vUv = uv; // Pass texture coordinates to fragment shader
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}