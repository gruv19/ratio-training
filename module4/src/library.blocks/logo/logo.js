import './logo.scss';
import imageSrc from './logo.png';

class Logo {
  constructor() {
    this.element = null;
  }

  getElement() {
    if (!this.element) {
      if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        this.element = new Image();
        this.element.src = imageSrc;
        this.element.classList.add('logo');
      } else {
        const logoImage = new Image();
        logoImage.src = imageSrc;
        logoImage.classList.add('logo__image');

        this.element = document.createElement('a');
        this.element.classList.add('logo');
        this.element.setAttribute('href', '/');
        this.element.append(logoImage);
      }
    }
    return this.element;
  }
};

export default Logo;
