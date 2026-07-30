const TOTAL_FRAMES = 240;
const images = new Array(TOTAL_FRAMES);
const loadedFrames = new Set();

const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d', { alpha: false });
const scrollContainer = document.getElementById('scroll-container');

let currentFrame = 0;
let targetFrame = 0;
let lastRenderedFrame = -1;
let isResizing = false;

// Device pixel ratio management for crisp rendering
let dpr = Math.min(window.devicePixelRatio || 1, 2);

function getFrameUrl(index) {
  const frameNumber = String(index + 1).padStart(3, '0');
  return `/frames/ezgif-frame-${frameNumber}.jpg`;
}

// Preload image helper
function preloadImage(index) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = getFrameUrl(index);
    img.onload = () => {
      images[index] = img;
      loadedFrames.add(index);
      if (index === 0) {
        requestAnimationFrame(() => render());
      }
      resolve(img);
    };
    img.onerror = () => {
      resolve(null);
    };
  });
}

// Load images with priority to initial frames
async function loadAllFrames() {
  // Priority 1: First 15 frames for immediate visual startup
  const initialBatch = [];
  for (let i = 0; i < Math.min(15, TOTAL_FRAMES); i++) {
    initialBatch.push(preloadImage(i));
  }
  await Promise.all(initialBatch);

  // Priority 2: Remaining frames loaded in chunks
  const chunkSize = 20;
  for (let i = 15; i < TOTAL_FRAMES; i += chunkSize) {
    const chunk = [];
    for (let j = i; j < Math.min(i + chunkSize, TOTAL_FRAMES); j++) {
      chunk.push(preloadImage(j));
    }
    await Promise.all(chunk);
  }
}

// Resize canvas to match window viewport while keeping high resolution
function resizeCanvas() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  lastRenderedFrame = -1; // Force redrawing
}

// Proportional Object-Fit Cover Renderer with Scale/Zoom & Opacity
function drawImageCover(img, opacity = 1.0, scaleFactor = 1.0) {
  if (!img || !img.complete || img.naturalWidth === 0) return;

  const canvasW = canvas.width;
  const canvasH = canvas.height;
  const imgW = img.naturalWidth;
  const imgH = img.naturalHeight;

  const imgRatio = imgW / imgH;
  const canvasRatio = canvasW / canvasH;

  let renderW, renderH;

  if (canvasRatio > imgRatio) {
    renderW = canvasW * scaleFactor;
    renderH = (canvasW / imgRatio) * scaleFactor;
  } else {
    renderW = (canvasH * imgRatio) * scaleFactor;
    renderH = canvasH * scaleFactor;
  }

  const offsetX = (canvasW - renderW) / 2;
  const offsetY = (canvasH - renderH) / 2;

  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  ctx.restore();
}

// Get current vertical scroll position reliably across all browsers
function getScrollTop() {
  return window.pageYOffset || window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

// Calculate target frame index from scroll position
function updateScrollTarget() {
  const scrollTop = getScrollTop();
  const docHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  );
  const maxScroll = Math.max(1, docHeight - window.innerHeight);
  const scrollFraction = Math.min(1, Math.max(0, scrollTop / maxScroll));
  targetFrame = scrollFraction * (TOTAL_FRAMES - 1);
}

// Main 60 FPS Render Loop with Lerp & Sub-frame Blending
function render() {
  // Smooth lerp interpolation between current frame and target frame
  const delta = targetFrame - currentFrame;
  currentFrame += delta * 0.14;

  // Clamp currentFrame
  if (currentFrame < 0) currentFrame = 0;
  if (currentFrame > TOTAL_FRAMES - 1) currentFrame = TOTAL_FRAMES - 1;

  const baseIndex = Math.floor(currentFrame);
  const nextIndex = Math.min(TOTAL_FRAMES - 1, baseIndex + 1);
  const blendAlpha = currentFrame - baseIndex;

  // Calculate dynamic subtle parallax scale effect based on velocity
  const velocity = Math.abs(delta);
  const subtleScale = 1.0 + Math.min(0.035, velocity * 0.004);

  // Clear background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const baseImg = images[baseIndex];
  const nextImg = images[nextIndex];

  if (baseImg && baseImg.complete) {
    drawImageCover(baseImg, 1.0, subtleScale);
  } else {
    // Fallback: find nearest loaded frame if current frame is loading
    let fallbackIndex = baseIndex;
    while (fallbackIndex >= 0 && (!images[fallbackIndex] || !images[fallbackIndex].complete)) {
      fallbackIndex--;
    }
    if (fallbackIndex < 0) {
      fallbackIndex = baseIndex;
      while (fallbackIndex < TOTAL_FRAMES && (!images[fallbackIndex] || !images[fallbackIndex].complete)) {
        fallbackIndex++;
      }
    }
    if (images[fallbackIndex] && images[fallbackIndex].complete) {
      drawImageCover(images[fallbackIndex], 1.0, subtleScale);
    }
  }

  // Cross-fade blend with next frame for continuous 60 FPS smoothness
  if (blendAlpha > 0.001 && nextIndex !== baseIndex && nextImg && nextImg.complete) {
    drawImageCover(nextImg, blendAlpha, subtleScale);
  }

  lastRenderedFrame = currentFrame;
  requestAnimationFrame(render);
}

// Event Listeners for reliable scrolling across all input methods
window.addEventListener('scroll', updateScrollTarget, { passive: true });
document.addEventListener('scroll', updateScrollTarget, { passive: true });

// Mouse Wheel Smooth Driver
window.addEventListener('wheel', (e) => {
  // Allow wheel event to scroll naturally or enhance target frame
  requestAnimationFrame(updateScrollTarget);
}, { passive: true });

// Touch Drag Support
let touchStartY = 0;
window.addEventListener('touchstart', (e) => {
  if (e.touches && e.touches.length > 0) {
    touchStartY = e.touches[0].clientY;
  }
}, { passive: true });

window.addEventListener('touchmove', (e) => {
  requestAnimationFrame(updateScrollTarget);
}, { passive: true });

// Keyboard Arrow & Page Scroll Driver
window.addEventListener('keydown', (e) => {
  const keys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '];
  if (keys.includes(e.key)) {
    requestAnimationFrame(() => {
      setTimeout(updateScrollTarget, 20);
    });
  }
});

window.addEventListener('resize', () => {
  if (!isResizing) {
    isResizing = true;
    requestAnimationFrame(() => {
      resizeCanvas();
      updateScrollTarget();
      isResizing = false;
    });
  }
});

// Initialization
resizeCanvas();
updateScrollTarget();
loadAllFrames();
requestAnimationFrame(render);
