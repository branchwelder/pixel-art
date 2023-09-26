import { html } from "lit-html";
import { when } from "lit-html/directives/when.js";
import { state } from "./state";

const downloaders = {
  BMP() {
    download(document.getElementById("art").toDataURL("image/bmp"), "art.bmp");
  },
  JPG() {
    download(document.getElementById("art").toDataURL("image/jpg"), "art.jpg");
  },
  PNG() {
    download(document.getElementById("art").toDataURL("image/png"), "art.png");
  },
  ICO() {
    download(
      document.getElementById("art").toDataURL("image/x-icon"),
      "art.ico"
    );
  },
};

function downloadContent() {
  return html`<div id="download-modal">
    <span style="font-weight: 800;">Download</span>
    <div id="download-buttons">
      ${Object.entries(downloaders).map(
        ([key, val]) =>
          html`<button class="download-btn" @click=${val}>${key}</button>`
      )}
    </div>
  </div>`;
}

function download(dataURL, fname) {
  const downloadAnchorNode = document.createElement("a");

  downloadAnchorNode.setAttribute("href", dataURL);
  downloadAnchorNode.setAttribute("download", fname);
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

export function modalDownload({ dispatch }) {
  return html`<style>
      #download {
        position: relative;
      }

      #download-modal {
        position: absolute;
        right: 0;
        background-color: #333333;
        z-index: 1000;
        border-radius: 5px;
        padding: 7px;
        box-shadow: 0 0 10px 0 black;
      }

      #download-buttons {
        display: flex;
        margin-top: 7px;
        gap: 4px;
      }

      .download-btn {
        font-family: "National Park";
        font-weight: 800;
        background-color: #202020;
        height: 30px;
        padding: 7px;
        border-radius: 5px;
      }

      .download-btn:hover {
        background-color: #585858;
        color: #e0e0e0;
        box-shadow: 0 0 3px 0 black;
      }
    </style>
    <div id="download">
      <button
        id="download-btn"
        class="taskbar-btn"
        @click=${() =>
          dispatch({ showDownloadModal: !state.showDownloadModal })}>
        <i class="fa-solid fa-download"></i>
      </button>
      ${when(state.showDownloadModal, () => downloadContent({ dispatch }))}
    </div>`;
}
