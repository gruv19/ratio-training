import './article.scss';
import articleTemplate from './article.template';

class Article {
  constructor(type = 'default') {
    this.type = type;
    this.element = null;
  }

  getElement() {
    if (!this.element) {
      const temporaryElement = document.createElement('div');
      temporaryElement.innerHTML = articleTemplate(this.type);
      this.element = temporaryElement.firstElementChild;
    }
    return this.element;
  }
}

export default Article;
