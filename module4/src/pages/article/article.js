import '../../style/font.scss';
import '../../style/global.scss';
// import Header from '../../common.blocks/header/header';
import { setSEO } from '../../utils';

document.addEventListener('DOMContentLoaded', async () => {
  // const data = await (await fetch('https://course.7t33n.ru/rest/v1/about')).json();

  // setSEO(data.seo.title, data.seo.description, data.seo.keywords);
  setSEO('nuntium. - article');
});
