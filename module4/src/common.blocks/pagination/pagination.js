import './pagination.scss';
import paginationTemplate from './pagination.template';

const pagination = (prevArticle, nextArticle) => {
  const temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = paginationTemplate(prevArticle, nextArticle);

  return temporaryElement.firstElementChild;
};

export default pagination;
