import { html, LitElement } from "lit";

export class CS2MatchCardEditor extends LitElement {
  static get properties() {
    return {
      _config: { type: Object },
      hass: { type: Object },
      _entity: { type: String },
    };
  }

  constructor() {
    super();
    this._entity = "";
  }

  setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    this._config = config;
    this._entity = config.entity || "";
  }

  updated(changedProperties) {
    if (changedProperties.has("_config") && this._config?.entity) {
      this._entity = this._config.entity;
    }
  }

  _entityChanged(ev) {
    const val = ev.detail?.value ?? ev.target?.value ?? "";
    this._entity = val;
    this._config = { ...this._config, entity: val };
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      })
    );
    this.requestUpdate();
  }

  _valueChanged(ev, key) {
    const val = ev.target.checked !== undefined ? ev.target.checked : ev.target.value;
    this._config = { ...this._config, [key]: val };
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      })
    );
    this.requestUpdate();
  }

  render() {
    if (!this.hass || !this._config) return html``;

    return html`
      <div class="card-config">
        <div class="textfield-container">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._entity}
            .label=${"CS2 Tracker sensor"}
            allow-custom-entity
            @value-changed=${this._entityChanged}
          ></ha-entity-picker>
        </div>
        <div class="textfield-container">
          <ha-textfield
            .label=${"Card title (optional)"}
            .value=${this._config.card_title || ""}
            @input=${(e) => this._valueChanged(e, "card_title")}
          ></ha-textfield>
        </div>
      </div>
    `;
  }
}
