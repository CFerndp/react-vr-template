import { useRecoilValue } from "recoil";
import {
  debugModeAtom,
  restAPIIPAtom,
  restAPIPORTAtom,
} from "../states/configState";
import { TestGateway } from "./TestGateway/TESTGateway";
import { RESTGateway } from "./RESTGateway/RESTGateway";

export const useEEGGateway = () => {
  const isDebug = useRecoilValue(debugModeAtom);
  const ip = useRecoilValue(restAPIIPAtom);
  const port = useRecoilValue(restAPIPORTAtom);

  if (isDebug) {
    return new TestGateway();
  }

  return new RESTGateway(ip, port);
};
