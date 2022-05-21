import './about-content.scss';
import aboutContentTemplate from './about-content.template';

const aboutContent = (content) => {
  const temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = aboutContentTemplate(content);
  const aboutContentElement = temporaryElement.firstElementChild;

  return aboutContentElement;
}

export default aboutContent;
