import './title.scss';
import titleTemplate from './title.template';

class Title {
  constructor() {
    this.element = null;
  }

  getElement() {
    if (!this.element) {
      const temporaryElement = document.createElement('div');
      temporaryElement.innerHTML = titleTemplate();
      this.element = temporaryElement.firstElementChild;
    }
    return this.element;
  }
}

export default Title;
