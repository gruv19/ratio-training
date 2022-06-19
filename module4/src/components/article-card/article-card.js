import './article-card.scss';
import articleCardemplate from './article-card.template';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

const articleCard = (content, type = 'default') => {
  const temporaryElement = document.createElement('div');
  temporaryElement.innerHTML = articleCardemplate(content, type);
  const articleCard = temporaryElement.firstElementChild;

  AOS.init();
  if (type === 'default') {
    articleCard.setAttribute('data-aos', 'zoom-in');
  } else {
    articleCard.setAttribute('data-aos', 'flip-left');
    articleCard.setAttribute('data-aos-duration', '1000');
  }

  return articleCard;
};

export default articleCard;
