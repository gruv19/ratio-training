import { cellInitParams } from '../const';

function defineInitParams(): void {
  if (window.innerWidth < 767) {
    cellInitParams.SIZE = 44;
    cellInitParams.GAP = 10;
  } else {
    cellInitParams.SIZE = 84;
    cellInitParams.GAP = 15;
  }
}

export {
  defineInitParams,
};
