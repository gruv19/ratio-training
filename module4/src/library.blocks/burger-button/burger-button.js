import './burger-button.scss';
import burgerButtonTemplate from './burger-button.template';

const burgerButton = () => {
  const temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = burgerButtonTemplate();
  const burgerButtonElement = temporaryElement.firstElementChild;

  return burgerButtonElement;
};

export default burgerButton;
