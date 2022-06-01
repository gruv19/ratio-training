import { boardInitParams } from "../const";

function createCellTemplate (value: number): string {
  return `<div class="cell">${value}</div>`
}

function createBoardCellTemplate (): string {
  return `<div class="board__cell"></div>`;
}

function createBoardTemplate (): string {
  return (`<div class="board">
    ${createBoardCellTemplate().repeat(boardInitParams.SIZE ** 2)}
  </div>`);
}

function createMainTemplate (): string {
  return (`<main class="game">
    <h1 class="game__title">2048</h1>
    <div class="game__menu"></div>
    <div class="game__results"></div>
    <div class="game__board"></div>
    <div class="game__statistic"></div>
  </main>`);
}

function createMenuTemplate (username: string): string {
  return (`<div class="menu">
    <span class="menu__username">${username}</span>
    <button class="menu__button menu__button--play button button--play-pause" id="play">
      <svg class="menu__icon menu__icon--play" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/>
      </svg>
    </button>
    <button class="menu__button menu__button--reset button button--reset" id="reset">
      <svg class="menu__icon menu__icon--reset" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="#000" stroke-width="2" d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"/>
      </svg>
    </button>
  </div>`);
}

function createResultsTemplate (): string {
  return (`<div class="results">
    <div class="results__time">
      <span class="results__icon-container">
        <svg class="results__icon results__icon--time" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.228 296.228">
          <g>
            <path d="m167.364,48.003v-23.003h10.5c6.903,0 12.5-5.597 12.5-12.5s-5.596-12.5-12.5-12.5h-59.5c-6.903,0-12.5,5.597-12.5,12.5s5.597,12.5 12.5,12.5h10.5v23.003c-59.738,9.285-105.604,61.071-105.604,123.37-3.55271e-15,68.845 56.01,124.854 124.854,124.854s124.854-56.01 124.854-124.854c0-62.299-45.866-114.085-105.604-123.37zm-19.25,223.225c-55.06,0-99.854-44.795-99.854-99.854s44.795-99.854 99.854-99.854 99.854,44.795 99.854,99.854-44.794,99.854-99.854,99.854z"/>
            <path d="m160.614,166.18v-58.889c0-6.903-5.597-12.5-12.5-12.5s-12.5,5.597-12.5,12.5v66.1c0,2.033 0.81,3.982 2.25,5.416l34.969,34.822c4.893,4.872 12.806,4.854 17.678-0.037 4.871-4.892 4.854-12.807-0.037-17.678l-29.86-29.734z"/>
          </g>
        </svg>
      </span>
      <span class="results__value"></span>
    </div>
    <div class="results__score">
      <span class="results__icon-container">
        <svg class="results__icon results__icon--score" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217.929 217.929">
          <path d="M212.39,101.703c5.023-4.897,6.797-12.083,4.629-18.755s-7.827-11.443-14.769-12.452l-52.969-7.697
            c-0.097-0.014-0.18-0.075-0.223-0.162L125.371,14.64C122.267,8.349,115.98,4.44,108.964,4.44S95.662,8.349,92.558,14.64
            L68.87,62.637c-0.043,0.087-0.126,0.147-0.223,0.162l-52.968,7.697c-6.942,1.009-12.601,5.78-14.769,12.452
            s-0.394,13.858,4.629,18.755l38.328,37.361c0.07,0.068,0.102,0.166,0.085,0.262l-9.048,52.755
            c-1.186,6.914,1.604,13.771,7.279,17.894c5.676,4.125,13.059,4.657,19.268,1.393l47.376-24.907c0.086-0.046,0.19-0.045,0.276,0
            l47.376,24.907c2.701,1.42,5.623,2.121,8.531,2.121c3.777,0,7.53-1.184,10.736-3.514c5.675-4.123,8.464-10.98,7.279-17.895
            l-9.048-52.754c-0.017-0.096,0.016-0.194,0.085-0.262L212.39,101.703z M156.235,142.368l9.048,52.754
            c0.024,0.14,0.031,0.182-0.118,0.29c-0.149,0.108-0.187,0.088-0.312,0.022l-47.377-24.908c-5.33-2.801-11.695-2.801-17.027,0
            l-47.376,24.907c-0.125,0.065-0.163,0.086-0.312-0.022c-0.149-0.108-0.142-0.15-0.118-0.289l9.048-52.755
            c1.018-5.936-0.949-11.989-5.262-16.194L18.103,88.813c-0.101-0.099-0.132-0.128-0.075-0.303c0.057-0.175,0.099-0.181,0.239-0.202
            l52.968-7.697c5.961-0.866,11.111-4.607,13.776-10.008l23.688-47.998c0.063-0.126,0.081-0.165,0.265-0.165s0.203,0.039,0.265,0.165
            l23.688,47.998c2.666,5.401,7.815,9.143,13.776,10.008l52.968,7.697c0.14,0.021,0.182,0.027,0.239,0.202
            c0.057,0.175,0.026,0.205-0.075,0.303l-38.328,37.361C157.185,130.378,155.218,136.432,156.235,142.368z"/>
        </svg>
      </span>
      <span class="results__value">203040509020</span>
    </div>
  </div>`);
}

function createStatisticTemplate(): string {
  return (`<div class="statistic">
    <div class="statistic__time">
      <h2 class="statistic__title">Рекорды времени</h2>
      <div class="statistic__table statistic__table--time"></div>
    </div>
    <div class="statistic__score">
      <h2 class="statistic__title">Рекорды набранных очков</h2>
      <div class="statistic__table statistic__table--score"></div>
    </div>
  </div>`);
}

export {
  createCellTemplate,
  createBoardTemplate,
  createMainTemplate,
  createMenuTemplate,
  createResultsTemplate,
  createStatisticTemplate,
};
