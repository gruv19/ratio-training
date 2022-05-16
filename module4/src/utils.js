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

export {
  setSEO,
  formatDate,
  formatReadTime,
};
