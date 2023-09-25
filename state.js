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
    "#ffffffff",
    "#44AA90FF",
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
};

export function updateState(action) {
  state = { ...state, ...action };
}
