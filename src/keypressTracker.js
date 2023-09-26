import { state, undo } from "./state";

const ctrlShortcuts = {
  a: () => console.log("select all?"),
  z: () => undo(),
  s: (dispatch) => dispatch({ showDownloadModal: true }),
};

const hotkeys = {
  // Tool hotkeys
  b: (dispatch) => dispatch({ activeTool: "brush" }),
  f: (dispatch) => dispatch({ activeTool: "flood" }),
  l: (dispatch) => dispatch({ activeTool: "line" }),
  r: (dispatch) => dispatch({ activeTool: "rect" }),
  s: (dispatch) => dispatch({ activeTool: "shift" }),
  i: (dispatch) => dispatch({ activeTool: "eyedropper" }),

  // Misc
  g: (dispatch) => dispatch({ grid: !state.grid }),
};

function colorSwitch(index, dispatch) {
  if (index < state.palette.length) dispatch({ activeColor: index });
}

export function keypressTracker(dispatch) {
  window.addEventListener("keydown", (e) => {
    if (!(state.showSettingsModal || state.showDownloadModal)) {
      if (e.ctrlKey && e.key.toLowerCase() in ctrlShortcuts) {
        e.preventDefault();
        ctrlShortcuts[e.key.toLowerCase()](dispatch);
      } else if (e.key in hotkeys) hotkeys[e.key](dispatch);
      else if (/^[0-9]$/i.test(e.key)) colorSwitch(Number(e.key), dispatch);
    }
    const newHeldKeys = new Set(state.heldKeys);
    newHeldKeys.add(e.key);
    dispatch({ heldKeys: newHeldKeys });
  });

  window.addEventListener("keyup", (e) => {
    const newHeldKeys = new Set(state.heldKeys);
    newHeldKeys.delete(e.key);
    dispatch({ heldKeys: newHeldKeys });
  });
}
