import loading from '../components/loading/loading';
import header from '../components/header/header';
import container from '../components/container/container';
import articleCard from '../components/article-card/article-card';
import title from '../components/title/title';
import { setSEO, renderArticles } from '../utils';

const blog = async () => {
  setSEO('nuntium. - blog');
  const loadArticlesCount = 4;

  const appContainer = document.querySelector('#app');

  const loadingElement = loading();
  appContainer.append(loadingElement);

  const featuredArticleContent = await (await fetch('https://course.7t33n.ru/rest/v1/blog/featured/')).json();
  const articlesContent = await (await fetch('https://course.7t33n.ru/rest/v1/blog/articles/')).json();

  appContainer.innerHTML = '';
  loadingElement.remove();

  const headerElement = header();
  appContainer.append(headerElement);

  const featuredArticeCard = articleCard(featuredArticleContent, 'featured');
  appContainer.append(featuredArticeCard);

  const articlesContainer = container('blog');
  appContainer.append(articlesContainer);

  const pageTitle = title('Editor’s Picks');
  articlesContainer.append(pageTitle);

  let startArticle = articlesContent.length - 1;
  let endArticle = (startArticle - loadArticlesCount + 1 < 0) ? 0 : startArticle - loadArticlesCount + 1;
  renderArticles(startArticle, endArticle, articlesContainer, articleCard, articlesContent);

  document.addEventListener('scroll', () => {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
      startArticle = endArticle - 1;
      endArticle = (startArticle - loadArticlesCount + 1 < 0) ? 0 : startArticle - loadArticlesCount + 1;
      renderArticles(startArticle, endArticle, articlesContainer, articleCard, articlesContent);
    }
  });
};

export default blog;
