import './header.scss';
import headerTemplate from './header.template';

import Logo from '../../library.blocks/logo/logo';
import BurgerButton from '../../library.blocks/burger-button/burger-button';
import Nav from '../../library.blocks/nav/nav';

class Header {
  constructor() {
    this.element = null;
    this.logo = new Logo();
    this.burger = new BurgerButton();
    this.nav = new Nav(window.location.pathname);
  }

  getElement() {
    if (!this.element) {
      const temporaryElement = document.createElement('div');
      temporaryElement.innerHTML = headerTemplate();
      this.element = temporaryElement.firstElementChild;
      this.element.querySelector('.header__logo').append(this.logo.getElement());
      this.element.querySelector('.header__burger').append(this.burger.getElement());
      this.element.querySelector('.header__nav').append(this.nav.getElement());
    }
    return this.element;
  }

  setMenuHandler() {
    this.burger.getElement().addEventListener('click', this.mobileNavHandler.bind(this));
  }

  mobileNavHandler() {
    if (this.burger.getState()) {
      this.burger.setStateFalse();
      this.nav.getElement().parentElement.classList.remove('header__nav--active');
    } else {
      this.burger.setStateTrue();
      this.nav.getElement().parentElement.classList.add('header__nav--active');
    }
  }

}

export default Header;
