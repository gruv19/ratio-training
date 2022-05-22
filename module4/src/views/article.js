import header from '../components/header/header';
import container from '../components/container/container';
import fullArticle from '../components/full-article/full-article';
import { setSEO } from '../utils';
import pagination from '../components/pagination/pagination';

const article = async () => {
  const pathArray = window.location.pathname.split('/');
  const articleId = pathArray[pathArray.length - 1];

  const articleContent = await (await fetch(`https://course.7t33n.ru/rest/v1/blog/article/${articleId}`)).json();

  const nextArticle = (articleContent.nextId !== null) ? await (await fetch(`https://course.7t33n.ru/rest/v1/blog/article/${articleContent.nextId}`)).json() : { id: -1, title: ''};
  const prevArticle = (articleContent.prevId !== null) ? await (await fetch(`https://course.7t33n.ru/rest/v1/blog/article/${articleContent.prevId}`)).json() : { id: -1, title: ''};

  const appContainer = document.querySelector('#app');
  appContainer.innerHTML = '';

  setSEO(`nuntium. - ${articleContent.seo.title}`, articleContent.seo.description, articleContent.seo.keywords);

  const headerElement = header();
  appContainer.append(headerElement);

  const contentContainer = container('article');
  appContainer.append(contentContainer);

  const fullArticleElement = fullArticle(articleContent)
  contentContainer.append(fullArticleElement);

  appContainer.append(pagination(prevArticle, nextArticle))
};

export default article;
