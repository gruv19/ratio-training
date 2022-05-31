import Board from "../components/board/board";
import Cell from "../components/cell/cell";
import { boardInitParams } from '../const';

function setKeyDownHandler(leftKeyHandler: Function, upKeyHandler: Function, rightKeyHandler: Function, downKeyHandler: Function, thisArg: Board): void {
  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 37) {
      event.preventDefault();
      leftKeyHandler.apply(thisArg);
    } else if (event.keyCode === 38) {
      event.preventDefault();
      upKeyHandler.apply(thisArg);
    } else if (event.keyCode === 39) {
      event.preventDefault();
      rightKeyHandler.apply(thisArg);
    } else if (event.keyCode === 40) {
      event.preventDefault();
      downKeyHandler.apply(thisArg);
    } else {
      return;
    }
  })
}

function setMouseMoveHandler(leftKeyHandler: Function, upKeyHandler: Function, rightKeyHandler: Function, downKeyHandler: Function, thisArg: Board): void {
  const mouseDownPosition: { x: number, y: number } = { x: 0, y: 0 };
  const mouseUpPosition: { x: number, y: number } = { x: 0, y: 0 };

  document.addEventListener('mousedown', (e) => {
    mouseDownPosition.x = e.x;
    mouseDownPosition.y = e.y;
  });

  document.addEventListener('mouseup', (e) => {
    mouseUpPosition.x = e.x;
    mouseUpPosition.y = e.y;
    let diffX: number = Math.abs(mouseUpPosition.x - mouseDownPosition.x);
    let diffY: number = Math.abs(mouseUpPosition.y - mouseDownPosition.y);

    if (diffX >= diffY) {
      if (mouseDownPosition.x > mouseUpPosition.x) {
        leftKeyHandler.apply(thisArg);
      } else if (mouseDownPosition.x < mouseUpPosition.x) {
        rightKeyHandler.apply(thisArg);
      } else {
        return;
      }
    } else {
      if (mouseDownPosition.y > mouseUpPosition.y) {
        upKeyHandler.apply(thisArg);
      } else if (mouseDownPosition.y < mouseUpPosition.y) {
        downKeyHandler.apply(thisArg);
      } else {
        return;
      }
    }
  });

}

function setTouchHandler(leftKeyHandler: Function, upKeyHandler: Function, rightKeyHandler: Function, downKeyHandler: Function, thisArg: Board): void {
  const touchStartPosition: { x: number, y: number } = { x: 0, y: 0 };
  const touchEndPosition: { x: number, y: number } = { x: 0, y: 0 };

  document.addEventListener('touchstart', (e) => {
    touchStartPosition.x = e.changedTouches[0].clientX;
    touchStartPosition.y = e.changedTouches[0].clientY;
  });

  document.addEventListener('touchend', (e) => {
    touchEndPosition.x = e.changedTouches[0].clientX;
    touchEndPosition.y = e.changedTouches[0].clientY;
    let diffX: number = Math.abs(touchEndPosition.x - touchStartPosition.x);
    let diffY: number = Math.abs(touchEndPosition.y - touchStartPosition.y);

    if (diffX >= diffY) {
      if (touchStartPosition.x > touchEndPosition.x) {
        leftKeyHandler.apply(thisArg);
      } else if (touchStartPosition.x < touchEndPosition.x) {
        rightKeyHandler.apply(thisArg);
      } else {
        return;
      }
    } else {
      if (touchStartPosition.y > touchEndPosition.y) {
        upKeyHandler.apply(thisArg);
      } else if (touchStartPosition.y < touchEndPosition.y) {
        downKeyHandler.apply(thisArg);
      } else {
        return;
      }
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

function updateMapCoordinates(currentPosition: { x: number, y: number }, newPosition: { x: number, y: number }, map: Array<string>): void {
  if (currentPosition.x === newPosition.x && currentPosition.y === newPosition.y) {
    return;
  }
  const idx: number = map.findIndex((item: string) => item === JSON.stringify(newPosition));
  map.splice(idx, 1);
  map.push(JSON.stringify(currentPosition));
}

export {
  setKeyDownHandler,
  setMouseMoveHandler,
  setTouchHandler,
  getTopRightIndex,
  getTopLeftIndex,
  getLeftTopIndex,
  getLeftBottomIndex,
  updateMapCoordinates,
};

