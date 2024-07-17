export interface EEGGateway {
  startExperiment(marker: string): Promise<void>;
  recordTimestamp(marker: string): Promise<void>;
  stop(): Promise<void>;
}
