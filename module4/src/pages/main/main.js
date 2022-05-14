import '../../style/font.scss';
import '../../style/global.scss';
import Header from '../../common.blocks/header/header';
import Container from '../../library.blocks/container/container';
import Article from '../../common.blocks/article/article';
import Title from '../../library.blocks/title/title';
import { setSEO } from '../../utils';

const header = new Header();
const featuredArtice = new Article('featured');
const articlesContainer = new Container();
const title = new Title();
const artice1 = new Article();
const artice2 = new Article();
const artice3 = new Article();
const bannerArtice = new Article('banner');

setSEO('nuntium. - main');

app.append(header.getElement());
app.append(featuredArtice.getElement());
app.append(articlesContainer.getElement());
articlesContainer.getElement().append(title.getElement());
articlesContainer.getElement().append(artice1.getElement());
articlesContainer.getElement().append(artice2.getElement());
articlesContainer.getElement().append(artice3.getElement());
app.append(bannerArtice.getElement());
header.setMenuHandler();
