import header from '../common.blocks/header/header';
import container from '../library.blocks/container/container';
import fullArticle from '../common.blocks/full-article/full-article';
import { setSEO } from '../utils';
import pagination from '../common.blocks/pagination/pagination';

const article = async () => {
  const articleId = window.location.pathname.split('/')[3];

  try {
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

    contentContainer.append(fullArticle(articleContent));

    appContainer.append(pagination(prevArticle, nextArticle))
  } catch (error) {
    // Отправка на страницу ошибки
    window.location.replace('/about')
  }


};

export default article;
