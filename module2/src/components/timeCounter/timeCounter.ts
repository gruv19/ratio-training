import { game } from '../../const';
import { timeNormalize } from '../../utils/common';
import Game from '../game/game';


class TimeCounter {
  private id: any;
  private count: number;
  private element: any;
  private game: Game;

  constructor(game: Game) {
    this.id = null;
    this.count = 0;
    this.game = game;
    this.element = null;
  }

  init() {
    this.id = null;
    this.count = 0;
    this.updateElement();
  }

  getElement() {
    if (!this.element) {
      this.element = this.game.getMainElement().querySelector('.results__time > .results__value');
    }
    return this.element;
  }

  start() {
    this.id = setInterval(() => {
      this.count += 1;
      this.updateElement();
      if (this.game.getInProgress() === false) {
        this.stop();
      }
      if (this.countIsMax()) {
        this.game.endTimeGame();
      }
    }, 100);
  }

  stop() {
    clearInterval(this.id);
    this.id = null;
  }

  updateElement() {
    this.getElement().textContent = `${timeNormalize(this.count)}`;
  }

  getCount() {
    return this.count;
  }

  countIsMax() {
    return this.count >= game.TIME;
  }

  countIsZero() {
    return this.count === 0;
  }
}

export default TimeCounter;
