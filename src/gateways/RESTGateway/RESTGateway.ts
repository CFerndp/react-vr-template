import { EEGGateway } from "../EEGGateway/EEGGateway";
import { RestPaths } from "./types";
import { getBaseUrl, getRestPaths } from "./utils";

export class RESTGateway implements EEGGateway {
  private REST_PATHS: RestPaths;

  constructor(ip: string, port: string) {
    const baseUrl = getBaseUrl(ip, port);
    this.REST_PATHS = getRestPaths(baseUrl);
  }
  async startExperiment(marker: string): Promise<void> {
    await fetch(`${this.REST_PATHS.START_EXPERIMENT}/${marker}`, {
      method: "POST",
    });
  }
  async recordTimestamp(marker: string): Promise<void> {
    await fetch(`${this.REST_PATHS.RECORD_TIMESTAMP}/${marker}`, {
      method: "POST",
    });
  }
  async stop(): Promise<void> {
    await fetch(this.REST_PATHS.START_EXPERIMENT, { method: "POST" });
  }
}
