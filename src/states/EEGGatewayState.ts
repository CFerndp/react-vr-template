import { RESTGateway } from "../gateways/RESTGateway/RESTGateway";
import { TestGateway } from "../gateways/TestGateway/TESTGateway";
import { EEGGateway } from "./../gateways/EEGGateway/EEGGateway";
import { atom, useRecoilValue } from "recoil";

const EEGGatewayAtom = atom<EEGGateway>({
  key: "eegGateway", // unique ID (with respect to other atoms/selectors)
  //   default: new RESTGateway(), // default value (aka initial value)
  default: new TestGateway(),
});

export const useEEGGateway = () => {
  return useRecoilValue(EEGGatewayAtom);
};
