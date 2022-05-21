const navTemplate = (activePath = '/') => (`<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item"><a href="/" class="nav__link${ (activePath === '/') ? ' nav__link--active' : '' }">Home</a></li>
    <li class="nav__item"><a href="/blog/" class="nav__link${ activePath === '/blog/' ? ' nav__link--active' : '' }">Blog</a></li>
    <li class="nav__item"><a href="/about/" class="nav__link${ activePath === '/about/' ? ' nav__link--active' : '' }">About</a></li>
  </ul>
</nav>`);

export default navTemplate;

