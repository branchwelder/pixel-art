function touchEventsExtension({ state, dispatch }, { tools, target }) {
  target.addEventListener("touchstart", (e) => {
    let pos = state.pos;
    let tool = tools[state.activeTool];

    let onMove = tool(pos, state, dispatch);
    e.preventDefault();

    if (!onMove) return;

    let end = () => {
      target.removeEventListener("touchmove", move);
      target.removeEventListener("touchcancel", end);
      target.removeEventListener("touchend", end);
    };
    let move = () => {
      let newPos = state.pos;
      if (newPos.x == pos.x && newPos.y == pos.y) return;
      onMove(state.pos, state);
      pos = newPos;
    };
    target.addEventListener("touchmove", move);
    target.addEventListener("touchcancel", end);
    target.addEventListener("touchend", end);
  });

  return {
    syncState(newState) {
      state = newState;
    },
  };
}

export function touchEvents(options = {}) {
  return (config) => touchEventsExtension(config, options);
}
