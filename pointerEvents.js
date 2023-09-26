function pointerEventsExtension({ state, dispatch }, { tools, target }) {
  target.addEventListener("pointerdown", (e) => {
    let pos = state.pos;
    let tool = tools[state.activeTool];
    if (!tool) return;
    let onMove = tool(pos, state, dispatch);

    if (!onMove) return;

    function move(moveEvent) {
      if (moveEvent.buttons == 0) {
        end();
      } else {
        let newPos = state.pos;
        if (newPos.x == pos.x && newPos.y == pos.y) return;
        onMove(state.pos, state);
        pos = newPos;
      }
    }

    function end() {
      target.removeEventListener("pointermove", move);
      target.removeEventListener("pointerup", end);
      target.removeEventListener("pointerleave", end);
    }

    target.addEventListener("pointermove", move);
    target.addEventListener("pointerup", end);
    target.addEventListener("pointerleave", end);
  });

  return {
    syncState(newState) {
      state = newState;
    },
  };
}

export function pointerEvents(options = {}) {
  return (config) => pointerEventsExtension(config, options);
}
