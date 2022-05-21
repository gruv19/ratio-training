import { formatDate, formatReadTime } from "../../utils";

const articleCardemplate = (content, type) => {
  const { id, tag, title, author, createdAt, image, readTime, description } = content;
  return (`<article class="article-card ${(type != 'default') ? `article-card--${type}` : ''}">
  ${(type === 'default') ? `<a class="article-card__link" href="/blog/article/${id}">` : ''}
    <img src="${image}" alt="" class="article-card__img">
  ${(type === 'default') ? `</a>` : ''}
  <div class="article-card__content">
    <p class="article-card__tag">${tag}</p>
    <h1 class="article-card__title"><a class="article-card__link" href="/blog/article/${id}">${title}</a></h1>
    <div class="article-card__meta">
      <span class="article-card__author">${author}</span>
      <span class="article-card__divider"></span>
      <span class="article-card__date-time">${formatDate(createdAt)} (${formatReadTime(readTime)} mins read)</span>
    </div>
    <p class="article-card__text">${description}</p>
  </div>
  </article>`)
};

export default articleCardemplate;
