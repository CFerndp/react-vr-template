import { RestPaths } from "./types";

export const getBaseUrl = (ip: string, port: string) =>
  `https://${ip}:${port}/enobio_binding`;

export const getRestPaths = (baseUrl: string): RestPaths => ({
  START_EXPERIMENT: `${baseUrl}/start_experiment`,
  RECORD_TIMESTAMP: `${baseUrl}/record_timestamp`,
  STOP: `${baseUrl}/stop`,
});
