import { html } from "lit";

export function renderPre(c) {
  return html`
    <ha-card class="card">
      <!-- Background logos -->
      <img class="team-bg" src="${c.logo[1] || "/local/cs2-placeholder.png"}" alt="" />
      <img class="opponent-bg" src="${c.logo[2] || "/local/cs2-placeholder.png"}" alt="" />
      
      ${c.title ? html`<div class="title">${c.title}</div>` : ""}
      <div class="line"></div>
      ${c.venue ? html`<div class="venue">${c.venue}</div>` : ""}
      <div class="card-content">
        <div class="team">
          <div class="logo-box">
            <img
              class="logo"
              src="${c.logo[1] || "/local/cs2-placeholder.png"}"
              alt="${c.name[1]}"
              @error="${(e) => (e.target.style.display = "none")}"
            />
          </div>
          <div class="name">${c.name[1] || "—"}</div>
        </div>
        <div class="divider">${c.vs}</div>
        <div class="team">
          <div class="logo-box">
            <img
              class="logo"
              src="${c.logo[2] || "/local/cs2-placeholder.png"}"
              alt="${c.name[2]}"
              @error="${(e) => (e.target.style.display = "none")}"
            />
          </div>
          <div class="name">${c.name[2] || "—"}</div>
        </div>
      </div>
      ${(c.gameWeekday || c.gameDate || c.gameTime) ? html`
        <div class="date-time">
          ${[c.gameWeekday, c.gameDate, c.gameTime].filter(Boolean).join(' • ')}
        </div>
      ` : ""}
    </ha-card>
  `;
}
