const cellInitParams: { SIZE: number, GAP: number } = { SIZE: 50, GAP: 5 };

const boardInitParams: { SIZE: number, ANIMATION_DELAY: number } = { SIZE: 5, ANIMATION_DELAY: 200 };

const startValues: number[] = [2, 2, 2, 2, 4];

const mapCoordinates: Array<string> = [
  '{"x":0,"y":0}', '{"x":0,"y":1}', '{"x":0,"y":2}', '{"x":0,"y":3}', '{"x":0,"y":4}',
  '{"x":1,"y":0}', '{"x":1,"y":1}', '{"x":1,"y":2}', '{"x":1,"y":3}', '{"x":1,"y":4}',
  '{"x":2,"y":0}', '{"x":2,"y":1}', '{"x":2,"y":2}', '{"x":2,"y":3}', '{"x":2,"y":4}',
  '{"x":3,"y":0}', '{"x":3,"y":1}', '{"x":3,"y":2}', '{"x":3,"y":3}', '{"x":3,"y":4}',
  '{"x":4,"y":0}', '{"x":4,"y":1}', '{"x":4,"y":2}', '{"x":4,"y":3}', '{"x":4,"y":4}',
];

const game: { GOAL: number, TIME: number } = { GOAL: 2048, TIME: 9 + 590 + 590 * 60 + 990 * 60 * 60 };

export {
  cellInitParams,
  boardInitParams,
  startValues,
  mapCoordinates,
  game,
};
