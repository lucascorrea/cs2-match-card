import { html } from "lit";

export function renderIn(c) {
  return html`
    <ha-card class="card">
      ${c.title ? html`<div class="title">${c.title}</div>` : ""}
      <div class="line"></div>
      <div class="live-badge">${c.live}</div>
      <div class="card-content">
        <div class="team">
          <img
            class="logo"
            src="${c.logo[1] || ""}"
            alt="${c.name[1]}"
            @error="${(e) => (e.target.style.display = "none")}"
          />
          <div class="name">${c.name[1] || "—"}</div>
          <div class="score">${c.score[1] ?? "—"}</div>
        </div>
        <div class="divider">:</div>
        <div class="team">
          <img
            class="logo"
            src="${c.logo[2] || ""}"
            alt="${c.name[2]}"
            @error="${(e) => (e.target.style.display = "none")}"
          />
          <div class="name">${c.name[2] || "—"}</div>
          <div class="score">${c.score[2] ?? "—"}</div>
        </div>
      </div>
      ${c.venue ? html`<div class="venue">${c.venue}</div>` : ""}
    </ha-card>
  `;
}
