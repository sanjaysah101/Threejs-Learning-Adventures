attribute vec3 position; // Attribute to hold vertex position
uniform mat4 projectionMatrix; // Uniform for projection matrix
uniform mat4 modelViewMatrix; // Uniform for model-view matrix

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}