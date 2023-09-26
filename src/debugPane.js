import { html } from "lit-html";
import { map } from "lit-html/directives/map.js";

import { state } from "./state";

const styles = html`<style>
  #debug-pane {
    align-self: flex-start;
    display: grid;
    grid-template-columns: auto auto;
    flex-basis: 350px;
    place-content: start end;
    gap: 1px;
    background-color: #1a1919;
    border-radius: 10px;
    color: #dadada;
    outline: 3px solid #1a1919;
    overflow-y: auto;
  }

  #debug-pane > * {
    background-color: #2c2c2c;
    padding: 5px;
  }

  #debug-pane > h3 {
    margin: 0;
  }

  #debug-pane > h4 {
    margin: 0;
    text-align: right;
    white-space: nowrap;
  }

  .chip-container {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .chip {
    font-weight: bold;
    padding: 4px;
    border-radius: 5px;
    background: #5e5e5e;
    paint-order: stroke fill;
    text-shadow: 1px 0 0 black, 0 1px 0 black, -1px 0 0 black, 0 -1px 0 black;
    box-shadow: 0 0 2px black;
  }

  .number-field {
    font-size: large;
    font-weight: bold;
    font-family: monospace;
  }

  .bool-field {
    font-size: large;
    font-weight: bold;
    font-family: monospace;
    background-color: rgba(177, 211, 111, 1);
  }
</style>`;

export function debugPane() {
  return html`${styles}
    <div id="debug-pane">
      <h3>Debug</h3>
      <div></div>
      <h4>Width</h4>
      <span class="number-field">${state.width}</span>
      <h4>Height</h4>
      <span class="number-field">${state.height}</span>
      <h4>Scale</h4>
      <span>
        <span class="number-field">${state.scale}</span> pixels per pixel
      </span>
      <h4>x pos</h4>
      <span class="number-field">${state.pos.x}</span>
      <h4>y pos</h4>
      <span class="number-field">${state.pos.y}</span>
      <h4>Active Tool</h4>
      <span class="text-field">${state.activeTool}</span>
      <h4>Active Color</h4>
      <span class="number-field">${state.activeColor}</span>
      <h4>Device Pixel Ratio</h4>
      <span>
        <span class="number-field">${devicePixelRatio}</span> device pixel(s)
        per CSS pixel
      </span>
      <h4>Color Palette</h4>
      <div class="chip-container">
        ${map(
          state.palette,
          (rgba) =>
            html`<code class="chip" style="background:${rgba};">${rgba}</code>`
        )}
      </div>
      <h4>Snapshot Length</h4>
      <span class="number-field">${state.snapshots.length}</span>
      <h4>Held Keys</h4>
      <div class="chip-container">
        ${state.heldKeys.size > 0
          ? map(state.heldKeys, (key) => html`<span class="chip">${key}</span>`)
          : html`<span class="chip">none</span>`}
      </div>
      <h4>Grid</h4>
      <div class="chip-container">
        <span
          class="chip"
          style="background:${state.grid
            ? "rgb(79 161 50)"
            : "rgb(194 55 68)"};"
          >${state.grid}</span
        >
      </div>
      <h4>Editing Palette</h4>
      <div class="chip-container">
        <span
          class="chip"
          style="background:${state.paletteEdit
            ? "rgb(79 161 50)"
            : "rgb(194 55 68)"};"
          >${state.paletteEdit}</span
        >
      </div>
      <h4>Show Settings</h4>
      <div class="chip-container">
        <span
          class="chip"
          style="background:${state.showSettingsModal
            ? "rgb(79 161 50)"
            : "rgb(194 55 68)"};"
          >${state.showSettingsModal}</span
        >
      </div>
      <h4>Show download</h4>
      <div class="chip-container">
        <span
          class="chip"
          style="background:${state.showDownloadModal
            ? "rgb(79 161 50)"
            : "rgb(194 55 68)"};"
          >${state.showDownloadModal}</span
        >
      </div>
      <h4>Show debug</h4>
      <div class="chip-container">
        <span
          class="chip"
          style="background:${state.debug
            ? "rgb(79 161 50)"
            : "rgb(194 55 68)"};"
          >${state.debug}</span
        >
      </div>
    </div>`;
}
