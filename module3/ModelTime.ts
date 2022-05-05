import { MongoClient } from 'mongodb';
import { MAX_TIME } from './consts';
import DB_URL from './db';


class ModelTime {
  private db: any;
  private timer: any;
  private time: number;
  private game: boolean;

  constructor() {
    MongoClient.connect(DB_URL, (err: any, db: any) => {
      if (err) {
        throw err;
      }
      this.db = db.db('game2048');
    });
    this.time = 0;
    this.timer = 0;
    this.game = true;
  }

  getAllRecords(response: any) {
    this.db.collection('time_records').find().toArray((err: any, result: any) => {
      if (err) {
        throw err;
      }
      response.send(result);
    });
  }

  getTime() {
    return this.time;
  }

  addOneRecord(data: { username: string; time: number }, response: any) {
    this.game = false;
    this.db.collection('time_records').insertOne(data, (err: any, result: any) => {
      if (err) {
        throw err;
      } else {
        response.send(`${data.time}`);
      }
    });
  }

  setTimer(game: boolean) {
    this.game = game;
    if (this.time >= MAX_TIME) {
      return;
    }
    this.timer = setInterval(() => {
      this.time += 1;
      console.log(this.time);
      if (this.game === false) {
        this.unsetTimer();
      }
      if (this.time >= MAX_TIME) {
        this.unsetTimer();
      }
    }, 100);
  }

  unsetTimer() {
    clearInterval(this.timer);
    this.timer = 0;
  }

  resetTimer(time: number, game: boolean) {
    this.unsetTimer();
    this.time = time;
    this.game = game;
  }
}

export default ModelTime;
