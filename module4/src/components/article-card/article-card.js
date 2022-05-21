import './article-card.scss';
import articleCardemplate from './article-card.template';

const articleCard = (content, type = 'default') => {
  const temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = articleCardemplate(content, type);
  const articleCard = temporaryElement.firstElementChild;

  return articleCard;
};

export default articleCard;
