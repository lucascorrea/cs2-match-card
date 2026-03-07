# CS2 Match Card

Home Assistant Lovelace card that displays the next CS2 match from the [cs2-tracker](https://github.com/lucascorrea/cs2-tracker) integration.

Inspired by [ha-teamtracker-card](https://github.com/vasqued2/ha-teamtracker-card).

## States

- **PRE**: Upcoming match – logos, names, date/time, venue
- **IN**: Live match – logos, names, scores, LIVE badge, venue
- **POST**: Finished match – logos, names, final score, venue
- **NOT_FOUND**: No match or API error

## Installation

### HACS

1. HACS → Frontend → Custom repositories → Add `https://github.com/your-username/cs2-match-card`
2. Install "CS2 Match Card"
3. Add the resource if needed: `/hacsfiles/cs2-match-card/cs2-match-card.js` (Javascript Module)

### Manual

1. Download `cs2-match-card.js` from releases
2. Place in `www/cs2-match-card/` (or your frontend folder)
3. Add to Lovelace resources: `url: /local/cs2-match-card/cs2-match-card.js`, `type: module`

## Configuration

Add a card to your dashboard and select "CS2 Match Card", or use YAML:

```yaml
type: custom:cs2-match-card
entity: sensor.furia_cs2
card_title: FURIA CS2
```

| Option      | Description             | Default |
|------------|-------------------------|---------|
| entity     | cs2-tracker sensor      | required |
| card_title | Override title at top   | sensor name |

## Requirements

- Home Assistant 2024.1+
- [cs2-tracker](https://github.com/lucascorrea/cs2-tracker) integration configured
