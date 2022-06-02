import { createStatisticTemplate } from '../../utils/templates';
import { timeNormalize } from '../../utils/common';
import './statistic.css';

class Statistic {
  private mainElement: any;
  private timeStatistic: Array<any>;
  private timeStatisticElement: any;
  private scoreStatistic: Array<any>;
  private scoreStatisticElement: any;

  constructor() {
    this.mainElement = null;
    this.timeStatistic = [];
    this.timeStatisticElement = null;
    this.scoreStatistic = [];
    this.scoreStatisticElement = null;
  }

  getMainElement() {
    if (!this.mainElement) {
      const tepmoraryElement = document.createElement('div');
      tepmoraryElement.innerHTML = createStatisticTemplate();
      this.mainElement = tepmoraryElement.firstChild;
    }
    return this.mainElement;
  }

  private getTimeStatisticElement() {
    if (!this.timeStatisticElement) {
      this.timeStatisticElement = this.getMainElement().querySelector('.statistic__table--time');
    }
    return this.timeStatisticElement;
  }

  getTimeGameStatistic() {
    const savedTimeGameStatistic = localStorage.getItem('timeGame');
    if (savedTimeGameStatistic) {
      this.timeStatistic = JSON.parse(savedTimeGameStatistic);
    } else {
      this.timeStatistic = [];
    }
    this.renderTimeGameStatistic();
  }

  setTimeGameStatistic(username: string, time: number) {
    const result = {
      _id: Date.now() + parseInt(`${Math.random() * 1000}`, 10),
      username: username,
      time: time,
    };
    this.timeStatistic.push(result);
    localStorage.setItem(`timeGame`, JSON.stringify(this.timeStatistic));
    this.renderTimeGameStatistic();
  }

  private renderTimeGameStatistic() {
    if (!this.timeStatistic.length) {
      this.getTimeStatisticElement().innerHTML = '<div class="statistic__row statistic__row--empty">Результатов пока нет</div>';
      return;
    }
    this.getTimeStatisticElement().innerHTML = '';
    let statisticHTML = '';
    this.timeStatistic
      .sort((a: any, b: any) => a.time - b.time)
      .forEach((item: any) => {
        statisticHTML += `<div class="statistic__row">
          <div class="statistic__cell-name">${item.username}</div>
          <div class="statistic__cell-result">${timeNormalize(item.time)}</div>
        </div>`
      });
    this.getTimeStatisticElement().insertAdjacentHTML('beforeend', statisticHTML);
  }

  private getScoreStatisticElement() {
    if (!this.scoreStatisticElement) {
      this.scoreStatisticElement = this.getMainElement().querySelector('.statistic__table--score');
    }
    return this.scoreStatisticElement;
  }

  setScoreGameStatistic(username: string, score: number) {
    const result = {
      _id: Date.now() + parseInt(`${Math.random() * 1000}`, 10),
      username: username,
      score: score,
    };
    this.scoreStatistic.push(result);
    localStorage.setItem(`scoreGame`, JSON.stringify(this.scoreStatistic));
    this.renderScoreGameStatistic();
  }

  getScoreGameStatistic() {
    const savedScoreGameStatistic = localStorage.getItem('scoreGame');
    if (savedScoreGameStatistic) {
      this.scoreStatistic = JSON.parse(savedScoreGameStatistic);
    } else {
      this.scoreStatistic = [];
    }
    this.renderScoreGameStatistic();
  }

  private renderScoreGameStatistic() {
    if (!this.scoreStatistic.length) {
      this.getScoreStatisticElement().innerHTML = '<div class="statistic__row statistic__row--empty">Результатов пока нет</div>';
      return;
    }
    this.getScoreStatisticElement().innerHTML = '';
    let statisticHTML = '';
    this.scoreStatistic
      .sort((a: any, b: any) => b.score - a.score)
      .forEach((item: any) => {
        statisticHTML += `<div class="statistic__row">
          <div class="statistic__cell-name">${item.username}</div>
          <div class="statistic__cell-result">${item.score}</div>
        </div>`
      });
    this.getScoreStatisticElement().insertAdjacentHTML('beforeend', statisticHTML);
  }

  reset() {
    this.timeStatistic = [];
    this.scoreStatistic = [];
    this.getTimeGameStatistic();
    this.getScoreGameStatistic();
  }

}

export default Statistic;
