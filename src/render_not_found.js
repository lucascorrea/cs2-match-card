import { html } from "lit";

export function renderNotFound(c) {
  return html`
    <ha-card class="card">
      ${c.title ? html`<div class="title">${c.title}</div>` : ""}
      <div class="line"></div>
      <div class="not-found-msg">
        ${c.notFoundMsg}
      </div>
    </ha-card>
  `;
}
