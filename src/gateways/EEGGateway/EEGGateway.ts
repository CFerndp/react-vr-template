export interface EEGGateway {
  startExperiment(): Promise<void>;
  recordTimestamp(): Promise<void>;
  stop(): Promise<void>;
}
