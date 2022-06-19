import loading from '../components/loading/loading';
import header from '../components/header/header';
import container from '../components/container/container';
import articleCard from '../components/article-card/article-card';
import title from '../components/title/title';
import { setSEO } from '../utils';

const home = async () => {
  setSEO('nuntium. - home');

  const appContainer = document.querySelector('#app');
  appContainer.innerHTML = '';

  const loadingElement = loading();
  appContainer.append(loadingElement);

  const featuredArticleContent = await (await fetch('https://course.7t33n.ru/rest/v1/blog/featured/')).json();
  const articlesContent = await (await fetch('https://course.7t33n.ru/rest/v1/blog/articles/')).json();
  const articlesCount = 3;

  appContainer.innerHTML = '';
  loadingElement.remove();

  const headerElement = header();
  appContainer.append(headerElement);

  const featuredArticleCard = articleCard(featuredArticleContent, 'featured');
  appContainer.append(featuredArticleCard);

  const articlesContainer = container();
  appContainer.append(articlesContainer);

  const pageTitle = title('Editor’s Picks');
  articlesContainer.append(pageTitle);

  for (let i = articlesContent.length - 1; i >= articlesContent.length - articlesCount; i--) {
    const defaultArticleCard = articleCard(articlesContent[i]);
    articlesContainer.append(defaultArticleCard);
  }

  const bannerArticleCard = articleCard(articlesContent[articlesContent.length - articlesCount - 1], 'banner');
  appContainer.append(bannerArticleCard);

};

export default home;
