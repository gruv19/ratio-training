import './game.css';
import Board from "../board/board";
import { defineInitParams } from '../../utils/cell';
import {
  createMainTemplate,
  createMenuTemplate,
  createResultsTemplate,
  createPlayPauseButtonTemplate
} from '../../utils/templates';
import {
  setPlayPauseHandler,
  setResetGameHandler
} from '../../utils/game';
import { game } from '../../const';
import TimeCounter from '../timeCounter/timeCounter';
import ScoreCounter from '../scoreCounter/scoreCounter';
import Statistic from '../statistic/statistic';

class Game {
  private gameElement: any;
  private boardComponent: Board;
  private username: string;
  private playPauseFlag: boolean;
  private inProgress: boolean;
  private timeCounter: TimeCounter;
  private scoreCounter: ScoreCounter;
  private statistic: Statistic;

  constructor() {
    this.gameElement = null;
    this.boardComponent = new Board(this);
    this.username = '';
    this.playPauseFlag = false;
    this.inProgress = true;
    this.timeCounter = new TimeCounter(this);
    this.scoreCounter = new ScoreCounter(this);
    this.statistic = new Statistic();
  }

  init() {
    this.render();
    this.boardComponent.init();
    this.timeCounter.init();
    this.scoreCounter.init();
    this.statistic.getTimeGameStatistic();
    this.statistic.getScoreGameStatistic();
    this.getMainElement().querySelector('.game__menu').innerHTML = '';
    this.getMainElement().querySelector('.game__menu').insertAdjacentHTML('beforeend', createMenuTemplate(this.username));
    setPlayPauseHandler(this.playPauseHandler, this);
    setResetGameHandler(this.reset, this);
  }

  getScoreCounter() {
    return this.scoreCounter;
  }

  reRenderBoardComponent() {
    this.boardComponent.renderResize();
  }

  render() {
    document.body.appendChild(this.getMainElement());
    this.getMainElement().querySelector('.game__results').insertAdjacentHTML('beforeend', createResultsTemplate());
    this.getMainElement().querySelector('.game__board').append(this.boardComponent.getElement());
    this.getMainElement().querySelector('.game__statistic').append(this.statistic.getMainElement());
    defineInitParams();
  }

  getMainElement() {
    if (!this.gameElement) {
      const tepmoraryElement = document.createElement('div');
      tepmoraryElement.innerHTML = createMainTemplate();
      this.gameElement = tepmoraryElement.firstChild;
    }
    return this.gameElement;
  }

  getInProgress() {
    return this.inProgress;
  }

  setUsername() {
    const message = (this.scoreCounter.getCount() === game.GOAL)
      ? `Ты набрал ${game.GOAL}. Введи свое имя, чтобы сохранить результат!`
      : 'Введи свое имя, чтобы сохранить результат!';
    this.username = prompt(message) || '';
  }

  endTimeGame() {
    if (this.inProgress === false) {
      return;
    }
    let gameOverFlag = 0;
    if (this.boardComponent) {
      gameOverFlag = this.boardComponent.checkGoal();
    }
    if (gameOverFlag !== 0) {
      this.inProgress = false;
      this.timeCounter.stop();
      this.setUsername();
      this.statistic.setTimeGameStatistic(this.username, this.timeCounter.getCount());
      this.resetOrContinue();
      return;
    }
    if (this.timeCounter.countIsMax()) {
      this.timeCounter.stop();
      return;
    }
  }

  setInProgress(flag: boolean) {
    this.inProgress = flag;
  }

  resetOrContinue() {
    const answer = confirm('Твой результат сохранен! Продолжить игру?');
    if (!answer) {
      this.reset();
    }
  }

  resetOrFinish() {
    const answer = confirm(`Ходов больше нет! Ты набрал ${this.scoreCounter.getCount()}! Начать заново?`);
    if (answer) {
      this.reset();
    }
  }

  over() {
    if (!this.username) {
      this.setUsername();
    }
    this.statistic.setScoreGameStatistic(this.username, this.scoreCounter.getCount());
    this.setInProgress(false);
    this.timeCounter.stop();
    this.resetOrFinish();
  }

  reset() {
    this.timeCounter.stop();
    this.timeCounter.init();
    this.scoreCounter.init();
    this.playPauseFlag = false;
    this.getMainElement().querySelector('.menu__button--play').innerHTML = createPlayPauseButtonTemplate(true);
    this.inProgress = true;
    this.statistic.reset();
    this.username = '';
    if (this.boardComponent) {
      this.boardComponent.reset();
    }
  }

  getPlayPauseFlag() {
    return this.playPauseFlag;
  }

  playPauseHandler() {
    if (this.inProgress === false) {
      return;
    }
    if (this.playPauseFlag) {
      this.playPauseFlag = false;
      this.timeCounter.stop();
      this.getMainElement().querySelector('.menu__button--play').innerHTML = createPlayPauseButtonTemplate(true);
    } else {
      this.playPauseFlag = true;
      this.timeCounter.start();
      this.getMainElement().querySelector('.menu__button--play').innerHTML = createPlayPauseButtonTemplate(false);
    }
  }

  togglePlayPause() {
    if (this.timeCounter.countIsZero()) {
      this.playPauseHandler();
      return;
    }
    if (!this.getPlayPauseFlag()) {
      this.playPauseHandler();
      return;
    }
  }
};

export default Game;
