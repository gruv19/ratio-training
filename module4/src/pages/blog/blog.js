import '../../style/font.scss';
import '../../style/global.scss';
import Header from '../../common.blocks/header/header';
import Container from '../../library.blocks/container/container';
import Article from '../../common.blocks/article/article';
import Title from '../../library.blocks/title/title';
import { setSEO } from '../../utils';

const header = new Header();
const featuredArtice = new Article('featured');
const articlesContainer = new Container('blog');
const title = new Title();
const articlesCount = 6;

setSEO('nuntium. - blog');

app.append(header.getElement());
app.append(featuredArtice.getElement());
app.append(articlesContainer.getElement());
articlesContainer.getElement().append(title.getElement());
for (let i = 0; i < articlesCount; i++) {
  articlesContainer.getElement().append(new Article().getElement());
}
header.setMenuHandler();
