import { Center, Sky } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import React, { useRef, useState } from "react";
import Text3D from "../../components/Text3D/Text3D";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useEEGGateway } from "../../gateways/hooks";
import {
  getNumbersByOddParadigm,
  getStartMarkerFromNumber,
  getStopMarkerFromNumber,
} from "./utils";

enum ExperimentState {
  I3,
  I2,
  I1,
  SHOW,
  HIDE,
  STOP,
  END,
}

const TARGET = "2";

// Add record timpestamp from init 100ms end 100ms

const getTextFromState = (state: ExperimentState, target: string) => {
  switch (state) {
    case ExperimentState.I3:
      return `How many times appear number ${target}? Start: 3s`;
    case ExperimentState.I2:
      return `How many times appear number ${target}? Start: 2s`;
    case ExperimentState.I1:
      return `How many times appear number ${target}? Start: 1s`;
    case ExperimentState.STOP:
      return "Experiment stopped. Target: " + target;
    default:
      return "";
  }
};

const MAX_STIMULUS = 6;
const MAX_TRAIALS = 20;

export const P300: React.FC = () => {
  const [state, setState] = useState(ExperimentState.I3);
  const [text, setText] = useState(
    getTextFromState(ExperimentState.I3, TARGET)
  );
  const [numberP300, setNumberP300] = useState("5");
  const [stimulus, setStimulus] = useState<number[]>([]);
  const [numberOfTrials, setNumberOfTrials] = useState(0);

  const eegGateway = useEEGGateway();

  const instructionRef = useRef<Mesh>(null);
  const numberP300Ref = useRef<Mesh>(null);

  useFrame((rootState) => {
    const elapsedTime = rootState.clock.getElapsedTime();

    if (instructionRef.current && numberP300Ref.current) {
      if (state === ExperimentState.I3 && elapsedTime < 1) {
        // Init Frame
        numberP300Ref.current.visible = false;
      } else if (state === ExperimentState.I3 && elapsedTime >= 1) {
        rootState.clock.start();
        setState(ExperimentState.I2);
        setText(getTextFromState(ExperimentState.I2, TARGET));
      } else if (state === ExperimentState.I2 && elapsedTime >= 1) {
        rootState.clock.start();
        setState(ExperimentState.I1);
        setText(getTextFromState(ExperimentState.I1, TARGET));
      } else if (state === ExperimentState.I1 && elapsedTime >= 1) {
        setState(ExperimentState.SHOW);
        eegGateway.startExperiment(TARGET);

        instructionRef.current.visible = false;
        numberP300Ref.current.visible = true;
        const newStimulus = getNumbersByOddParadigm(MAX_STIMULUS);
        const numberToShow = newStimulus.pop();
        setStimulus(newStimulus);
        setNumberP300(numberToShow?.toString() || "");

        rootState.clock.start();
      } else if (state === ExperimentState.SHOW && elapsedTime >= 0.1) {
        rootState.clock.start();
        numberP300Ref.current.visible = false;
        setState(ExperimentState.HIDE);
        eegGateway.recordTimestamp(getStopMarkerFromNumber(numberP300));
      } else if (state === ExperimentState.HIDE && elapsedTime >= 0.3) {
        rootState.clock.start();

        let numberToShow = stimulus.pop();

        if (numberToShow === undefined) {
          setNumberOfTrials(numberOfTrials + 1);

          if (numberOfTrials < MAX_TRAIALS - 1) {
            const newStimulus = getNumbersByOddParadigm(MAX_STIMULUS);
            numberToShow = newStimulus.pop() || -1;

            setStimulus(newStimulus);
          } else {
            setState(ExperimentState.STOP);
            return;
          }
        }

        setNumberP300(numberToShow.toString() || "");
        numberP300Ref.current.visible = true;
        eegGateway.recordTimestamp(getStartMarkerFromNumber(numberToShow));
        setState(ExperimentState.SHOW);
      } else if (state === ExperimentState.STOP) {
        instructionRef.current.visible = true;
        numberP300Ref.current.visible = false;
        eegGateway.stop();
        setText(getTextFromState(ExperimentState.STOP, TARGET));
        setState(ExperimentState.END);
      }
    }
  });

  return (
    <Physics>
      <Sky
        distance={45000}
        sunPosition={[0, 4, 0]}
        inclination={0.5}
        azimuth={0.25}
      />
      <Center position={[0, 1, -5]} top>
        <Text3D color="red" ref={instructionRef}>
          {text}
        </Text3D>
      </Center>
      <Center position={[0, 1, -5]} top>
        <Text3D color="blue" ref={numberP300Ref}>
          {numberP300}
        </Text3D>
      </Center>
    </Physics>
  );
};
