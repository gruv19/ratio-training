import loading from '../components/loading/loading';
import header from '../components/header/header';
import container from '../components/container/container';
import pageName from '../components/page-name/page-name';
import aboutContent from '../components/about-content/about-content';
import { setSEO } from '../utils';

const about = async () => {
  const appContainer = document.querySelector('#app');

  const loadingElement = loading();
  appContainer.append(loadingElement);

  const data = await (await fetch('https://course.7t33n.ru/rest/v1/about')).json();

  setSEO(data.seo.title, data.seo.description, data.seo.keywords);

  appContainer.innerHTML = '';
  loadingElement.remove();

  const headerElement = header();
  appContainer.append(headerElement);

  const pageContainer = container('about');
  appContainer.append(pageContainer);

  const aboutPageName = pageName(data.title);
  pageContainer.append(aboutPageName);

  const aboutContentElement = aboutContent(data.content);
  pageContainer.append(aboutContentElement);
};

export default about;

