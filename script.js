// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 600);
renderer.setPixelRatio(window.devicePixelRatio);

// Append renderer to the container
const container = document.getElementById('container');
container.appendChild(renderer.domElement);

// Add ambient light and directional light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Load the spiked ball PLY file
const loader = new THREE.PLYLoader();
loader.load('./koala_stuffie.ply', function (geometry) {
  const material = new THREE.MeshStandardMaterial({ color: 0xff5733, flatShading: true });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Automatically position the camera to fit the object
  const boundingBox = new THREE.Box3().setFromObject(mesh);
  const size = new THREE.Vector3();
  boundingBox.getSize(size);

  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = camera.fov * (Math.PI / 180); // Convert FOV to radians
  const distance = Math.abs(maxDim / Math.sin(fov / 2));
  camera.position.set(0, 0, distance * 1.5); // Adjust distance multiplier for better view
  camera.lookAt(boundingBox.getCenter(new THREE.Vector3()));
});

// Add orbit controls for rotation
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth movement

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Update orbit controls
  renderer.render(scene, camera);
}
animate();
