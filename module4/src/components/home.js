import Header from '../common.blocks/header/header';
import Container from '../library.blocks/container/container';
import articleCard from '../common.blocks/article-card/article-card';
import Title from '../library.blocks/title/title';
import { setSEO } from '../utils';

const home = async () => {
  setSEO('nuntium. - home');

  const featuredArticleContent = await (await fetch('https://course.7t33n.ru/rest/v1/blog/featured/')).json();
  const articlesContent = await (await fetch('https://course.7t33n.ru/rest/v1/blog/articles/')).json();
  const articlesCount = 3;

  const appContainer = document.querySelector('#app');
  appContainer.innerHTML = '';

  const header = new Header();
  appContainer.append(header.getElement());
  header.setMenuHandler();

  const featuredArticleCard = articleCard(featuredArticleContent, 'featured');
  appContainer.append(featuredArticleCard);

  const articlesContainer = new Container();
  appContainer.append(articlesContainer.getElement());

  const title = new Title();
  articlesContainer.getElement().append(title.getElement());

  for (let i = articlesContent.length - 1; i >= articlesContent.length - articlesCount; i--) {
    const defaultArticleCard = articleCard(articlesContent[i]);
    articlesContainer.getElement().append(defaultArticleCard);
  }

  const bannerArticleCard = articleCard(articlesContent[articlesContent.length - articlesCount - 1], 'banner');
  appContainer.append(bannerArticleCard);
};

export default home;
