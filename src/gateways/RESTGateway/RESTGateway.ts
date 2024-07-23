import axios from "axios";
import { EEGGateway } from "../EEGGateway/EEGGateway";
import { RestPaths } from "./types";
import { getBaseUrl, getRestPaths } from "./utils";

export class RESTGateway implements EEGGateway {
  private REST_PATHS: RestPaths;

  constructor(ip: string, port: string) {
    const baseUrl = getBaseUrl(ip, port);
    this.REST_PATHS = getRestPaths(baseUrl);
  }

  async makePostRequest(url: string, data: unknown = {}) {
    return await axios.post(url, data);
  }

  async startExperiment(marker: number): Promise<void> {
    await this.makePostRequest(`${this.REST_PATHS.START_EXPERIMENT}/${marker}`);
  }
  async recordTimestamp(marker: number): Promise<void> {
    await this.makePostRequest(`${this.REST_PATHS.RECORD_TIMESTAMP}/${marker}`);
  }
  async stop(): Promise<void> {
    await this.makePostRequest(this.REST_PATHS.STOP);
  }
}
