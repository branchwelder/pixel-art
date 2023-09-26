import { Bimp } from "./Bimp";

export let state = {
  activeColor: 1,
  grid: true,
  activeTool: "brush",
  scale: 0,
  width: 30,
  height: 20,
  bitmap: Bimp.empty(30, 20, 0),
  palette: [
    "#00000000",
    "#000000ff",
    "#faead6ff",
    "#de7895ff",
    "#f75060ff",
    "#f7885fff",
    "#f2c469ff",
    "#b1d36fff",
    "#3ee0cfff",
    "#0091c2ff",
    "#ad6dcaff",
  ],
  paletteEdit: false,
  showSettingsModal: false,
  showDownloadModal: false,
  lastSnapshot: 0,
  snapshots: [],
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
