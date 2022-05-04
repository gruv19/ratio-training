import Game from "../components/game/game";

function setPlayPauseHandler(handler: any, thisArg: Game) {
  const button = document.querySelector('.menu__button--play');
  if (button) {
    button.addEventListener('click', handler.bind(thisArg));
  }
}

function setResetGameHandler(handler: any, thisArg: Game) {
  const resetButton = document.querySelector('.menu__button--reset');
  if (resetButton) {
    resetButton.addEventListener('click', handler.bind(thisArg));
  }
}

function setSaveUsernameHandler(handler: any, thisArg: Game) {
  const addUsernameButton = thisArg.getMainElement().querySelector('.username__button');
  if (addUsernameButton) {
    addUsernameButton.addEventListener('click', handler.bind(thisArg));
  }
}

export {
  setPlayPauseHandler,
  setResetGameHandler,
  setSaveUsernameHandler,
};
