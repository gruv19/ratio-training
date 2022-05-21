import './container.scss';
import containerTemplate from './container.template';

const container = (type) => {
  const temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = containerTemplate(type);
  const containerElement = temporaryElement.firstElementChild;

  return containerElement;
};

export default container;
