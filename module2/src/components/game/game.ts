import './game.css';
import Board from "../board/board";
import { defineInitParams } from '../../utils/cell';
import {
  createMainTemplate,
  createUsernameBlockTemplate,
  createMenuTemplate,
  createResultsTemplate
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
  private usernameInput: any;
  private boardComponent: Board;
  private username: string;
  private playPauseFlag: boolean;
  private inProgress: boolean;
  private timeCounter: TimeCounter;
  private scoreCounter: ScoreCounter;
  private statistic: Statistic;

  constructor() {
    this.gameElement = null;
    this.usernameInput = null;
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

  getBoardComponent() {
    return this.boardComponent;
  }

  getTimeCounter() {
    return this.timeCounter;
  }

  getScoreCounter() {
    return this.scoreCounter;
  }

  getStatistic() {
    return this.statistic;
  }

  render() {
    document.body.appendChild(this.getMainElement());
    this.getMainElement().querySelector('.game__menu').insertAdjacentHTML('beforeend', createUsernameBlockTemplate())
    this.getMainElement().querySelector('.game__results').insertAdjacentHTML('beforeend', createResultsTemplate());
    this.getMainElement().querySelector('.game__board').append(this.boardComponent.getElement());
    this.getMainElement().querySelector('.game__statistic').append(this.statistic.getMainElement());
    defineInitParams();
  }

  getUsername() {
    return this.username;
  }

  getUsernameInput() {
    if (!this.usernameInput) {
      this.usernameInput = this.getMainElement().querySelector('.username__input');
    }
    return this.usernameInput;
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
    this.username = prompt(`Ты набрал ${game.GOAL}. Введи свое имя, чтобы сохранить результат!`) || '';
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
      this.continueGame();
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

  continueGame() {
    const answer = confirm('Твой результат сохранен! Продолжить игру?');
    if (!answer) {
      this.reset();
    }
  }

  finishedGame() {
    const answer = confirm(`Ходов больше нет! Ты набрал ${this.getScoreCounter().getCount()}! Начать заново?`);
    if (answer) {
      this.reset();
    }
  }

  reset() {
    this.timeCounter.stop();
    this.timeCounter.init();
    this.timeCounter.updateElement();
    this.scoreCounter.init();
    this.scoreCounter.updateElement();
    this.playPauseFlag = false;
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
      this.getMainElement().querySelector('.menu__button--play').innerHTML = `<svg class="menu__icon menu__icon--play" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/>
        </svg>`;
    } else {
      this.playPauseFlag = true;
      this.timeCounter.start();
      this.getMainElement().querySelector('.menu__button--play').innerHTML = `<svg class="menu__icon--pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
          <path d="M15.5,0c-1.103,0-2,0.897-2,2v40c0,1.103,0.897,2,2,2s2-0.897,2-2V2C17.5,0.897,16.603,0,15.5,0z"/>
          <path d="M28.5,0c-1.103,0-2,0.897-2,2v40c0,1.103,0.897,2,2,2s2-0.897,2-2V2C30.5,0.897,29.603,0,28.5,0z"/>
        </svg>`;
    }
  }
};

export default Game;
