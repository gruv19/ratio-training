import { base } from "../../utils";

const navTemplate = (activePath = '/') => (`<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item"><a href="${base}" class="nav__link${ (activePath === base) ? ' nav__link--active' : '' }">Home</a></li>
    <li class="nav__item"><a href="${base}blog/" class="nav__link${ (activePath === `${base}blog/` || activePath === `${base}blog`) ? ' nav__link--active' : '' }">Blog</a></li>
    <li class="nav__item"><a href="${base}about/" class="nav__link${ (activePath === `${base}about/` || activePath === `${base}about`) ? ' nav__link--active' : '' }">About</a></li>
  </ul>
</nav>`);

export default navTemplate;

