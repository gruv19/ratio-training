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

  getTimeStatisticElement() {
    if (!this.timeStatisticElement) {
      this.timeStatisticElement = this.getMainElement().querySelector('.statistic__table--time');
    }
    return this.timeStatisticElement;
  }

  async getTimeGameStatistic() {
    const promise = await fetch ('http://localhost:3000/api/v1/record/', {
      method: 'GET',
    });
    this.timeStatistic = await promise.json();
    this.renderTimeGameStatistic();
  }

  async setTimeGameStatistic(username: string) {
    const record = {
      username: username,
      time: 0,
    };

    const promise = await fetch('http://localhost:3000/api/v1/record/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(record),
    });
    const timeFromServer: string = await promise.text();
    record.time = +timeFromServer;
    this.timeStatistic.push(record);
    this.renderTimeGameStatistic();
  }

  renderTimeGameStatistic() {
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

  getScoreStatisticElement() {
    if (!this.scoreStatisticElement) {
      this.scoreStatisticElement = this.getMainElement().querySelector('.statistic__table--score');
    }
    return this.scoreStatisticElement;
  }

  async setScoreGameStatistic(username: string, score: number) {
    const record = {
      username: username,
      score: score,
    };
    this.scoreStatistic.push(record);
    await fetch('http://localhost:3000/api/v1/score_record/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(record),
    });
    this.renderScoreGameStatistic();
  }

  async getScoreGameStatistic() {
    const promise = await fetch ('http://localhost:3000/api/v1/score_record/', {
      method: 'GET',
    });
    this.scoreStatistic = await promise.json();
    this.renderScoreGameStatistic();
  }

  renderScoreGameStatistic() {
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
    console.log(this.scoreStatistic);
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
