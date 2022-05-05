import express from 'express';
import { PORT } from './consts';
import ModelTime from './ModelTime';
import PresenterTime from './PresenterTime';
import ModelScore from './ModelScore';
import PresenterScore from './PresenterScore';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const modelTimeInstance = new ModelTime();
const presenterTimeInstance = new PresenterTime();
presenterTimeInstance.setModel(modelTimeInstance);

const modelScoreInstance = new ModelScore();
const presenterScoreInstance = new PresenterScore();
presenterScoreInstance.setModel(modelScoreInstance);

app.get('/api/v1/record/', presenterTimeInstance.loadRecordsTable.bind(presenterTimeInstance));

app.post('/api/v1/record/', presenterTimeInstance.saveOneRecord.bind(presenterTimeInstance));

app.post('/api/v1/time_start', presenterTimeInstance.startTimer.bind(presenterTimeInstance));

app.post('/api/v1/time_stop', presenterTimeInstance.stopTimer.bind(presenterTimeInstance));

app.post('/api/v1/init', presenterTimeInstance.resetGame.bind(presenterTimeInstance));

app.get('/api/v1/score_record/', presenterScoreInstance.loadRecordsTable.bind(presenterScoreInstance));

app.post('/api/v1/score_record/', presenterScoreInstance.saveOneRecord.bind(presenterScoreInstance));

app.listen(PORT, () => {
  console.log(`Server run on ${PORT}`);
});
