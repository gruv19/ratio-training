import './nav.scss';
import navTemplate from './nav.template';

class Nav {
  constructor() {
    this.state = false;
    this.element = null;
  }

  getElement() {
    if (!this.element) {
      const temporaryElement = document.createElement('div');
      temporaryElement.innerHTML = navTemplate();
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

export default Nav;
