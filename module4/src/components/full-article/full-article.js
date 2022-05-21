import './full-article.scss';
import fullArticleTemplate from './full-article.template';
import authorElement from '../author/author';

const fullArticle = (articleContent) => {
  const { author } = articleContent;
  const temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = fullArticleTemplate(articleContent);

  const fullArticleElement = temporaryElement.firstElementChild;
  const authotElement = authorElement(author);
  fullArticleElement.querySelector('.full-article__author').append(authotElement);

  return fullArticleElement;
};

export default fullArticle;
