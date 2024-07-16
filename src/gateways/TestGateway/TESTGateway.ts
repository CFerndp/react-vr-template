import { EEGGateway } from "../EEGGateway/EEGGateway";

export class TestGateway implements EEGGateway {
  async startExperiment(id: number): Promise<void> {
    console.log("Start experiment at " + new Date() + " with id " + id);
  }
  async recordTimestamp(id: number): Promise<void> {
    console.log(
      "Record Timestamp experiment at " + new Date() + " with id " + id
    );
  }
  async stop(): Promise<void> {
    console.log("Stop experiment at " + new Date());
  }
}
