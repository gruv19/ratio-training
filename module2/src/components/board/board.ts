import './board.css';
import { createBoardTemplate } from '../../utils/templates';
import { mapCoordinates, startValues, game, boardInitParams } from '../../const';
import { randomNumber, removeElementFromArray } from '../../utils/common';
import {
    setKeyDownHandler,
    getLeftBottomIndex,
    getLeftTopIndex,
    getTopLeftIndex,
    getTopRightIndex,
    updateMapCoordinates,
} from '../../utils/board';
import Cell from '../cell/cell';
import Game from '../game/game';

class Board {
  private element: any;
  private cells: Array<Cell>;
  private game: Game;

  constructor(game: Game) {
    this.element = null;
    this.cells = [];
    this.game = game;
  }

  getElement() {
    if (!this.element) {
      const newElement = document.createElement('div');
      newElement.innerHTML = createBoardTemplate();
      this.element = newElement.firstChild;
    }
    return this.element;
  }

  getGameUsername() {
    return this.game.getUsername();
  }

  getGameUsernameInput() {
    return this.game.getUsernameInput();
  }

  addCell() {
    if (this.cells.length < boardInitParams.SIZE ** 2) {
      const value: number = startValues[randomNumber(0, startValues.length - 1)];
      const coordinatesIdx = randomNumber(0, mapCoordinates.length - 1);
      const coordinates: {x: number, y: number} = JSON.parse( mapCoordinates[coordinatesIdx] );
      const cell: Cell = new Cell(coordinates.x, coordinates.y, value);
      this.cells.push(cell);
      removeElementFromArray(coordinatesIdx, mapCoordinates);
      this.element.appendChild(cell.getElement());
      if (this.cells.length === boardInitParams.SIZE ** 2) {
        setTimeout(() => {
          this.checkSteps();
        }, boardInitParams.ANIMATION_DELAY);
      }
    }
  }

  init() {
    this.addCell();
    this.addCell();
    setKeyDownHandler(this.leftMove, this.upMove, this.rightMove, this.downMove, this);
  }

  unionCells(movedCell: Cell, placedCell: Cell) {
    const startCoordinates: { x: number, y: number } = { x: movedCell.getX(), y: movedCell.getY() };
    const idx = this.cells.findIndex(item => item.getX() === startCoordinates.x && item.getY() === startCoordinates.y);
    mapCoordinates.push(JSON.stringify(startCoordinates));
    movedCell.getElement().style.zIndex = '10';
    placedCell.getElement().style.zIndex = '100';
    movedCell.updatePosition(placedCell.getX(), placedCell.getY());
    placedCell.updateValue();
    this.game.getScoreCounter().setPoints(placedCell.getValue());
    setTimeout(() => {
      movedCell.getElement().remove();
      placedCell.getElement().style.zIndex = '';
      this.game.endTimeGame();
    }, boardInitParams.ANIMATION_DELAY);
    this.cells.splice(idx, 1);
  }

  leftMove() {
    let startY: number = 0;
    const coordinates: Array<string> = [...mapCoordinates];
    while (startY < boardInitParams.SIZE) {
      let topLeftIndex = getTopLeftIndex(this.cells, startY);
      if (topLeftIndex === -1) {
        break;
      }
      startY = this.cells[topLeftIndex].getY();
      const currentPosition: { x: number, y: number } = { x: this.cells[topLeftIndex].getX(), y: startY};
      updateMapCoordinates(currentPosition, { x: 0, y: startY }, mapCoordinates);
      this.cells[topLeftIndex].updatePosition(0, startY);
      const row: Array<Cell> = this.cells.filter((item: Cell) => item.getY() === startY);
      if (row.length > 1) {
        row.sort((a: Cell, b: Cell) => b.getX() - a.getX());
        this.moveRowLeft(row);
      }
      startY += 1;
    }
    if (JSON.stringify(coordinates) !== JSON.stringify(mapCoordinates)) {
      setTimeout(() => {
        this.addCell();
      }, boardInitParams.ANIMATION_DELAY);
    }
    if (this.game.getTimeCounter().countIsZero()) {
      this.game.playPauseHandler();
      return;
    }
    if (!this.game.getPlayPauseFlag()) {
      this.game.playPauseHandler();
      return;
    }
  }

  moveRowLeft(row: Array<Cell>) {
    let unionFlag: boolean = true;
    let i: number = row.length - 2;
    while (i > -1) {
      const currentY = row[i].getY();
      if (row[i].getValue() === row[i + 1].getValue()) {
        if (unionFlag) {
          this.unionCells(row[i], row[i + 1]);
          row.splice(i, 1);
          unionFlag = false;
        } else {
          const newX: number = row[i + 1].getX() + 1;
          updateMapCoordinates({ x: row[i].getX(), y: row[i].getY() }, { x: newX, y: currentY }, mapCoordinates);
          row[i].updatePosition(newX, currentY);
          unionFlag = true;
        }
      } else {
        const newX: number = row[i + 1].getX() + 1;
        updateMapCoordinates({ x: row[i].getX(), y: row[i].getY() }, { x: newX, y: currentY }, mapCoordinates);
        row[i].updatePosition(newX, currentY);
        unionFlag = true;
      }
      i--;
    }
  }

