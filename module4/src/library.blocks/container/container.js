import './container.scss';
import containerTemplate from './container.template';

class Container {
  constructor(type = 'default') {
    this.element = null;
    this.type = type;
  }

  getElement() {
    if (!this.element) {
      const temporaryElement = document.createElement('div');
      temporaryElement.innerHTML = containerTemplate(this.type);
      this.element = temporaryElement.firstElementChild;
    }
    return this.element;
  }
}

export default Container;
