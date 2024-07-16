import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const restAPIIPAtom = atom({
  key: "restAPIIP",
  default: "127.0.0.1",
  effects_UNSTABLE: [persistAtom],
});

export const restAPIPORTAtom = atom({
  key: "restAPIPORT",
  default: "8000",
  effects_UNSTABLE: [persistAtom],
});

export const debugModeAtom = atom({
  key: "debugMode",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
