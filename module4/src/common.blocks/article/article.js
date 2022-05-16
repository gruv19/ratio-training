import './article.scss';
import articleTemplate from './article.template';

class Article {
  constructor(content, type = 'default') {
    this.type = type;
    this.element = null;
    this.content = content;
  }

  getElement() {
    if (!this.element) {
      const temporaryElement = document.createElement('div');
      temporaryElement.innerHTML = articleTemplate(this.content, this.type);
      this.element = temporaryElement.firstElementChild;
    }
    return this.element;
  }
}

export default Article;
