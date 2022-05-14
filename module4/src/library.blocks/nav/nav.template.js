const navTemplate = (activePath = '/') => (`<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item"><a href="/" class="nav__link${ (activePath === '/' || activePath === '/index.html') ? ' nav__link--active' : '' }">Home</a></li>
    <li class="nav__item"><a href="/blog.html" class="nav__link${ activePath === '/blog.html' ? ' nav__link--active' : '' }">Blog</a></li>
    <li class="nav__item"><a href="/about.html" class="nav__link${ activePath === '/about.html' ? ' nav__link--active' : '' }">About</a></li>
  </ul>
</nav>`);

export default navTemplate;

