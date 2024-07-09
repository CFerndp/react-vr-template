import React from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import TwoDScene from "../../scenes/TwoDScene/TwoDScene";

const TwoD: React.FC = () => {
  return (
    <PageTemplate fullScreen={false}>
      <TwoDScene />
    </PageTemplate>
  );
};

export default TwoD;
