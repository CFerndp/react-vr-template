import { RESTGateway } from "../gateways/RESTGateway/RESTGateway";
// import { TestGateway } from "../gateways/TestGateway/TESTGateway";
import { EEGGateway } from "./../gateways/EEGGateway/EEGGateway";
import { atom } from "recoil";

export const EEGGatewayAtom = atom<EEGGateway>({
  key: "eegGateway", // unique ID (with respect to other atoms/selectors)
  default: new RESTGateway("192.168.56.1", "8000"), // default value (aka initial value)
  // default: new TestGateway(),
});