  upMove() {
    let startX: number = 0;
    const coordinates: Array<string> = [...mapCoordinates];
    while (startX < boardInitParams.SIZE) {
      let leftTopIndex: number = getLeftTopIndex(this.cells, startX);
      if (leftTopIndex === -1) {
        break;
      }
      startX = this.cells[leftTopIndex].getX();
      const currentPosition: { x: number, y: number } = { x: startX, y: this.cells[leftTopIndex].getY()};
      updateMapCoordinates(currentPosition, { x: startX, y: 0 }, mapCoordinates);
      this.cells[leftTopIndex].updatePosition(startX, 0);
      const row: Array<Cell> = this.cells.filter((item: Cell) => item.getX() === startX);
      if (row.length > 1) {
        row.sort((a, b) => b.getY() - a.getY());
        this.moveRowUp(row);
      }
      startX += 1;
    }
    if (JSON.stringify(coordinates) !== JSON.stringify(mapCoordinates)) {
      setTimeout(() => {
        this.addCell();
      }, boardInitParams.ANIMATION_DELAY);
    }
    if (this.game.getTimeCounter().countIsZero()) {
      this.game.playPauseHandler();
      return;
    }
    if (!this.game.getPlayPauseFlag()) {
      this.game.playPauseHandler();
      return;
    }
  }

  moveRowUp(row: Array<Cell>) {
    let unionFlag: boolean = true;
    let i: number = row.length - 2;
    while (i > -1) {
      const currentX = row[i].getX();
      if (row[i].getValue() === row[i + 1].getValue()) {
        if (unionFlag) {
          this.unionCells(row[i], row[i + 1]);
          row.splice(i, 1);
          unionFlag = false;
        } else {
          const newY = row[i + 1].getY() + 1;
          updateMapCoordinates({ x: row[i].getX(), y: row[i].getY() }, { x: currentX, y: newY }, mapCoordinates);
          row[i].updatePosition(currentX, newY);
          unionFlag = true;
        }
      } else {
        const newY = row[i + 1].getY() + 1;
        updateMapCoordinates({ x: row[i].getX(), y: row[i].getY() }, { x: currentX, y: newY }, mapCoordinates);
        row[i].updatePosition(currentX, newY);
        unionFlag = true;
      }
      i--;
    }
  }

  rightMove() {
    let startY: number = 0;
    const coordinates: Array<string> = [...mapCoordinates];
    while (startY < boardInitParams.SIZE) {
      let topRightIndex: number = getTopRightIndex(this.cells, startY);
      if (topRightIndex === -1) {
        break;
      }
      startY = this.cells[topRightIndex].getY();
      const currentPosition: { x: number, y: number } = { x: this.cells[topRightIndex].getX(), y: startY };
      updateMapCoordinates(currentPosition, { x: boardInitParams.SIZE - 1, y: startY }, mapCoordinates);
      this.cells[topRightIndex].updatePosition(boardInitParams.SIZE - 1, startY);
      const row = this.cells.filter(item => item.getY() === startY);
      if (row.length > 1) {
        row.sort((a, b) => a.getX() - b.getX());
        this.moveRowRight(row);
      }
      startY += 1;
    }
    if (JSON.stringify(coordinates) !== JSON.stringify(mapCoordinates)) {
      setTimeout(() => {
        this.addCell();
      }, boardInitParams.ANIMATION_DELAY);
    }
    if (this.game.getTimeCounter().countIsZero()) {
      this.game.playPauseHandler();
      return;
    }
    if (!this.game.getPlayPauseFlag()) {
      this.game.playPauseHandler();
      return;
    }
  }

  moveRowRight(row: Array<Cell>) {
    let unionFlag: boolean = true;
    let i: number = row.length - 2;
    while (i > -1) {
      const currentY = row[i].getY();
      if (row[i].getValue() === row[i + 1].getValue()) {
        if (unionFlag) {
          this.unionCells(row[i], row[i + 1]);
          row.splice(i, 1);
          unionFlag = false;
        } else {
          const newX: number = row[i + 1].getX() - 1;
          updateMapCoordinates({ x: row[i].getX(), y: row[i]. getY() }, { x: newX, y: currentY }, mapCoordinates);
          row[i].updatePosition(newX, currentY);
          unionFlag = true;
        }
      } else {
        const newX: number = row[i + 1].getX() - 1;
        updateMapCoordinates({ x: row[i].getX(), y: row[i]. getY() }, { x: newX, y: currentY }, mapCoordinates);
        row[i].updatePosition(newX, currentY);
        unionFlag = true;
      }
      i--;
    }
  }

