precision mediump float;

uniform sampler2D brickTexture;
uniform sampler2D cubeGridTexture;
uniform sampler2D woodenTexture;
uniform float color;
varying vec2 vUv;

void main() {
    vec4 brickTexture = texture2D(brickTexture, vUv);
    vec4 cubeGridTexture = texture2D(cubeGridTexture, vUv);
    vec4 woodenTexture = texture2D(woodenTexture, vUv);

    gl_FragColor = mix(brickTexture, woodenTexture, sin(cubeGridTexture.r + color));
}