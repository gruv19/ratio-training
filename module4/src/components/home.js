import Header from '../common.blocks/header/header';
import Container from '../library.blocks/container/container';
import Article from '../common.blocks/article/article';
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

  const featuredArticle = new Article(featuredArticleContent, 'featured');
  appContainer.append(featuredArticle.getElement());

  const articlesContainer = new Container();
  appContainer.append(articlesContainer.getElement());

  const title = new Title();
  articlesContainer.getElement().append(title.getElement());

  for (let i = articlesContent.length - 1; i >= articlesContent.length - articlesCount; i--) {
    const article = new Article(articlesContent[i]);
    articlesContainer.getElement().append(article.getElement());
  }

  const bannerArtice = new Article(articlesContent[articlesContent.length - articlesCount - 1], 'banner');
  appContainer.append(bannerArtice.getElement());
};

export default home;