  downMove() {
    let startX: number = 0;
    const coordinates: Array<string> = [...mapCoordinates];
    while (startX < boardInitParams.SIZE) {
      let leftBottomIndex = getLeftBottomIndex(this.cells, startX);
      if (leftBottomIndex === -1) {
        break;
      }
      startX = this.cells[leftBottomIndex].getX();
      const currentPosition: { x: number, y: number } = { x: startX, y: this.cells[leftBottomIndex].getY() };
      updateMapCoordinates(currentPosition, { x: startX, y: boardInitParams.SIZE - 1 }, mapCoordinates);
      this.cells[leftBottomIndex].updatePosition(startX, boardInitParams.SIZE - 1);
      const row = this.cells.filter(item => item.getX() === startX);
      if (row.length > 1) {
        row.sort((a, b) => a.getY() - b.getY());
        this.moveRowDown(row);
      }
      startX += 1;
    }
    if (JSON.stringify(coordinates) !== JSON.stringify(mapCoordinates)) {
      setTimeout(() => {
        this.addCell();
      }, boardInitParams.ANIMATION_DELAY);
    }
    if (this.game.getTimeCounter().getCount() === 0) {
        this.game.playPauseHandler();
      return;
    }
    if (!this.game.getPlayPauseFlag()) {
      this.game.playPauseHandler();
      return;
    }
  }

  moveRowDown(row: Array<Cell>) {
    let unionFlag: boolean = true;
    let i: number = row.length - 2;
    while (i > -1) {
      const currentX: number = row[i].getX();
      if (row[i].getValue() === row[i + 1].getValue()) {
        if (unionFlag) {
          this.unionCells(row[i], row[i + 1]);
          row.splice(i, 1);
          unionFlag = false;
        } else {
          const newY: number = row[i + 1].getY() - 1;
          updateMapCoordinates({ x: row[i].getX(), y: row[i].getY() }, { x: currentX, y: newY }, mapCoordinates)
          row[i].updatePosition(currentX, newY);
          unionFlag = true;
        }
      } else {
        const newY: number = row[i + 1].getY() - 1;
        updateMapCoordinates({ x: row[i].getX(), y: row[i].getY() }, { x: currentX, y: newY }, mapCoordinates)
        row[i].updatePosition(currentX, newY);
        unionFlag = true;
      }
      i--;
    }
  }

  checkSteps() {
    for (let cell of this.cells) {
      let candidate = this.cells.find(item => {
        if (cell.getX() + 1 === item.getX() && cell.getY() === item.getY() && cell.getValue() === item.getValue()) {
          return true;
        }
        if (cell.getX() - 1 === item.getX() && cell.getY() === item.getY() && cell.getValue() === item.getValue()) {
          return true;
        }
        if (cell.getX() === item.getX() && cell.getY() + 1 === item.getY() && cell.getValue() === item.getValue()) {
          return true;
        }
        if (cell.getX() === item.getX() && cell.getY() - 1 === item.getY() && cell.getValue() === item.getValue()) {
          return true;
        }
        return false;
      });
      if (candidate) {
        return;
      }
    }
    this.game.getStatistic().setScoreGameStatistic(this.game.getUsername(), this.game.getScoreCounter().getCount());
    this.game.setInProgress(false);
    this.game.getTimeCounter().stop();
    const answer = confirm('Игра окончена! Начать заново?');
    if (answer) {
      this.game.reset();
    }
  }

  checkGoal() {
    return this.cells.filter((item) => item.getValue() >= game.GOAL).length;
  }

  reset() {
    this.cells.forEach((item) => item.getElement().remove());
    this.cells = [];
    mapCoordinates.length = 0;
    mapCoordinates.push('{"x":0,"y":0}', '{"x":0,"y":1}', '{"x":0,"y":2}', '{"x":0,"y":3}', '{"x":0,"y":4}',
      '{"x":1,"y":0}', '{"x":1,"y":1}', '{"x":1,"y":2}', '{"x":1,"y":3}', '{"x":1,"y":4}',
      '{"x":2,"y":0}', '{"x":2,"y":1}', '{"x":2,"y":2}', '{"x":2,"y":3}', '{"x":2,"y":4}',
      '{"x":3,"y":0}', '{"x":3,"y":1}', '{"x":3,"y":2}', '{"x":3,"y":3}', '{"x":3,"y":4}',
      '{"x":4,"y":0}', '{"x":4,"y":1}', '{"x":4,"y":2}', '{"x":4,"y":3}', '{"x":4,"y":4}');
    this.addCell();
    this.addCell();
  }

  renderResize() {
    this.cells.forEach((item: Cell) => item.render());
  }
};

export default Board;
