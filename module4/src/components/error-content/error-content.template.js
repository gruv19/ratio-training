const errorContentTemplate = (text) => (`<div class="error">
  <h1 class="error__title"></h1>
  <p class="error__text">${text}</p>
  <a class="error__link" href="/">Вернуться на главную страницу</a>
</div>`);

export default errorContentTemplate;
