import about from './views/about';
import article from './views/article';
import blog from './views/blog';
import home from './views/home';
import error from './views/error';

const routes = [
  { path: '/blog/article/[a-zA-Z0-9]+', component: article },
  { path: '/about', component: about },
  { path: '/blog', component: blog },
  { path: '/', component: home },
];

const parseLocation = () => {
  let currentPath = window.location.pathname;
  if (currentPath[currentPath.length - 1] === '/') {
    currentPath = currentPath.substring(0, currentPath.length - 1);
  }
  currentPath = currentPath.replace(/[^a-zA-Z0-9/]/g, '')
  return currentPath.length ? currentPath : '/';
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
    component().catch((e) => error(`Что-то пошло не так...${e.code}`));
  } else {
    error('Такой страницы не существует');
  }
};

export default router;
