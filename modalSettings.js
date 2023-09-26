import { html } from "lit-html";
import { when } from "lit-html/directives/when.js";
import { state } from "./state";

const styles = html`<style>
  #settings {
    position: relative;
  }

  #settings-modal {
    position: absolute;
    right: 0;
    background-color: #333333;
    z-index: 1000;
    border-radius: 5px;
    padding: 7px;
    display: grid;
    grid-template-columns: auto auto;
    box-shadow: 0 0 10px 0 black;
    gap: 7px;
    align-items: center;
  }

  #settings-modal > label {
    text-align: right;
  }

  #close-settings {
    place-self: center end;
    background-color: transparent;
    font-size: large;
  }

  #settings-btn i {
    transition: 200ms;
  }

  #settings-btn:active i {
    transition: 0ms;
    transform: rotate(-60deg);
  }

  #size-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
  }

  .spinner {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .size-input {
    background: none;
    border: none;
    align-self: center;
    width: 30px;
    color: #9e9e9e;
    border-radius: 4px;
    background-color: #252525;
    font-size: 1rem;
    text-align: center;
    height: 1.5rem;
  }

  .size-input:focus {
    background: none;
    border: none;
    align-self: center;
    width: 30px;
    color: #9e9e9e;
    border-radius: 4px;
    background-color: #252525;
    font-size: 1rem;
    text-align: center;
    height: 1.5rem;
  }

  .spinner > button {
    border: 0;
    outline: 0;
    line-height: 1;
    padding: 0;
    background-color: #252525;
    box-shadow: 0 0 2px 0 black;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aeaeae;
    font-size: small;
    cursor: pointer;
  }

  .spinner > button > i {
    line-height: 0;
  }

  .spinner > button:hover {
    background-color: #676767;
    box-shadow: 0 0 1px 0 black;
  }
</style>`;

function widthSpinner({ dispatch }) {
  let { bitmap } = state;
  return html`<label>Width</label>
    <div class="spinner">
      <button
        @click=${() =>
          dispatch({
            width: bitmap.width - 1,
            bitmap: bitmap.resize(bitmap.width - 1, bitmap.height),
          })}>
        <i class="fa-solid fa-minus"></i>
      </button>

      <input
        type="text"
        .value=${bitmap.width}
        class="size-input"
        @change=${(e) =>
          dispatch({
            width: Number(e.target.value),
            bitmap: bitmap.resize(Number(e.target.value), bitmap.height),
          })} />
      <button
        @click=${() =>
          dispatch({
            width: bitmap.width + 1,
            bitmap: bitmap.resize(bitmap.width + 1, bitmap.height),
          })}>
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>`;
}

function heightSpinner({ dispatch }) {
  let { bitmap } = state;

  return html`<label>Height</label>
    <div class="spinner">
      <button
        @click=${() =>
          dispatch({
            height: bitmap.height - 1,
            bitmap: bitmap.resize(bitmap.width, bitmap.height - 1),
          })}>
        <i class="fa-solid fa-minus"></i>
      </button>
      <input
        type="text"
        .value=${bitmap.height}
        class="size-input"
        @change=${(e) =>
          dispatch({
            height: Number(e.target.value),
            bitmap: bitmap.resize(bitmap.width, Number(e.target.value)),
          })} />
      <button
        @click=${() =>
          dispatch({
            height: bitmap.height + 1,
            bitmap: bitmap.resize(bitmap.width, bitmap.height + 1),
          })}>
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>`;
}

function settingsContent({ dispatch }) {
  return html`<div id="settings-modal">
    <span style="font-weight: 800;">Settings</span><span></span>
    ${widthSpinner({ dispatch })} ${heightSpinner({ dispatch })}
    <label for="toggle-grid">Grid</label>
    <input
      id="toggle-grid"
      type="checkbox"
      ?checked=${state.grid}
      @change=${(e) => dispatch({ grid: e.target.checked })} />
  </div>`;
}

export function modalSettings({ dispatch }) {
  return html`${styles}
    <div id="settings">
      <button
        id="settings-btn"
        class="taskbar-btn"
        @click=${() =>
          dispatch({ showSettingsModal: !state.showSettingsModal })}>
        <i class="fa-solid fa-gear"></i>
      </button>
      ${when(state.showSettingsModal, () => settingsContent({ dispatch }))}
    </div>`;
}
