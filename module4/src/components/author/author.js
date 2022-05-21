import './author.scss';
import authorTemplate from './author.template';

const author = (authorData) => {
  const temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = authorTemplate(authorData);

  return temporaryElement.firstElementChild;
};

export default author;
