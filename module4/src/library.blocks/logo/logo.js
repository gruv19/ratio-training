import './logo.scss';
import imageSrc from './logo.png';

class Logo {
  constructor() {
    this.element = null;
  }

  getElement() {
    if (!this.element) {
      this.element = new Image();
      this.element.src = imageSrc;
      this.element.classList.add('logo');
    }
    return this.element;
  }
};

export default Logo;
