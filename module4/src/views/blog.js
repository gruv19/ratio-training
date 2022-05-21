import header from '../components/header/header';
import container from '../components/container/container';
import articleCard from '../components/article-card/article-card';
import title from '../components/title/title';
import { setSEO } from '../utils';

const blog = async () => {
  setSEO('nuntium. - blog');

  const featuredArticleContent = await (await fetch('https://course.7t33n.ru/rest/v1/blog/featured/')).json();
  const articlesContent = await (await fetch('https://course.7t33n.ru/rest/v1/blog/articles/')).json();

  const appContainer = document.querySelector('#app');

  const headerElement = header();
  appContainer.append(headerElement);

  const featuredArticeCard = articleCard(featuredArticleContent, 'featured');
  appContainer.append(featuredArticeCard);

  const articlesContainer = container('blog');
  appContainer.append(articlesContainer);

  const pageTitle = title('Editor’s Picks');
  articlesContainer.append(pageTitle);

  for (let i = articlesContent.length - 1; i >= 0; i--) {
    const defaultArticleCard = articleCard(articlesContent[i]);
    articlesContainer.append(defaultArticleCard);
  }
};

export default blog;
