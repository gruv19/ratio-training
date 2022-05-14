import './nav.scss';
import navTemplate from './nav.template';

class Nav {
  constructor(path) {
    this.state = false;
    this.element = null;
    this.path = path;
  }

  getElement() {
    if (!this.element) {
      const temporaryElement = document.createElement('div');
      temporaryElement.innerHTML = navTemplate(this.path);
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
