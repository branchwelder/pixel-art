function makeGrid({ state }, { canvas }) {
  let { scale, bitmap, grid } = state;

  let width = null;
  let height = null;

  function sizeCanvas() {
    width = bitmap.width;
    height = bitmap.height;
    const canvasWidth = scale * width;
    const canvasHeight = scale * height;

    const cssWidth = canvasWidth / devicePixelRatio - devicePixelRatio;
    const cssHeight = canvasHeight / devicePixelRatio - devicePixelRatio;

    canvas.width = canvasWidth - 1;
    canvas.height = canvasHeight - 1;

    canvas.style.cssText = `width: ${cssWidth}px; height: ${cssHeight}`;
  }

  function draw() {
    if (!grid) return;
    const ctx = canvas.getContext("2d");
    ctx.resetTransform();

    ctx.translate(-0.5, -0.5);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();

    for (let x = 0; x < bitmap.width; x++) {
      ctx.moveTo(x * scale, 0);
      ctx.lineTo(x * scale, bitmap.height * scale + 1);
    }

    for (let y = 0; y < bitmap.height; y++) {
      ctx.moveTo(0, y * scale);
      ctx.lineTo(bitmap.width * scale + 1, y * scale);
    }

    ctx.stroke();
  }

  sizeCanvas();
  draw();

  return {
    syncState(state) {
      if (
        scale != state.scale ||
        width != state.bitmap.width ||
        height != state.bitmap.height ||
        grid != state.grid
      ) {
        scale = state.scale;
        bitmap = state.bitmap;
        grid = state.grid;
        sizeCanvas();
        draw();
      }
    },
  };
}

export function layerGrid(options = {}) {
  return (config) => makeGrid(config, options);
}
