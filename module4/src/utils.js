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


export {
  setSEO,
};
