export function touchTrackingExtension({ state, dispatch }, { target }) {
  state.pos = { x: -1, y: -1 };

  function posAtCoords(event) {
    const bounds = target.getBoundingClientRect();

    const x = Math.floor(
      ((event.clientX - bounds.x) / state.scale) * devicePixelRatio
    );
    const y = Math.floor(
      ((event.clientY - bounds.y) / state.scale) * devicePixelRatio
    );
    return { x, y };
  }

  target.addEventListener("touchstart", (e) => {
    const { x, y } = posAtCoords(e.touches[0]);
    if (state.pos.x != x || state.pos.y != y) {
      dispatch({ pos: { x, y } });
    }
  });

  target.addEventListener("touchmove", (e) => {
    const { x, y } = posAtCoords(e.touches[0]);
    if (state.pos.x != x || state.pos.y != y) {
      dispatch({ pos: { x, y } });
    }
  });

  target.addEventListener("touchend", (e) => {
    dispatch({ pos: { x: -1, y: -1 } });
  });

  target.addEventListener("touchcancel", (e) => {
    dispatch({ pos: { x: -1, y: -1 } });
  });

  return {
    syncState(newState) {
      state = newState;
    },
  };
}

export function touchTracker(options = {}) {
  return (editorConfig) => touchTrackingExtension(editorConfig, options);
}
