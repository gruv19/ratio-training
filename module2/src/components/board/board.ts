import './board.css';
import { createBoardTemplate } from '../../utils/templates';
import { mapCoordinates, startValues, game, boardInitParams } from '../../const';
import { randomNumber, removeElementFromArray } from '../../utils/common';
import {
    setKeyDownHandler,
    setMouseMoveHandler,
    setTouchHandler,
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

  init() {
    this.addCell();
    this.addCell();
    setKeyDownHandler(this.horizontalMove, this.verticalMove, this);
    setMouseMoveHandler(this.horizontalMove, this.verticalMove, this);
    setTouchHandler(this.horizontalMove, this.verticalMove, this);
  }

  private addCell() {
    if (this.cells.length < boardInitParams.SIZE ** 2) {
      const value: number = startValues[randomNumber(0, startValues.length - 1)];
      const coordinatesIdx = randomNumber(0, mapCoordinates.length - 1);
      const coordinates: {x: number, y: number} = JSON.parse( mapCoordinates[coordinatesIdx] );
      const cell: Cell = new Cell(coordinates.x, coordinates.y, value);
      this.cells.push(cell);
      removeElementFromArray(coordinatesIdx, mapCoordinates);
      this.element.appendChild(cell.getElement());
      if (this.cells.length === boardInitParams.SIZE ** 2) {
        setTimeout(() => this.checkSteps(), boardInitParams.ANIMATION_DELAY);
      }
    }
  }

  private unionCells(movedCell: Cell, placedCell: Cell) {
    const startCoordinates: { x: number, y: number } = { x: movedCell.getX(), y: movedCell.getY() };
    const idx = this.cells.findIndex((item: Cell) => item.getX() === startCoordinates.x && item.getY() === startCoordinates.y);
    mapCoordinates.push(JSON.stringify(startCoordinates));
    movedCell.toBackground();
    placedCell.toForeground();
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

  private moveRowHorizontal(row: Array<Cell>, direction: 'left' | 'right') {
    let unionFlag: boolean = true;
    let i: number = row.length - 2;
    while (i > -1) {
      const currentY: number = row[i].getY();
      if (row[i].getValue() !== row[i + 1].getValue() || !unionFlag) {
        const newX: number = direction === 'left'
          ? row[i + 1].getX() + 1
          : row[i + 1].getX() - 1;
        updateMapCoordinates({ x: row[i].getX(), y: row[i]. getY() }, { x: newX, y: currentY }, mapCoordinates);
        row[i].updatePosition(newX, currentY);
        unionFlag = true;
      } else {
        this.unionCells(row[i], row[i + 1]);
        row.splice(i, 1);
        unionFlag = false;
      }
      i--;
    }
  }

  private moveRowVertical(row: Array<Cell>, direction: 'up' | 'down') {
    let unionFlag: boolean = true;
    let i: number = row.length - 2;
    while (i > -1) {
      const currentX: number = row[i].getX();
      if (row[i].getValue() !== row[i + 1].getValue() || !unionFlag) {
        const newY: number = direction === 'up'
          ? row[i + 1].getY() + 1
          : row[i + 1].getY() - 1;
        updateMapCoordinates({ x: row[i].getX(), y: row[i].getY() }, { x: currentX, y: newY }, mapCoordinates)
        row[i].updatePosition(currentX, newY);
        unionFlag = true;
      } else {
        this.unionCells(row[i], row[i + 1]);
        row.splice(i, 1);
        unionFlag = false;
      }
      i--;
    }
  }

  private horizontalMove(direction: 'left' | 'right', getStartIndex: Function) {
    let startY: number = 0;
    const coordinates: Array<string> = [...mapCoordinates];
    while (startY < boardInitParams.SIZE) {
      let startIndex = getStartIndex(this.cells, startY);
      if (startIndex === -1) {
        break;
      }
      startY = this.cells[startIndex].getY();
      const currentPosition: { x: number, y: number } = { x: this.cells[startIndex].getX(), y: startY};
      const newPosition: { x: number, y: number } = direction === 'left'
        ? { x: 0, y: startY }
        : { x: boardInitParams.SIZE - 1, y: startY };
      updateMapCoordinates(currentPosition, newPosition, mapCoordinates);
      this.cells[startIndex].updatePosition(newPosition.x, startY);
      const row: Array<Cell> = this.cells.filter((item: Cell) => item.getY() === startY);
      if (row.length > 1) {
        direction === 'left'
          ? row.sort((a: Cell, b: Cell) => b.getX() - a.getX())
          : row.sort((a, b) => a.getX() - b.getX());
        this.moveRowHorizontal(row, direction);
      }
      startY += 1;
    }
    if (this.isChanged(coordinates, mapCoordinates)) {
      setTimeout(() => this.addCell(), boardInitParams.ANIMATION_DELAY);
    }
    this.game.togglePlayPause();
  }

  private verticalMove(direction: 'up' | 'down', getStartIndex: Function) {
    let startX: number = 0;
    const coordinates: Array<string> = [...mapCoordinates];
    while (startX < boardInitParams.SIZE) {
      let startIndex = getStartIndex(this.cells, startX);
      if (startIndex === -1) {
        break;
      }
      startX = this.cells[startIndex].getX();
      const currentPosition: { x: number, y: number } = { x: startX, y: this.cells[startIndex].getY() };
      const newPosition: { x: number, y: number } = direction === 'up'
        ? { x: startX, y: 0 }
        : { x: startX, y: boardInitParams.SIZE - 1 };
      updateMapCoordinates(currentPosition, newPosition, mapCoordinates);
      this.cells[startIndex].updatePosition(startX, newPosition.y);
      const row = this.cells.filter((item: Cell) => item.getX() === startX);
      if (row.length > 1) {
        direction === 'up'
          ? row.sort((a, b) => b.getY() - a.getY())
          : row.sort((a, b) => a.getY() - b.getY());
        this.moveRowVertical(row, direction);
      }
      startX += 1;
    }
    if (this.isChanged(coordinates, mapCoordinates)) {
      setTimeout(() => this.addCell(), boardInitParams.ANIMATION_DELAY);
    }
    this.game.togglePlayPause();
  }

  private isChanged(newMap: Array<String>, oldMap: Array<String>) {
    return JSON.stringify(newMap) !== JSON.stringify(oldMap);
  }

  private checkSteps() {
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
    this.game.over();
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
