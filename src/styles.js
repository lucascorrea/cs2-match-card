import { css } from "lit";

export const cardStyles = css`
  .card {
    position: relative;
    overflow: hidden;
    padding: 16px 16px 20px;
    font-weight: 400;
    border-radius: var(--ha-card-border-radius, 10px);
  }
  .team-bg {
    opacity: 0.02;
    position: absolute;
    top: 50%;
    left: -10%;
    width: 70%;
    height: 70%;
    transform: translateY(-50%);
    object-fit: contain;
    z-index: 0;
  }
  .opponent-bg {
    opacity: 0.02;
    position: absolute;
    top: 50%;
    right: -10%;
    width: 70%;
    height: 70%;
    transform: translateY(-50%);
    object-fit: contain;
    z-index: 0;
  }
  .title {
    text-align: center;
    font-size: 1.2em;
    font-weight: 500;
    position: relative;
    z-index: 1;
  }
  .card-content {
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  .team {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 35%;
    min-width: 0;
  }
  .logo-box {
    width: min(100%, 132px);
    height: 7.5rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
  }
  .logo-box .logo {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
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
    position: relative;
    z-index: 1;
  }
  .live-venue-row {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 8px;
    z-index: 1;
  }
  .venue-center {
    font-size: 1em;
    color: var(--secondary-text-color);
    text-align: center;
    flex: 1;
  }
  .live-badge {
    background: #e53935;
    color: white;
    font-size: 0.9em;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    position: absolute;
    right: 0;
  }
  .final-badge {
    background: #2e7d32;
    color: white;
    font-size: 0.9em;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    position: absolute;
    right: 0;
  }
  .post-status-strip {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 0 16px;
    position: relative;
    z-index: 2;
    min-height: 36px;
  }
  .final-pill {
    display: inline-block;
    background: #2e7d32;
    color: #fff;
    font-size: 0.88em;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 8px 20px;
    border-radius: 999px;
    text-transform: uppercase;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
    z-index: 2;
    position: relative;
  }
  .score-context {
    font-size: 0.85em;
    color: var(--secondary-text-color);
    text-align: center;
    margin: 6px 0 0;
    position: relative;
    z-index: 1;
  }
  .venue {
    font-size: 1em;
    color: var(--secondary-text-color);
    text-align: center;
    margin: 4px 0 12px;
    position: relative;
    z-index: 1;
  }
  .date-time {
    text-align: center;
    margin: 8px 0;
    font-size: 1.1em;
    font-weight: 500;
    position: relative;
    z-index: 1;
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
    line-height: 1;
    text-align: center;
    margin: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .not-found-msg {
    font-size: 1.2em;
    text-align: center;
    padding: 20px;
    position: relative;
    z-index: 1;
  }
`;
