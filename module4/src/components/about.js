import Header from '../common.blocks/header/header';
import Container from '../library.blocks/container/container';
import pageName from '../library.blocks/page-name/page-name';
import AboutContent from '../library.blocks/about-content/about-content';
import { setSEO } from '../utils';

const about = async () => {
  const data = await (await fetch('https://course.7t33n.ru/rest/v1/about')).json();

  setSEO(data.seo.title, data.seo.description, data.seo.keywords);

  const appContainer = document.querySelector('#app');
  appContainer.innerHTML = '';

  const header = new Header();
  appContainer.append(header.getElement());
  header.setMenuHandler();

  const pageContainer = new Container('about');
  appContainer.append(pageContainer.getElement());

  const aboutPageName = pageName(data.title);
  pageContainer.getElement().append(aboutPageName);

  const aboutContent = new AboutContent(data.content);
  pageContainer.getElement().append(aboutContent.getElement());
};

export default about;

