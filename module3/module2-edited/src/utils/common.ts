function randomNumber(min: number, max: number): number {
  return Math.floor( Math.random() * (max + 1 - min) + min );
}

function removeElementFromArray(elementIdx: number, array: any) {
  array.splice(elementIdx, 1);
}

function timeNormalize(time: number) {
  const msec: number = time % 10;
  time = Math.trunc(time / 10);
  const seconds: number = time % 60;
  time = Math.trunc(time / 60);
  const minutes: number = time % 60;
  time = Math.trunc(time / 60);
  return `${(time <= 9) ? `0${time}` : time}:${(minutes <= 9) ? `0${minutes}` : minutes}:${(seconds <= 9) ? `0${seconds}` : seconds}.${msec}`;
}

export {
  randomNumber,
  removeElementFromArray,
  timeNormalize
}
