// import { Viewer, WebXRMode, RenderMode, SceneRevealMode, LogLevel } from './GaussianSplats3D/build/gaussian-splats-3d.module.min.js';
// import * as THREE from './node_modules/three/build/three.module.js';

import * as GaussianSplats3D from './GaussianSplats3D/build/gaussian-splats-3d.module.min.js';

// // Get the container element
const container = document.getElementById('container');

const viewer = new GaussianSplats3D.Viewer({
    'cameraUp': [0, -1, -0.6],
    'initialCameraPosition': [-1, -4, 6],
    'initialCameraLookAt': [0, 4, 0]
});
viewer.addSplatScene('./koala.ksplat', {
    'splatAlphaRemovalThreshold': 5,
    'showLoadingUI': true,
    'position': [0, 1, 0],
    'rotation': [0, 0, 0, 1],
    'scale': [1.5, 1.5, 1.5]
})
.then(() => {
    viewer.start();
});

// container.appendChild(viewer);


// const renderWidth = 800;
// const renderHeight = 600;

// // Get the container element
// const container = document.getElementById('container');

// // Create Three.js renderer
// const renderer = new THREE.WebGLRenderer({
//   antialias: false
// });
// renderer.setSize(renderWidth, renderHeight);
// container.appendChild(renderer.domElement); // Attach canvas to the content-area

// // Set up the camera
// const camera = new THREE.PerspectiveCamera(65, renderWidth / renderHeight, 0.1, 500);
// camera.position.set(-1, -4, 6);
// camera.up.set(0, -1, -0.6).normalize();
// camera.lookAt(0, 4, 0);

// // Initialize the Gaussian Splats Viewer
// const viewer = new Viewer({
//   renderer,
//   camera,
//   selfDrivenMode: false,
//   useBuiltInControls: false,
//   ignoreDevicePixelRatio: false,
//   gpuAcceleratedSort: true,
//   enableSIMDInSort: true,
//   sharedMemoryForWorkers: true,
//   integerBasedSort: true,
//   halfPrecisionCovariancesOnGPU: true,
//   dynamicScene: false,
//   webXRMode: WebXRMode.None,
//   renderMode: RenderMode.OnChange,
//   sceneRevealMode: SceneRevealMode.Instant,
//   antialiased: false,
//   focalAdjustment: 1.0,
//   logLevel: LogLevel.None,
//   sphericalHarmonicsDegree: 0,
//   enableOptionalEffects: false,
//   inMemoryCompressionLevel: 2,
//   freeIntermediateSplatData: false
// });

// // Load the Gaussian Splat model
// viewer
//   .addSplatScene('./koala.ksplat') // Replace with your actual file path
//   .then(() => {
//     console.log('Model loaded successfully');
//     requestAnimationFrame(update);
//   })
//   .catch((error) => {
//     console.error('Error loading Gaussian splat model:', error);
//   });

// // Animation loop
// function update() {
//   viewer.render(); // Render the scene
//   requestAnimationFrame(update);
// }
