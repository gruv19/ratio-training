import './page-name.scss';
import pageNameTemplate from './page-name.template';

class PageName {
  constructor(text = 'Page Name') {
    this.element = null;
    this.text = text;
  }

  getElement() {
    if (!this.element) {
      const temporaryElement = document.createElement('div');
      temporaryElement.innerHTML = pageNameTemplate(this.text);
      this.element = temporaryElement.firstElementChild;
    }
    return this.element;
  }
}

export default PageName;
