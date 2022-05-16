import { formatDate, formatReadTime } from "../../utils";

const articleTemplate = (content, type) => {
  const { id, tag, title, author, createdAt, image, readTime, description } = content;
  return (`<article class="article ${(type != 'default') ? `article--${type}` : ''}">
  ${(type === 'default') ? `<a class="article__link" href="/blog/article/${id}">` : ''}
    <img src="${image}" alt="" class="article__img">
  ${(type === 'default') ? `</a>` : ''}
  <div class="article__content">
    <p class="article__tag">${tag}</p>
    <h1 class="article__title"><a class="article__link" href="/blog/article/${id}">${title}</a></h1>
    <div class="article__meta">
      <span class="article__author">${author}</span>
      <span class="article__divider"></span>
      <span class="article__date-time">${formatDate(createdAt)} (${formatReadTime(readTime)} mins read)</span>
    </div>
    <p class="article__text">${description}</p>
  </div>
  </article>`)
};

export default articleTemplate;
