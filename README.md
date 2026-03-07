# CS2 Match Card

Home Assistant Lovelace card that displays the next CS2 match from the [cs2-tracker](https://github.com/lucascorrea/cs2-tracker) integration.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/lucasc0rrea)

## States

- **PRE**: Upcoming match – logos, names, date/time, venue
- **IN**: Live match – logos, names, scores, LIVE badge, venue
- **POST**: Finished match – logos, names, final score, venue
- **NOT_FOUND**: No match or API error

### PRE Game Example
<img width="502" height="278" alt="cs2-pre-game" src="https://github.com/user-attachments/assets/4dc92480-ab06-4ffa-ab6d-afbe1ce2b18c" />

### IN Game Example
<img width="499" height="276" alt="cs2-in-game" src="https://github.com/user-attachments/assets/160a5e4b-1767-4536-b4d9-ca193dcfcb7b" />


### NOT_FOUND Game Examples
<img width="500" height="152" alt="cs2-not-found" src="https://github.com/user-attachments/assets/c400934e-0e30-464e-9867-5e0bee2ebce8" />

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
