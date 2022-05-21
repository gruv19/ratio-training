import './logo.scss';
import imageSrc from './logo.png';

const logo = () => {
  let logoElement = null;
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    logoElement = new Image();
    logoElement.src = imageSrc;
    logoElement.classList.add('logo');
  } else {
    const logoImage = new Image();
    logoImage.src = imageSrc;
    logoImage.classList.add('logo__image');

    logoElement = document.createElement('a');
    logoElement.classList.add('logo');
    logoElement.setAttribute('href', '/');
    logoElement.append(logoImage);
  }

  return logoElement;
}

export default logo;
