import './nav.scss';
import navTemplate from './nav.template';

const nav = (path) => {
  const temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = navTemplate(path);
  const navElement = temporaryElement.firstElementChild;

  return navElement;
};

export default nav;
