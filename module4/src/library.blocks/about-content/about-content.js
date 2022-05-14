import './about-content.scss';
import aboutContentTemplate from './about-content.template';

class AboutContent {
  constructor(content = '') {
    this.element = null;
    this.content = content;
  }

  getElement() {
    if (!this.element) {
      const temporaryElement = document.createElement('div');
      temporaryElement.innerHTML = aboutContentTemplate(this.content);
      this.element = temporaryElement.firstElementChild;
    }
    return this.element;
  }
}

export default AboutContent;
