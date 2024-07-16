import { Center, Sky } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import React, { useRef, useState } from "react";
import Text3D from "../../components/Text3D/Text3D";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useEEGGateway } from "../../gateways/hooks";

enum ExperimentState {
  I3,
  I2,
  I1,
  SHOW,
  HIDE,
  STOP,
}

const getTextFromState = (state: ExperimentState) => {
  switch (state) {
    case ExperimentState.I3:
      return "Experiment will start in 3s";
    case ExperimentState.I2:
      return "Experiment will start in 2s";
    case ExperimentState.I1:
      return "Experiment will start in 1s";
    case ExperimentState.STOP:
      return "Experiment stopped";
    default:
      return "";
  }
};

const getRandomNumber = () => `${Math.floor(Math.random() * 10) + 1}`;
const MAX_STIMULUS = 20;

const P300: React.FC = () => {
  const [state, setState] = useState(ExperimentState.I3);
  const [text, setText] = useState(getTextFromState(ExperimentState.I3));
  const [numberP300, setNumberP300] = useState("5");
  const [numberOfStimuluss, setNumberOfStimulus] = useState(0);

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
        setText(getTextFromState(ExperimentState.I2));
      } else if (state === ExperimentState.I2 && elapsedTime >= 1) {
        rootState.clock.start();
        setState(ExperimentState.I1);
        setText(getTextFromState(ExperimentState.I1));
      } else if (state === ExperimentState.I1 && elapsedTime >= 1) {
        setState(ExperimentState.SHOW);
        eegGateway.startExperiment();

        instructionRef.current.visible = false;
        numberP300Ref.current.visible = true;
        setNumberP300(getRandomNumber());

        rootState.clock.start();
      } else if (state === ExperimentState.SHOW && elapsedTime >= 0.1) {
        setNumberOfStimulus((numberOfStimuluss) => numberOfStimuluss + 1);
        rootState.clock.start();
        numberP300Ref.current.visible = false;
        setState(ExperimentState.HIDE);
      } else if (state === ExperimentState.HIDE && elapsedTime >= 0.3) {
        rootState.clock.start();

        setNumberP300(getRandomNumber());
        numberP300Ref.current.visible = true;

        eegGateway.recordTimestamp(numberOfStimuluss);

        if (numberOfStimuluss >= MAX_STIMULUS) {
          setState(ExperimentState.STOP);
          eegGateway.stop();
        } else {
          setState(ExperimentState.SHOW);
        }
      } else if (state === ExperimentState.STOP) {
        instructionRef.current.visible = true;
        numberP300Ref.current.visible = false;
        setText(getTextFromState(ExperimentState.STOP));
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

export default P300;
