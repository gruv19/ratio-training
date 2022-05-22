import './logo.scss';
import imageSrc from './logo.png';
import { base } from '../../utils';

const logo = () => {
  let logoElement = null;
  if (window.location.pathname === base || window.location.pathname === `${base}index.html`) {
    logoElement = new Image();
    logoElement.src = imageSrc;
    logoElement.classList.add('logo');
  } else {
    const logoImage = new Image();
    logoImage.src = imageSrc;
    logoImage.classList.add('logo__image');

    logoElement = document.createElement('a');
    logoElement.classList.add('logo');
    logoElement.setAttribute('href', base);
    logoElement.append(logoImage);
  }

  return logoElement;
}

export default logo;
