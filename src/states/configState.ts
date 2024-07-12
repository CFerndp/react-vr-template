import { atom } from "recoil";

export const restAPIIPAtom = atom({
  key: "restAPIIP",
  default: "127.0.0.1",
});

export const restAPIPORTAtom = atom({
  key: "restAPIPORT",
  default: "8000",
});

export const debugModeAtom = atom({
  key: "debugMode",
  default: false,
});
