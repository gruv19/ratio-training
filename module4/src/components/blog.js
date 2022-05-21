import Header from '../common.blocks/header/header';
import Container from '../library.blocks/container/container';
import articleCard from '../common.blocks/article-card/article-card';
import title from '../library.blocks/title/title';
import { setSEO } from '../utils';

const blog = async () => {
  setSEO('nuntium. - blog');

  const featuredArticleContent = await (await fetch('https://course.7t33n.ru/rest/v1/blog/featured/')).json();
  const articlesContent = await (await fetch('https://course.7t33n.ru/rest/v1/blog/articles/')).json();

  const appContainer = document.querySelector('#app');

  const header = new Header();
  appContainer.append(header.getElement());
  header.setMenuHandler();

  const featuredArticeCard = articleCard(featuredArticleContent, 'featured');
  appContainer.append(featuredArticeCard);

  const articlesContainer = new Container('blog');
  appContainer.append(articlesContainer.getElement());

  const pageTitle = title('Editor’s Picks');
  articlesContainer.getElement().append(pageTitle);

  for (let i = articlesContent.length - 1; i >= 0; i--) {
    const defaultArticleCard = articleCard(articlesContent[i]);
    articlesContainer.getElement().append(defaultArticleCard);
  }
};

export default blog;
