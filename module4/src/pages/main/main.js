import '../../style/font.scss';
import '../../style/global.scss';
import Header from '../../common.blocks/header/header';

const header = new Header();

app.append(header.getElement());
header.setMenuHandler();
