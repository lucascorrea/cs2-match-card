import { VERSION } from "./const.js";
import { CS2MatchCard } from "./cs2_match_card.js";
import { CS2MatchCardEditor } from "./card_editor.js";

customElements.define("cs2-match-card", CS2MatchCard);
customElements.define("cs2-match-card-editor", CS2MatchCardEditor);

console.info(
  "%c CS2-MATCH-CARD %s IS INSTALLED",
  "color: green; font-weight: bold",
  VERSION
);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "custom:cs2-match-card",
  name: "CS2 Match Card",
  preview: false,
  description: "Card to display the cs2_tracker sensor next match",
});
