import { formatDate, formatReadTime } from "../../utils";

const fullArticleTemplate = (articleContent) => {
  const { author, createdAt, description, image, readTime, tag, title } = articleContent;

  return (`<section class="full-article">
  <img src="${image}" class="full-article__image">
  <h1 class="full-article__title">${title}</h1>
  <div class="full-article__meta">
    <span class="full-article__author-name">${author.name}</span>
    <span class="full-article__divider"></span>
    <span class="full-article__date-time">${formatDate(createdAt)} (${formatReadTime(readTime)} mins read)</span>
  </div>
  <div class="full-article__tag">#${tag.name.toLowerCase()}</div>
  <div class="full-article__content">${description}</div>
  <div class="full-article__author"></div>
</section>`);

};

export default fullArticleTemplate;
