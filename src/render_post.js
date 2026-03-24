import { html } from "lit";

export function renderPost(c) {
  return html`
    <ha-card class="card">
      <!-- Background logos -->
      <img class="team-bg" src="${c.logo[1] || "/local/cs2-placeholder.png"}" alt="" />
      <img class="opponent-bg" src="${c.logo[2] || "/local/cs2-placeholder.png"}" alt="" />
      
      ${c.title ? html`<div class="title">${c.title}</div>` : ""}
      <div class="line"></div>
      <div class="post-status-strip">
        <span class="final-pill">${c.finalStatus || c.final || "FINAL"}</span>
      </div>
      <div class="card-content">
        <div class="team">
          <div class="logo-box">
            <img
              class="logo"
              src="${c.logo[1] || ""}"
              alt="${c.name[1]}"
              @error="${(e) => (e.target.style.display = "none")}"
            />
          </div>
          <div class="name">${c.name[1] || "—"}</div>
          <div class="score">${c.score[1] ?? "—"}</div>
        </div>
        <div class="divider">:</div>
        <div class="team">
          <div class="logo-box">
            <img
              class="logo"
              src="${c.logo[2] || ""}"
              alt="${c.name[2]}"
              @error="${(e) => (e.target.style.display = "none")}"
            />
          </div>
          <div class="name">${c.name[2] || "—"}</div>
          <div class="score">${c.score[2] ?? "—"}</div>
        </div>
      </div>
      ${c.scoreKind === "maps"
        ? html`<div class="score-context">${c.mapsLabel}</div>`
        : ""}
      ${c.scoreKind === "none"
        ? html`<div class="score-context">${c.noScoreHint}</div>`
        : ""}
      ${c.venue ? html`<div class="venue">${c.venue}</div>` : ""}
    </ha-card>
  `;
}
