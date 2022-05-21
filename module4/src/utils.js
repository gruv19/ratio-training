const setSEO = (title = 'nuntium.', description = '', keywords = '') => {
  const headElement = document.querySelector('head');
  const titleElement = headElement.querySelector('title');

  if (description) {
    headElement.insertAdjacentHTML('afterbegin', `<meta name="description" content="${ description }" />`);
  }
  if (keywords) {
    headElement.insertAdjacentHTML('afterbegin', `<meta name="keywords" content="${ keywords }" />`);
  }
  titleElement.textContent = title;
};

const formatDate = (dateAsNumber) => new Date(dateAsNumber).toLocaleDateString('en-EN', { month: 'long', day: 'numeric',  year: 'numeric' });

const formatReadTime = (readTimeInSeconds) => Math.ceil(readTimeInSeconds / 60);

const renderArticles = (from, to, renderContainer, renderHandler, articleContent) => {
  for (let i = from; i >= to; i--) {
    const defaultArticleCard = renderHandler(articleContent[i]);
    renderContainer.append(defaultArticleCard);
  }
}

export {
  setSEO,
  formatDate,
  formatReadTime,
  renderArticles,
};
