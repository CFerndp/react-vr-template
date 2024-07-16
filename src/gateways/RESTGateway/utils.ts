import { store } from "../../redux/store";
import { RestPaths } from "./types";

export const getBaseUrl = (ip: string, port: string) =>
  `http://${ip}:${port}/enobio_binding`;

export const getRestPaths = (baseUrl: string): RestPaths => ({
  START_EXPERIMENT: `${baseUrl}/start_experiment`,
  RECORD_TIMESTAMP: `${baseUrl}/record_timestamp`,
  STOP: `${baseUrl}/stop`,
});

export const getPaths = (): RestPaths => {
  const baseURL = getBaseUrl(
    store.getState().config.value.restAPIIP,
    store.getState().config.value.restAPIPORT
  );

  return getRestPaths(baseURL);
};
