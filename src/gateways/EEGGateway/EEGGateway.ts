export interface EEGGateway {
  startExperiment(marker: number): Promise<void>;
  recordTimestamp(marker: number): Promise<void>;
  stop(): Promise<void>;
}
