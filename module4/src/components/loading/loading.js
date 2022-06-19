import './loading.scss';
import loadingTemplate from './loading.template';

const loading = () => {
  const temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = loadingTemplate();
  const loadingElement = temporaryElement.firstElementChild;

  return loadingElement;
};

export default loading;
