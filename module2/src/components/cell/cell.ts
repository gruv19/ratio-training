import './cell.css';
import { cellInitParams } from '../../const';

class Cell {
  private element: any;
  private value: number;
  private x: number;
  private y: number;

  constructor(x: number, y: number, value: number) {
    this.element = null;
    this.value = value;
    this.x = x;
    this.y = y;
  }

  getElement() {
    if (!this.element) {
      this.element = document.createElement('div');
      this.render();
      this.element.textContent = this.value;
      this.element.classList.add(`cell`, `cell--${this.value}`);
    }
    return this.element;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getValue() {
    return this.value;
  }

  updateValue() {
    this.value = this.value * 2;
    this.element.textContent = this.value;
    this.element.classList.replace(`cell--${this.value / 2}`, `cell--${this.value}`);
  }

  updatePosition(x: number, y: number) {
    if (this.x === x && this.y === y) {
      return;
    }
    this.x = x;
    this.y = y;
    this.render();
  }

  render() {
    this.element.style.left = `${this.x * cellInitParams.SIZE + (this.x + 1) * cellInitParams.GAP}px`;
    this.element.style.top = `${this.y * cellInitParams.SIZE + (this.y + 1) * cellInitParams.GAP}px`;
  }

  toBackground() {
    this.getElement().style.zIndex = '10';
  }

  toForeground() {
    this.getElement().style.zIndex = '100';
  }
}

export default Cell;
