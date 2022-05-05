import Game from "../game/game";

class ScoreCounter {
  private count: number;
  private element: any;
  private game: Game;

  constructor(game: Game) {
    this.count = 0;
    this.element = null;
    this.game = game;
  }

  init() {
    this.count = 0;
    this.updateElement();
  }

  getElement() {
    if (!this.element) {
      this.element = this.game.getMainElement().querySelector('.results__score > .results__value');
    }
    return this.element;
  }

  updateElement() {
    this.getElement().textContent = `${this.count}`;
  }

  getCount() {
    return this.count;
  }

  setPoints(points: number) {
    this.count += points;
    this.updateElement();
  }

};

export default ScoreCounter;
