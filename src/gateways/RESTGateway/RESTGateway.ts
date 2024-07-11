import { EEGGateway } from "../EEGGateway/EEGGateway";
import { REST_PATHS } from "./constants";

class RESTGateway implements EEGGateway {
  async startExperiment(): Promise<void> {
    await fetch(REST_PATHS.START_EXPERIMENT);
  }
  async recordTimestamp(): Promise<void> {
    await fetch(REST_PATHS.RECORD_TIMESTAMP);
  }
  async stop(): Promise<void> {
    await fetch(REST_PATHS.START_EXPERIMENT);
  }
}

export default new RESTGateway();
