export default async function isLowPerformance() {
  const gl = document.createElement('canvas').getContext('webgl');
  if (!gl) return true;

  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  const gpu = debugInfo
    ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    : 'Unknown GPU';

  const gpuBlacklist = ['Intel HD Graphics', 'Mobile'];
  const isLowGPU = gpuBlacklist.some((name) => gpu.includes(name));

  const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  const maxCombinedTextures = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);

  const lowMemory = navigator.deviceMemory ? navigator.deviceMemory <= 4 : false;

  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /iphone|android|mobile/.test(userAgent);

  console.log({lowMemory, isMobile, isLowGPU, maxTextureSize, maxCombinedTextures})

  if (lowMemory || (!isMobile && (isLowGPU || maxTextureSize < 4096 || maxCombinedTextures < 16))) {
    return true;
  }

  return new Promise((resolve) => {
    const times = [];
    let lastTime = performance.now();

    function checkFrame() {
      const now = performance.now();
      const delta = now - lastTime;
      lastTime = now;
      times.push(delta);

      if (times.length >= 30) {
        const avgFrameTime = times.reduce((a, b) => a + b) / times.length;
        resolve(avgFrameTime > 50);
        return;
      }

      requestAnimationFrame(checkFrame);
    }

    requestAnimationFrame(checkFrame);
  });
}
