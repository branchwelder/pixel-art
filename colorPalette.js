import { html } from "lit-html";
import jscolor from "@eastdesire/jscolor";
import { state } from "./state";
import { Bimp } from "./Bimp";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function deleteColor({ dispatch }, index) {
  if (state.palette.length == 1) {
    alert("you need some color in your life");
    return;
  }
  const newPalette = state.palette.filter((color, i) => i != index);
  const newBitmap = state.bitmap.pixels.map((bit) => {
    if (bit == index) return 0;
    if (bit > index) return bit - 1;
    return bit;
  });

  dispatch({
    palette: newPalette,
    bitmap: new Bimp(state.width, state.height, newBitmap),
  });
}

function editColor({ dispatch }, index) {
  const target = document.getElementById(`color-${index}`);
  if (!target.jscolor) {
    const picker = new jscolor(target, {
      preset: "dark large",
      format: "hexa",
      value: state.palette[index],
      onInput: () => {
        const newPalette = [...state.palette];
        newPalette[index] = picker.toRGBAString();
        dispatch({
          palette: newPalette,
          bitmap: new Bimp(state.width, state.height, state.bitmap.pixels),
        });
      },
      previewElement: null,
    });
  }
  target.jscolor.show();
}

export function colorPalette(config) {
  let { dispatch } = config;
  return html`<button
      class="square-icon-button ${state.editingPalette ? "selected" : ""}"
      @click=${() => dispatch({ editingPalette: !state.editingPalette })}>
      <i class="fa-solid fa-pen"></i>
    </button>
    <button
      class="square-icon-button"
      @click=${() => {
        let newPalette = [...state.palette];
        newPalette.push(getRandomColor());
        dispatch({ palette: newPalette });
      }}>
      <i class="fa-solid fa-plus"></i>
    </button>
    ${state.palette.map(
      (hexa, index) =>
        html`<div
          style="--current: ${hexa};"
          class="color-select ${index == state.activeColor ? "selected" : ""}"
          @click=${() => dispatch({ activeColor: index })}>
          ${state.editingPalette && index > 0
            ? html`
                <button
                  class="delete"
                  @click=${() => deleteColor(config, index)}>
                  <i class="fa-solid fa-fw fa-circle-xmark"></i>
                </button>
                <button
                  id="color-${index}"
                  class="edit-color"
                  @click=${(e) => editColor(config, index)}></button>
                <div class="editicon" @click=${(e) => editColor(config, index)}>
                  <i class="fa-solid fa-pen"></i>
                </div>
              `
            : ""}
        </div>`
    )}`;
}
