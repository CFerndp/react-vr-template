import { EEGGateway } from "../EEGGateway/EEGGateway";

export class TestGateway implements EEGGateway {
  async startExperiment(): Promise<void> {
    console.log("Start experiment at " + new Date());
  }
  async recordTimestamp(): Promise<void> {
    console.log("Record Timestamp experiment at " + new Date());
  }
  async stop(): Promise<void> {
    console.log("Stop experiment at " + new Date());
  }
}
