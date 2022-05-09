import './burger-button.scss';
import burgerButtonTemplate from './burger-button.template';

class BurgerButton {
  constructor() {
    this.state = false;
    this.element = null;
  }

  getElement() {
    if (!this.element) {
      const temporaryElement = document.createElement('div');
      temporaryElement.innerHTML = burgerButtonTemplate();
      this.element = temporaryElement.firstElementChild;
    }
    return this.element;
  }

  getState() {
    return this.state;
  }

  setStateTrue() {
    this.state = true;
  }

  setStateFalse() {
    this.state = false;
  }
};

export default BurgerButton;
