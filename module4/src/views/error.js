import { setSEO } from '../utils';
import errorContent from '../components/error-content/error-content';

const error = (error) => {
  setSEO('nuntium. - error');

  const appContainer = document.querySelector('#app');
  appContainer.innerHTML = '';

  const errorContentElement = errorContent(error);
  appContainer.append(errorContentElement);
};

export default error;
