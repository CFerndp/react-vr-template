import { EEGGateway } from "../EEGGateway/EEGGateway";
import { RestPaths } from "./types";
import { getBaseUrl, getRestPaths } from "./utils";

export class RESTGateway implements EEGGateway {
  private REST_PATHS: RestPaths;

  constructor(ip: string, port: string) {
    const baseUrl = getBaseUrl(ip, port);
    this.REST_PATHS = getRestPaths(baseUrl);
  }
  async startExperiment(): Promise<void> {
    await fetch(this.REST_PATHS.START_EXPERIMENT, { method: "POST" });
  }
  async recordTimestamp(): Promise<void> {
    await fetch(this.REST_PATHS.RECORD_TIMESTAMP, { method: "POST" });
  }
  async stop(): Promise<void> {
    await fetch(this.REST_PATHS.START_EXPERIMENT, { method: "POST" });
  }
}
