import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TestGateway } from "../../../gateways/TestGateway/TESTGateway";
import { RESTGateway } from "../../../gateways/RESTGateway/RESTGateway";
import { EEGGateway } from "../../../gateways/EEGGateway/EEGGateway";

export interface ExperimentConfigState {
  value: {
    restAPIIP: string;
    restAPIPORT: string;
    debugMode: boolean;
  };
}

const initialState: ExperimentConfigState = {
  value: {
    restAPIIP: "127.0.0.1",
    restAPIPORT: "8000",
    debugMode: false,
  },
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setRestAPIIP: (state, action: PayloadAction<string>) => {
      state.value.restAPIIP = action.payload;
    },
    setRestAPIPORT: (state, action: PayloadAction<string>) => {
      state.value.restAPIPORT = action.payload;
    },
    setDebugMode: (state, action: PayloadAction<boolean>) => {
      state.value.debugMode = action.payload;
    },
  },
});

export const { setRestAPIIP, setRestAPIPORT, setDebugMode } =
  configSlice.actions;
export default configSlice.reducer;

export const selectConfigState = (state: RootState) => state.config.value;

export const selectGateway = (state: RootState): EEGGateway =>
  state.config.value.debugMode
    ? new TestGateway()
    : new RESTGateway(
        state.config.value.restAPIIP,
        state.config.value.restAPIPORT
      );
