import { html } from "lit";

export function renderMissingConfig() {
  return html``;
}

export function renderMissingObj(entity) {
  return html`
    <ha-card class="card">
      <div class="not-found-msg">Unknown entity: ${entity}</div>
    </ha-card>
  `;
}

export function renderStateUnavailable(entity) {
  return html`
    <ha-card class="card">
      <div class="not-found-msg">Sensor unavailable: ${entity}</div>
    </ha-card>
  `;
}
