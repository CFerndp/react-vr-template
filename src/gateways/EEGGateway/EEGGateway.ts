export interface EEGGateway {
  startExperiment(): Promise<void>;
  recordTimestamp(id: number): Promise<void>;
  stop(): Promise<void>;
}
