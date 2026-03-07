import { css } from "lit";

export const cardStyles = css`
  .card {
    position: relative;
    overflow: hidden;
    padding: 16px 16px 20px;
    font-weight: 400;
    border-radius: var(--ha-card-border-radius, 10px);
  }
  .title {
    text-align: center;
    font-size: 1.2em;
    font-weight: 500;
  }
  .card-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  .team {
    text-align: center;
    width: 35%;
  }
  .team img {
    max-width: 90px;
  }
  .logo {
    max-height: 6.5em;
  }
  .score {
    font-size: var(--score_size, 3em);
    opacity: var(--score_opacity, 1);
    text-align: center;
    line-height: 1;
  }
  .name {
    font-size: 1.4em;
  }
  .line {
    height: 1px;
    background-color: var(--primary-text-color);
    margin: 10px 0;
  }
  .live-badge {
    display: inline-block;
    background: #e53935;
    color: white;
    font-size: 0.9em;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    margin-bottom: 8px;
  }
  .venue {
    font-size: 1em;
    color: var(--secondary-text-color);
    text-align: center;
    margin: 8px 0 4px;
  }
  .date-time {
    text-align: center;
    margin: 8px 0;
    font-size: 1.1em;
    font-weight: 500;
  }
  .game-weekday {
    font-size: 1.4em;
    font-weight: 500;
  }
  .game-date {
    font-size: 1.1em;
  }
  .game-time {
    font-size: 1.1em;
  }
  .divider {
    font-size: 2.5em;
    text-align: center;
    margin: 0 4px;
  }
  .not-found-msg {
    font-size: 1.2em;
    text-align: center;
    padding: 20px;
  }
`;
