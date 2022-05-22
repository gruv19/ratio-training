import about from './views/about';
import article from './views/article';
import blog from './views/blog';
import home from './views/home';
import error from './views/error';
import { base } from './utils';

const routes = [
  { path: `${base}blog/article/[a-zA-Z0-9]+`, component: article },
  { path: `${base}about/?`, component: about },
  { path: `${base}blog/?`, component: blog },
  { path: `${base}?`, component: home },
];

const parseLocation = () => {
  let currentPath = window.location.pathname;
  if (currentPath === base || currentPath === `${base}index.html`) {
    history.pushState(null, null, base);
    return base;
  }
  return `${base}${currentPath.replace(base, '').replace(/[^a-zA-Z0-9/]/g, '')}`;
}

const getComponent = (path) => {
  const routeIdx = routes.findIndex((route) => path.match( new RegExp(`^${route.path}$`, 'gi') ));
  if (routeIdx > -1) {
    return routes[routeIdx].component;
  }
  return null;
};

const router = () => {
  const path = parseLocation();
  const component = getComponent(path);
  if (component) {
    component().catch((e) => error(`Что-то пошло не так...`));
  } else {
    error('Такой страницы не существует');
  }
};

export default router;
