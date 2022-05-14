import '../../style/font.scss';
import '../../style/global.scss';
import Header from '../../common.blocks/header/header';
import Container from '../../library.blocks/container/container';
import PageName from '../../library.blocks/page-name/page-name';
import AboutContent from '../../library.blocks/about-content/about-content';

let content = await fetch('https://course.7t33n.ru/rest/v1/about');
content = await content.json();
content = content.content;

const header = new Header();
const pageContainer = new Container('about');
const aboutPageName = new PageName('About nuntium');
const aboutContent = new AboutContent(content);

app.append(header.getElement());
app.append(pageContainer.getElement());
pageContainer.getElement().append(aboutPageName.getElement());
pageContainer.getElement().append(aboutContent.getElement());

header.setMenuHandler();
