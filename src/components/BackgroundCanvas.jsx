import React, { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 240;

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    const images = new Array(TOTAL_FRAMES);

    let currentFrame = 0;
    let targetFrame = 0;
    let animFrameId = null;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function getFrameUrl(index) {
      const frameNumber = String(index + 1).padStart(3, '0');
      return `/frames/ezgif-frame-${frameNumber}.jpg`;
    }

    function preloadImage(index) {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(index);
        img.onload = () => {
          images[index] = img;
          if (index === 0) {
            render();
          }
          resolve(img);
        };
        img.onerror = () => resolve(null);
      });
    }

    async function loadAllFrames() {
      // Priority 1: First 15 frames for immediate visual render
      const initialBatch = [];
      for (let i = 0; i < Math.min(15, TOTAL_FRAMES); i++) {
        initialBatch.push(preloadImage(i));
      }
      await Promise.all(initialBatch);

      // Priority 2: Load remaining frames in small non-blocking chunks
      const chunkSize = 20;
      for (let i = 15; i < TOTAL_FRAMES; i += chunkSize) {
        const chunk = [];
        for (let j = i; j < Math.min(i + chunkSize, TOTAL_FRAMES); j++) {
          chunk.push(preloadImage(j));
        }
        await Promise.all(chunk);
      }
    }

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
    }

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

    function getScrollTop() {
      return window.pageYOffset || window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

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

    function render() {
      const delta = targetFrame - currentFrame;
      currentFrame += delta * 0.14;

      if (currentFrame < 0) currentFrame = 0;
      if (currentFrame > TOTAL_FRAMES - 1) currentFrame = TOTAL_FRAMES - 1;

      const baseIndex = Math.floor(currentFrame);
      const nextIndex = Math.min(TOTAL_FRAMES - 1, baseIndex + 1);
      const blendAlpha = currentFrame - baseIndex;

      const velocity = Math.abs(delta);
      const subtleScale = 1.0 + Math.min(0.035, velocity * 0.004);

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const baseImg = images[baseIndex];
      const nextImg = images[nextIndex];

      if (baseImg && baseImg.complete) {
        drawImageCover(baseImg, 1.0, subtleScale);
      } else {
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

      if (blendAlpha > 0.001 && nextIndex !== baseIndex && nextImg && nextImg.complete) {
        drawImageCover(nextImg, blendAlpha, subtleScale);
      }

      animFrameId = requestAnimationFrame(render);
    }

    const onScroll = () => updateScrollTarget();
    const onWheel = () => requestAnimationFrame(updateScrollTarget);
    const onTouchMove = () => requestAnimationFrame(updateScrollTarget);
    const onResize = () => {
      resizeCanvas();
      updateScrollTarget();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('resize', onResize);

    resizeCanvas();
    updateScrollTarget();
    loadAllFrames();
    animFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <div id="scroll-container" />
      <div id="canvas-container">
        <canvas id="hero-canvas" ref={canvasRef} />
      </div>
    </>
  );
}
