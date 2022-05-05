import { MongoClient } from 'mongodb';
import DB_URL from './db';


class ModelScore {
  private db: any;

  constructor() {
    MongoClient.connect(DB_URL, (err: any, db: any) => {
      if (err) {
        throw err;
      }
      this.db = db.db('game2048');
    });
  }

  getAllRecords(response: any) {
    this.db.collection('score_records').find().toArray((err: any, result: any) => {
      if (err) {
        throw err;
      }
      response.send(result);
    });
  }

  addOneRecord(data: { username: string; score: number }, response: any) {
    this.db.collection('score_records').insertOne(data, (err: any, result: any) => {
      if (err) {
        throw err;
      } else {
        response.send('Ok');
      }
    });
  }
}

export default ModelScore;
