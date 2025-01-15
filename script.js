// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);
renderer.setPixelRatio(window.devicePixelRatio);

// Append renderer to the container
const container = document.getElementById('container');
container.appendChild(renderer.domElement);

// Load PLY file
const loader = new THREE.PLYLoader();
loader.load('./test.ply', function (geometry) {
  const material = new THREE.PointsMaterial({ size: 0.05, vertexColors: false });
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // Automatically position the camera to fit the object
  const boundingBox = new THREE.Box3().setFromObject(points);
  const size = new THREE.Vector3();
  boundingBox.getSize(size);

  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = camera.fov * (Math.PI / 180); // Convert FOV to radians
  const distance = Math.abs(maxDim / Math.sin(fov / 2));
  camera.position.set(0, 0, distance);
  camera.lookAt(boundingBox.getCenter(new THREE.Vector3()));
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
