**Three.js Basic Setup - Getting Started**

This repository guides you through the fundamental steps of setting up a basic 3D scene using Three.js in JavaScript. It provides a clear and concise explanation of each step, along with code snippets for illustration.

It covers essential concepts like scene creation, camera configuration, rendering, object creation, and scene composition.

**Prerequisites:**

- Basic understanding of JavaScript
- A code editor (e.g., Visual Studio Code)
- A web browser that supports WebGL ([https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API))
- Three.js library (https://threejs.org/)

## Project Setup:

**Steps:**

1. **Create html**

- Create a new HTML file (index.html) and link the Three.js library:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Three.js Basic Setup - Getting Started</title>
  </head>
  <body>
    <script type="module" src="js/three.mjs"></script>
    <script type="module" src="js/script.mjs"></script>
  </body>
</html>
```

## Setup Three js

**Steps:**

1. **Create a Scene:**

   - The scene serves as the container for all objects in your 3D world.
   - Here's how to create a scene:

   ```javascript
   const scene = new THREE.Scene();
   ```

2. **Create a Camera:**

   - The camera determines the perspective from which your scene is viewed.
   - Here's how to create a perspective camera:

   ```javascript
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000
   );
   ```

   - The constructor takes four arguments:
     - `fieldOfView`: The vertical field of view of the camera (in degrees).
     - `aspect`: The aspect ratio of the viewport (width / height).
     - `near`: The distance to the near clipping plane (objects closer are not rendered).
     - `far`: The distance to the far clipping plane (objects farther are not rendered).

3. **Set Camera Position:**

   - Position the camera to frame your scene appropriately.
   - Here's how to set the camera's position:

   ```javascript
   camera.position.z = 5; // Move the camera 5 units back from the origin
   ```

4. **Create a Renderer:**

   - The renderer is responsible for generating the image of your scene based on the camera's view.
   - Here's how to create a WebGL renderer:

   ```javascript
   const renderer = new THREE.WebGLRenderer({ antialias: true });
   ```

   - The `antialias: true` option enables antialiasing for smoother edges.

5. **Set Renderer Size:**

   - Define the size of the canvas on which the rendered scene will be displayed.
   - Here's how to set the renderer's size:

   ```javascript
   renderer.setSize(window.innerWidth, window.innerHeight);
   ```

   - This sets the canvas to the width and height of the browser window.

6. **Add Renderer to DOM:**

   - Append the renderer's canvas element to the document's body so it's visible.
   - Here's how to add the renderer to the DOM:

   ```javascript
   document.body.appendChild(renderer.domElement);
   ```

7. **Create an Object:**

   - You'll typically create geometric shapes and apply materials to represent objects in your scene.

   **a. Create a Geometry:**

   - The geometry defines the shape of your object.
   - Here's an example of creating a cube geometry:

   ```javascript
   const geometry = new THREE.BoxGeometry(1, 1, 1);
   ```

   **b. Create a Material:**

   - The material defines the appearance of your object, including its color, texture, and shading.
   - Here's an example of creating a basic material with a white color:

   ```javascript
   const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White color
   ```

   **c. Combine Geometry & Material:**

   - Create a mesh by combining the geometry and material to form the final 3D object.
   - Here's how to create a mesh:

   ```javascript
   const mesh = new THREE.Mesh(geometry, material);
   ```

8. **Add Object to Scene:**

   - Add the created mesh to your scene to make it visible.
   - Here's how to add the mesh to the scene:

   ```javascript
   scene.add(mesh);
   ```

9. **Connect Scene & Camera to Renderer:**

   - Inform the renderer which scene and camera to use for rendering.
   - Here's how to connect the scene and camera to the renderer:

   ```javascript
   renderer.render(scene, camera);
   ```
