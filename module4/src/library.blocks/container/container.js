import './container.scss';
import containerTemplate from './container.template';

class Container {
  constructor() {
    this.element = null;
  }

  getElement() {
    if (!this.element) {
      const temporaryElement = document.createElement('div');
      temporaryElement.innerHTML = containerTemplate();
      this.element = temporaryElement.firstElementChild;
    }
    return this.element;
  }
}

export default Container;
