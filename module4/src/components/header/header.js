import './header.scss';
import headerTemplate from './header.template';

import logo from '../logo/logo';
import burgerButton from '../burger-button/burger-button';
import nav from '../nav/nav';

const header = () => {
  const temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = headerTemplate();
  const headerElement = temporaryElement.firstElementChild;

  const logoElement = logo();
  const burgerButtonElement = burgerButton();
  const navElement = nav(window.location.pathname);

  const mobileNavHandler = () => {
    if (navElement.parentElement.classList.contains('header__nav--active')) {
      navElement.parentElement.classList.remove('header__nav--active');
    } else {
      navElement.parentElement.classList.add('header__nav--active');
    }
  }

  headerElement.querySelector('.header__logo').append(logoElement);
  headerElement.querySelector('.header__burger').append(burgerButtonElement);
  headerElement.querySelector('.header__nav').append(navElement);

  burgerButtonElement.addEventListener('click', mobileNavHandler);

  return headerElement;
}

export default header;
