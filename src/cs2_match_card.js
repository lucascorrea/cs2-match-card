import { LitElement, css } from "lit";
import { VERSION } from "./const.js";
import { renderPre } from "./render_pre.js";
import { renderIn } from "./render_in.js";
import { renderPost } from "./render_post.js";
import { renderNotFound } from "./render_not_found.js";
import {
  renderMissingConfig,
  renderMissingObj,
  renderStateUnavailable,
} from "./render_error.js";
import { cardStyles } from "./styles.js";
import { localize, formatGameDate } from "./localize.js";

function _usableScore(v) {
  if (v === null || v === undefined) return false;
  if (typeof v === "string") {
    const s = v.trim().toLowerCase();
    if (s === "" || s === "unknown" || s === "unavailable" || s === "none")
      return false;
  }
  return true;
}

function _toDisplayNumber(v) {
  if (!_usableScore(v)) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function _apiMatchStatus(stateObj) {
  const a = stateObj?.attributes ?? {};
  return String(a.match_status ?? a.status ?? "")
    .toLowerCase()
    .trim();
}

/** BO3: alguém com ≥2 mapas; BO5: ≥3 (fallback se state/status não marcarem fim). */
function _seriesDecidedByMapWins(attrs) {
  const w1 = Number(attrs?.team1Win);
  const w2 = Number(attrs?.team2Win);
  if (!Number.isFinite(w1) || !Number.isFinite(w2)) return false;
  if (w1 >= 3 || w2 >= 3) return true;
  if (w1 >= 2 || w2 >= 2) return true;
  return false;
}

function _isFinishedMatchView(stateObj) {
  if (!stateObj || stateObj.state === "NOT_FOUND") return false;
  if (stateObj.state === "POST") return true;
  const st = _apiMatchStatus(stateObj);
  if (
    st === "end" ||
    st === "over" ||
    st === "finished" ||
    st === "ended"
  ) {
    return true;
  }
  return _seriesDecidedByMapWins(stateObj.attributes || {});
}

export class CS2MatchCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  static get styles() {
    return css`
      ${cardStyles}
    `;
  }

  setConfig(config) {
    this._config = config;
  }

  getCardSize() {
    const stateObj = this.hass?.states?.[this._config?.entity];
    if (!stateObj) return 4;
    if (_isFinishedMatchView(stateObj)) return 6;
    switch (stateObj.state) {
      case "PRE":
        return 6;
      case "IN":
        return 7;
      case "POST":
        return 6;
      case "NOT_FOUND":
        return 4;
      default:
        return 4;
    }
  }

  _buildCardData(stateObj) {
    const attrs = stateObj?.attributes || {};
    const c = {
      logo: {},
      name: {},
      score: {},
      title: this._config.card_title || "",
      date: attrs.date || null,
      venue: attrs.venue || null,
      gameTime: null,
      notFoundMsg: attrs.api_message || this._getNoMatchMessage(attrs),
      vs: localize("vs", this.hass),
      live: localize("live", this.hass),
      final: localize("final", this.hass),
      finalStatus: localize("final_status", this.hass),
    };
    c.logo[1] = attrs.team_logo;
    c.logo[2] = attrs.opponent_logo;
    c.name[1] = attrs.team_name || stateObj.entity_id?.split(".")[1] || "—";
    c.name[2] = attrs.opponent_name || "—";

    const r1 = _toDisplayNumber(attrs.team_score);
    const r2 = _toDisplayNumber(attrs.opponent_score);
    const m1 = _toDisplayNumber(attrs.team1Win);
    const m2 = _toDisplayNumber(attrs.team2Win);

    if (r1 !== null && r2 !== null) {
      c.score[1] = r1;
      c.score[2] = r2;
      c.scoreKind = "rounds";
    } else if (m1 !== null || m2 !== null) {
      c.score[1] = m1 ?? "—";
      c.score[2] = m2 ?? "—";
      c.scoreKind = "maps";
    } else {
      c.score[1] = null;
      c.score[2] = null;
      c.scoreKind = "none";
    }
    c.mapsLabel = localize("maps_won", this.hass);
    c.noScoreHint = localize("no_score_available", this.hass);

    if (attrs.date) {
      const dateInfo = formatGameDate(attrs.date, this.hass);
      if (dateInfo) {
        c.gameWeekday = dateInfo.weekday;
        c.gameDate = dateInfo.date;
        c.gameTime = dateInfo.time;
      }
    }
    return c;
  }

  _getNoMatchMessage(attrs) {
    const teamName = attrs.team_name;
    if (teamName && teamName !== "—") {
      return localize("no_match_for_team", this.hass, { team: teamName });
    }
    return localize("no_match", this.hass);
  }

  render() {
    if (!this.hass || !this._config) {
      return renderMissingConfig();
    }
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return renderMissingObj(this._config.entity);
    }
    if (stateObj.state === "unavailable") {
      return renderStateUnavailable(this._config.entity);
    }

    const c = this._buildCardData(stateObj);

    if (_isFinishedMatchView(stateObj)) {
      return renderPost(c);
    }

    switch (stateObj.state) {
      case "PRE":
        return renderPre(c);
      case "IN":
        return renderIn(c);
      case "POST":
        return renderPost(c);
      case "NOT_FOUND":
        return renderNotFound(c);
      default:
        return renderNotFound({ ...c, notFoundMsg: `State: ${stateObj.state}` });
    }
  }

  static getConfigElement() {
    return document.createElement("cs2-match-card-editor");
  }
}
