import { base } from "../../utils";

const paginationTemplate = (prevArticle, nextArticle) => {
  const { id: prevId = -1, title: prevTitle = '' } = prevArticle;
  const { id: nextId = -1, title: nextTitle = '' } = nextArticle;

  return `<div class="pagination${(prevId === -1) ? ' pagination--without-prev' : ''}${(nextId === -1) ? ' pagination--without-next' : ''}">
    ${(prevId > -1) ? `<div class="paginamtion__prev">
        <a class="pagintation__arrow pagintation__arrow--prev" href="${base}blog/article/${prevId}">
          <svg class="pagination__arrow-icon pagination__arrow-icon--small pagination__arrow-icon--prev" viewBox="0 0 29 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.2001 2.19971L4.80005 16.2997L27.2001 29.7997" stroke="white" stroke-width="5"/>
          </svg>
          <svg class="pagination__arrow-icon pagination__arrow-icon--big pagination__arrow-icon--prev" viewBox="0 0 74 88" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.5999 2.6001L5.3999 44.9001L72.5999 85.4001" stroke="white" stroke-width="5"/>
          </svg>
        </a>
        <div class="pagination__label">
          Go back: <a href="${base}blog/article/${prevId}" class="pagination__article-title">${prevTitle}</a>
        </div>
      </div>` : ''}
    ${(nextId > -1) ? `<div class="pagination__next">
        <div class="pagination__label">
          Next up: <a href="${base}blog/article/${(nextId > -1)}" class="pagination__article-title">${nextTitle}</a>
        </div>
        <a class="pagintation__arrow pagintation__arrow--next" href="${base}blog/article/${nextId}">
          <svg class="pagination__arrow-icon pagination__arrow-icon--small pagination__arrow-icon--next" viewBox="0 0 29 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.2001 2.19971L4.80005 16.2997L27.2001 29.7997" stroke="white" stroke-width="5"/>
          </svg>
          <svg class="pagination__arrow-icon pagination__arrow-icon--big pagination__arrow-icon--next" viewBox="0 0 74 88" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.5999 2.6001L5.3999 44.9001L72.5999 85.4001" stroke="white" stroke-width="5"/>
          </svg>
        </a>
      </div>` : ''}
  </div>`;
};

export default paginationTemplate;
