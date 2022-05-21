import about from "./components/about";
import article from "./components/article";
import blog from "./components/blog";
import home from "./components/home";

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
    component();
  } else {
    throw new Error('HUY');
  }
};

export default router;
