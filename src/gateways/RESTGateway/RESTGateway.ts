import { EEGGateway } from "../EEGGateway/EEGGateway";
import { REST_PATHS } from "./constants";

export class RESTGateway implements EEGGateway {
  async startExperiment(): Promise<void> {
    await fetch(REST_PATHS.START_EXPERIMENT, { method: "POST" });
  }
  async recordTimestamp(): Promise<void> {
    await fetch(REST_PATHS.RECORD_TIMESTAMP, { method: "POST" });
  }
  async stop(): Promise<void> {
    await fetch(REST_PATHS.START_EXPERIMENT, { method: "POST" });
  }
}
