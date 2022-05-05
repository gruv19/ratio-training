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

function createUsernameBlockTemplate (): string {
  return (`<div class="username">
    <input type="text" class="username__input input" placeholder="Введите имя...">
    <button class="username__button button button--save">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="username__icon">
        <path d="M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"/>
      </svg>
    </button>
  </div>`);
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
  createUsernameBlockTemplate,
  createMenuTemplate,
  createResultsTemplate,
  createStatisticTemplate,
};
