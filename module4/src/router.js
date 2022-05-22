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
  if (currentPath[currentPath.length - 1] === '/') {
    currentPath = currentPath.substring(0, currentPath.length - 1);
  }
  if (currentPath !== `${base}index.html`) {
    currentPath = currentPath.replace(/[^a-zA-Z0-9/]/g, '');
  } else {
    currentPath = base;
    history.pushState(null, null, currentPath);
  }
  return currentPath.length ? currentPath : base;
}

const getComponent = (path) => {
  const routeIdx = routes.findIndex((route) => path.match( new RegExp(`^${route.path}$`, 'gi') ));
  if (routeIdx > -1) {
    return routes[routeIdx].component;
  }
  return null;
};

const router = () => {
  console.log(import.meta.env);
  const path = parseLocation();
  const component = getComponent(path);
  console.log(path);
  console.log(component);
  if (component) {
    component().catch((e) => error(`Что-то пошло не так...`));
  } else {
    error('Такой страницы не существует');
  }
};

export default router;
