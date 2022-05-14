import '../../style/font.scss';
import '../../style/global.scss';
import Header from '../../common.blocks/header/header';
import Container from '../../library.blocks/container/container';
import PageName from '../../library.blocks/page-name/page-name';
import AboutContent from '../../library.blocks/about-content/about-content';
import { setSEO } from '../../utils';

document.addEventListener('DOMContentLoaded', async () => {
  const data = await (await fetch('https://course.7t33n.ru/rest/v1/about')).json();

  const header = new Header();
  const pageContainer = new Container('about');
  const aboutPageName = new PageName(data.title);
  const aboutContent = new AboutContent(data.content);

  const appContainer = document.querySelector('#app');

  setSEO(data.seo.title, data.seo.description, data.seo.keywords);

  appContainer.append(header.getElement());
  appContainer.append(pageContainer.getElement());
  pageContainer.getElement().append(aboutPageName.getElement());
  pageContainer.getElement().append(aboutContent.getElement());

  header.setMenuHandler();
});

