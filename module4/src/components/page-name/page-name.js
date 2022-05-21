import './page-name.scss';
import pageNameTemplate from './page-name.template';

const pageName = (text = 'Page Name') => {
  const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = pageNameTemplate(text);
    const pageNameElement = temporaryElement.firstElementChild;

    return pageNameElement;
}

export default pageName;
