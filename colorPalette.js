import { html } from "lit-html";
import jscolor from "@eastdesire/jscolor";
import { state } from "./state";
import { Bimp } from "./Bimp";

const styles = html`<style>
  .color-select {
    flex: 0 0 50px;
    height: 50px;
    width: 50px;
    border-radius: 12px;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background: linear-gradient(var(--current), var(--current)),
      var(--transparency);
    transition: 100ms;
  }

  .color-select:hover {
    transform: scale(1.1);
  }

  .color-select.selected {
    outline: 1px solid white;
    border-radius: unset;
  }

  .edit-color-btn {
    border: 0;
    outline: 0;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    height: 100%;
    width: 100%;
  }

  .edit-color-icon {
    position: absolute;
    line-height: 1;
    top: 5px;
    left: 5px;
  }

  .edit-color-icon > i {
    line-height: 0;
    text-shadow: 0px 0px 2px black;
  }

  .delete-color-button {
    position: absolute;
    display: flex;
    padding: 0;
    border: 0;
    outline: 0;
    background-color: transparent;
    color: #343434;
    font-size: x-large;
    line-height: 1;

    bottom: 2px;
    right: 2px;

    cursor: pointer;
  }

  .delete-color-button:hover {
    color: red;
    text-shadow: 0px 0px 3px black;
  }
</style>`;

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
  return html` ${styles}
    <button
      class="icon-btn ${state.editingPalette ? "selected" : ""}"
      @click=${() => dispatch({ editingPalette: !state.editingPalette })}>
      <i class="fa-solid fa-pen"></i>
    </button>
    <button
      class="icon-btn"
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
                  class="delete-color-button"
                  @click=${() => deleteColor(config, index)}>
                  <i class="fa-solid fa-circle-xmark"></i>
                </button>
                <button
                  id="color-${index}"
                  class="edit-color-btn"
                  @click=${(e) => editColor(config, index)}></button>
                <div
                  class="edit-color-icon"
                  @click=${(e) => editColor(config, index)}>
                  <i class="fa-solid fa-pen"></i>
                </div>
              `
            : ""}
        </div>`
    )}`;
}
