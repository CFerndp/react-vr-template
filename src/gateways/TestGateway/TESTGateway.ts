import { EEGGateway } from "../EEGGateway/EEGGateway";

export class TestGateway implements EEGGateway {
  async startExperiment(marker: number): Promise<void> {
    console.log("Start experiment at " + new Date() + " with id " + marker);
  }
  async recordTimestamp(marker: number): Promise<void> {
    console.log(
      "Record Timestamp experiment at " + new Date() + " with id " + marker
    );
  }
  async stop(): Promise<void> {
    console.log("Stop experiment at " + new Date());
  }
}
