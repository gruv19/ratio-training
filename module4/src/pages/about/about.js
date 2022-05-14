import '../../style/font.scss';
import '../../style/global.scss';
import Header from '../../common.blocks/header/header';
import Container from '../../library.blocks/container/container';
import PageName from '../../library.blocks/page-name/page-name';

const header = new Header();
const pageContainer = new Container('about');
const aboutPageName = new PageName('About nuntium')

const content = `<p>
  Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore.
  Aliquip consectetur labore consectetur dolor exercitation est minim quis.
  Magna non irure qui ex est laborum nulla excepteur qui.
  Anim Lorem dolore cupidatat pariatur ex tempor.
  Duis ea excepteur proident ex commodo irure est.
</p>
<p>
  Nisi commodo qui pariatur enim sint laborum consequat enim in officia.
  Officia fugiat incididunt commodo et mollit aliqua non aute.
  Enim dolor eiusmod aliqua amet ipsum in enim eiusmod.
  Quis exercitation sit velit duis.
</p>
<p>
  Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore.
  Aliquip consectetur labore consectetur dolor exercitation est minim quis.
  Magna non irure qui ex est laborum nulla excepteur qui.
  Anim Lorem dolore cupidatat pariatur ex tempor.
  Duis ea excepteur proident ex commodo irure est.
</p>`

app.append(header.getElement());
app.append(pageContainer.getElement());
pageContainer.getElement().append(aboutPageName.getElement());
pageContainer.getElement().insertAdjacentHTML('beforeend', content);

header.setMenuHandler();
