import Board from "../components/board/board";
import Cell from "../components/cell/cell";
import { boardInitParams } from '../const';

function setKeyDownHandler(leftKeyHandler: Function, upKeyHandler: Function, rightKeyHandler: Function, downKeyHandler: Function, thisArg: Board) {
  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 37) {
      if (thisArg.getGameUsername()) {
        event.preventDefault();
        leftKeyHandler.apply(thisArg);
      } else {
        if (thisArg.getGameUsernameInput() !== document.activeElement) {
          alert('Необходимо ввести имя игрока');
        }
      }
    } else if (event.keyCode === 38) {
      if (thisArg.getGameUsername()) {
        event.preventDefault();
        upKeyHandler.apply(thisArg);
      } else {
        if (thisArg.getGameUsernameInput() !== document.activeElement) {
          alert('Необходимо ввести имя игрока');
        }
      }
    } else if (event.keyCode === 39) {
      if (thisArg.getGameUsername()) {
        event.preventDefault();
        rightKeyHandler.apply(thisArg);
      } else {
        if (thisArg.getGameUsernameInput() !== document.activeElement) {
          alert('Необходимо ввести имя игрока');
        }
      }
    } else if (event.keyCode === 40) {
      if (thisArg.getGameUsername()) {
        event.preventDefault();
        downKeyHandler.apply(thisArg);
      } else {
        if (thisArg.getGameUsernameInput() !== document.activeElement) {
          alert('Необходимо ввести имя игрока');
        }
      }
    } else {
      return;
    }
  });
}

function getTopRightIndex(array: any, from: number): number {
  for (let i = from; i < boardInitParams.SIZE; i++) {
    let topRightIndex: number = -1;
    for (let j = boardInitParams.SIZE - 1; j > -1; j--) {
      topRightIndex = array.findIndex((item: Cell) => item.getX() === j && item.getY() === i);
      if (topRightIndex > -1) {
        return topRightIndex;
      }
    }
  }
  return -1;
}

function getTopLeftIndex(array: any, from: number): number {
  for (let i = from; i < boardInitParams.SIZE; i++) {
    let topRightIndex: number = -1;
    for (let j = 0; j < boardInitParams.SIZE; j++) {
      topRightIndex = array.findIndex((item: Cell) => item.getX() === j && item.getY() === i);
      if (topRightIndex > -1) {
        return topRightIndex;
      }
    }
  }
  return -1;
}

function getLeftTopIndex(array: any, from: number): number {
  for (let i = from; i < boardInitParams.SIZE; i++) {
    let topRightIndex = -1;
    for (let j = 0; j < boardInitParams.SIZE; j++) {
      topRightIndex = array.findIndex((item: Cell) => item.getX() === i && item.getY() === j);
      if (topRightIndex > -1) {
        return topRightIndex;
      }
    }
  }
  return -1;
}

function getLeftBottomIndex(array: any, from: number): number {
  for (let i = from; i < boardInitParams.SIZE; i++) {
    let leftBottomIndex = -1;
    for (let j = boardInitParams.SIZE - 1; j > -1; j--) {
      leftBottomIndex = array.findIndex((item: Cell) => item.getX() === i && item.getY() === j);
      if (leftBottomIndex > -1) {
        return leftBottomIndex;
      }
    }
  }
  return -1;
}

function updateMapCoordinates(currentPosition: { x: number, y: number }, newPosition: { x: number, y: number }, map: Array<string>) {
  if (currentPosition.x === newPosition.x && currentPosition.y === newPosition.y) {
    return;
  }
  const idx: number = map.findIndex((item: string) => item === JSON.stringify(newPosition));
  map.splice(idx, 1);
  map.push(JSON.stringify(currentPosition));
}

export {
  setKeyDownHandler,
  getTopRightIndex,
  getTopLeftIndex,
  getLeftTopIndex,
  getLeftBottomIndex,
  updateMapCoordinates,
};

