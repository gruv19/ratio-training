import Header from '../common.blocks/header/header';
import Container from '../library.blocks/container/container';
import Article from '../common.blocks/article/article';
import Title from '../library.blocks/title/title';
import { setSEO } from '../utils';

const blog = async () => {
  setSEO('nuntium. - blog');

  const featuredArticleContent = await (await fetch('https://course.7t33n.ru/rest/v1/blog/featured/')).json();
  const articlesContent = await (await fetch('https://course.7t33n.ru/rest/v1/blog/articles/')).json();

  const appContainer = document.querySelector('#app');

  const header = new Header();
  appContainer.append(header.getElement());
  header.setMenuHandler();

  const featuredArtice = new Article(featuredArticleContent, 'featured');
  appContainer.append(featuredArtice.getElement());

  const articlesContainer = new Container('blog');
  appContainer.append(articlesContainer.getElement());

  const title = new Title();
  articlesContainer.getElement().append(title.getElement());

  for (let i = articlesContent.length - 1; i >= 0; i--) {
    const article = new Article(articlesContent[i]);
    articlesContainer.getElement().append(article.getElement());
  }
};

export default blog;
