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
    };
    c.logo[1] = attrs.team_logo;
    c.logo[2] = attrs.opponent_logo;
    c.name[1] = attrs.team_name || stateObj.entity_id?.split(".")[1] || "—";
    c.name[2] = attrs.opponent_name || "—";
    c.score[1] = attrs.team_score;
    c.score[2] = attrs.opponent_score;

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
