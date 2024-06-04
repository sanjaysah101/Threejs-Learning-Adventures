precision mediump float;
uniform float color;

void main() {
    vec4 pixel = gl_FragCoord;
    // Set the color of the pixel to white (1, 1, 1) with full opacity (1)
    gl_FragColor = vec4(sin(pixel.x * 0.01 + color), sin(pixel.y * 0.01 + color), 
    0.0, 
    1.0);
}