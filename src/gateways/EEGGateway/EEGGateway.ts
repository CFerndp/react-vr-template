export interface EEGGateway {
  startExperiment(id: number): Promise<void>;
  recordTimestamp(id: number): Promise<void>;
  stop(): Promise<void>;
}
