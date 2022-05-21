import './error-content.scss';
import errorContentTemplate from './error-content.template';
import title from '../title/title';

const errorContent = (text) => {
  const temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = errorContentTemplate(text);
  const errorContentElement = temporaryElement.firstElementChild;

  errorContentElement.querySelector('.error__title').append(title('Ошибка'));

  return errorContentElement;
}

export default errorContent;
