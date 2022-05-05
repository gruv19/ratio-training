import ModelScore from "./ModelScore";

class PresenterScore {
  private model: ModelScore | null;

  constructor() {
    this.model = null;
  }

  setModel(model: ModelScore) {
    this.model = model;
  }

  loadRecordsTable(request: any, response: any) {
    if (this.model != null) {
      this.model.getAllRecords(response);
    }
  }

  saveOneRecord(request: any, response: any) {
    if (this.model) {
      const record: { username: string; score: number } = { username: request.body.username, score: request.body.score };
      this.model.addOneRecord(record, response);
    }
  }
}


export default PresenterScore;
