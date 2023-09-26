import { Bimp } from "./Bimp";

export let state = {
  activeColor: 1,
  activeTool: "brush",

  // INTERACTION FIELDS
  heldKeys: new Set(),
  pos: { x: -1, y: -1 },

  // CANVAS FIELDS
  grid: true,
  scale: 0,

  // BITMAP FIELDS
  width: 30,
  height: 20,
  bitmap: Bimp.empty(30, 20, 0),
  palette: [
    "rgba(0,0,0,0)",
    "rgba(0,0,0,1)",
    "rgba(250,234,214,1)",
    "rgba(222,120,149,1)",
    "rgba(247,80,96,1)",
    "rgba(247,136,95,1)",
    "rgba(242,196,105,1)",
    "rgba(177,211,111,1)",
    "rgba(62,224,207,1)",
    "rgba(0,145,194,1)",
    "rgba(173,109,202,1)",
  ],

  // HISTORY
  lastSnapshot: 0,
  snapshots: [],

  // UI AND PANEL STATE
  paletteEdit: false,
  showSettingsModal: false,
  showDownloadModal: false,
  debug: false,
};

export function updateState(action) {
  if (
    (action.bitmap || action.palette) &&
    state.lastSnapshot < Date.now() - 1000
  ) {
    state = {
      ...state,
      ...action,
      snapshots: [
        {
          bitmap: state.bitmap,
          palette: state.palette,
          width: state.width,
          height: state.height,
        },
        ...state.snapshots,
      ],
      lastSnapshot: Date.now(),
    };
  } else {
    state = { ...state, ...action };
  }
}

export function undo() {
  state = {
    ...state,
    ...state.snapshots[0],
    lastSnapshot: 0,
    snapshots: state.snapshots.slice(1),
  };
}
