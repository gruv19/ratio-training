import Game from '../game/game';


class TimeCounter {
  private game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  async start() {
    await fetch('http://localhost:3000/api/v1/time_start/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ game: this.game.getInProgress() }),
    });
  }

  async stop() {
    await fetch('http://localhost:3000/api/v1/time_stop/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ game: this.game.getInProgress() }),
    });
  }
}

export default TimeCounter;
