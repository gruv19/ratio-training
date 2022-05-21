const authorTemplate = (authorData) => {
  const { about, name, nick } = authorData;

  return (`<div class="author">
    <div class="author__title">ABOUT AUTHOR</div>
    <div class="author__card">
      <img src="http://zornet.ru/_fr/81/9661273.jpg" alt="" class="author__photo">
      <div class="author__main-info">
        <div class="author__name">${name}</div>
        <div class="author__link">@${nick.toLowerCase()}</div>
      </div>
      <div class="author__about">${about}</div>
    </div>
  </div>`);
};

export default authorTemplate;
