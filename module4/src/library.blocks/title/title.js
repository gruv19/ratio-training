import './title.scss';
import titleTemplate from './title.template';

const title = (text) => {
  const temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = titleTemplate(text);
  const titleElement = temporaryElement.firstElementChild;

  return titleElement;
};

export default title;
