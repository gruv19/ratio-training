import './style/global.css';
import './style/main.css';

import Game from './components/game/game';
import { defineInitParams } from './utils/cell';

document.addEventListener('DOMContentLoaded', () => {
  const gameComponent: Game = new Game();
  gameComponent.init();

  window.addEventListener('resize', () => {
    defineInitParams();
    gameComponent.getBoardComponent()?.renderResize();
  });

});


