export function pointerTrackingExtension({ state, dispatch }, { target }) {
  state.pos = { x: -1, y: -1 };

  function posAtCoords(clientX, clientY) {
    const bounds = target.getBoundingClientRect();

    const x = Math.floor(
      ((clientX - bounds.x) / state.scale) * devicePixelRatio
    );
    const y = Math.floor(
      ((clientY - bounds.y) / state.scale) * devicePixelRatio
    );

    return { x, y };
  }

  target.addEventListener("mousemove", (e) => {
    const { x, y } = posAtCoords(e.clientX, e.clientY);
    if (state.pos.x != x || state.pos.y != y) {
      dispatch({ pos: { x, y } });
    }
  });

  target.addEventListener("mouseleave", (e) => {
    dispatch({ pos: { x: -1, y: -1 } });
  });

  return {
    syncState(newState) {
      state = newState;
    },
  };
}

export function pointerTracker(options = {}) {
  return (editorConfig) => pointerTrackingExtension(editorConfig, options);
}
