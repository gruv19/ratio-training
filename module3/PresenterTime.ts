import ModelTime from "./ModelTime";

class PresenterTime {
  private model: ModelTime | null;

  constructor() {
    this.model = null;
  }

  setModel(model: ModelTime) {
    this.model = model;
  }

  loadRecordsTable(request: any, response: any) {
    if (this.model != null) {
      this.model.getAllRecords(response);
    }
  }

  saveOneRecord(request: any, response: any) {
    if (this.model) {
      const record: { username: string; time: number } = { username: request.body.username, time: this.model.getTime() };
      this.model.addOneRecord(record, response);
    }
  }

  startTimer(request: any, response: any) {
    if (this.model) {
      this.model.setTimer(request.body.game);
      response.send('ok');
    }
  }

  stopTimer(request: any, response: any) {
    if (this.model) {
      this.model.unsetTimer();
      response.send('ok');
    }
  }

  resetGame(request: any, response: any) {
    if (this.model) {
      console.log(request.body);
      this.model.resetTimer(request.body.time, request.body.game);
      response.send('ok');
    }
  }
}


export default PresenterTime;
