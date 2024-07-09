import { Center, Sky } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import React, { useEffect, useState } from "react";
import Text3D from "../../components/Text3D/Text3D";
import { useFrame } from "@react-three/fiber";

enum ExperimentState {
  I3,
  I2,
  I1,
  START,
}

const getTextFromState = (state: ExperimentState) => {
  switch (state) {
    case ExperimentState.I3:
      return "Experiment will start in 3s";
    case ExperimentState.I2:
      return "Experiment will start in 2s";
    case ExperimentState.I1:
      return "Experiment will start in 1s";
    case ExperimentState.START:
      return "Start";
  }
};

const P300: React.FC = () => {
  const [state, setState] = useState(ExperimentState.I3);
  const [text, setText] = useState(getTextFromState(ExperimentState.I3));
  const [init, setInit] = useState(false);

  useFrame(() => {
    if (!init) {
      setInit(true);
      setTimeout(() => {
        setState(ExperimentState.I2);
        setTimeout(() => {
          setState(ExperimentState.I1);
          setTimeout(() => {
            setState(ExperimentState.START);
          }, 1000);
        }, 1000);
      }, 1000);
    }
  });

  useEffect(() => {
    if (state !== ExperimentState.START) {
      setText(getTextFromState(state));
    } else {
      const interval = setInterval(() => {
        setText(`${Math.floor(Math.random() * 10) + 1}`);
      }, 400);

      return () => clearInterval(interval);
    }
  }, [state]);

  return (
    <Physics>
      <Sky
        distance={45000}
        sunPosition={[0, 4, 0]}
        inclination={0.5}
        azimuth={0.25}
      />
      <Center position={[0, 1, -5]} top>
        <Text3D color="red">{text}</Text3D>
      </Center>
    </Physics>
  );
};

export default P300;
