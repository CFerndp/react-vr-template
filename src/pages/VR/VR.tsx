import React from "react";
import VRScene from "../../scenes/VRScene/VRScene";
import PageTemplate from "../../components/PageTemplate/PageTemplate";

const VR: React.FC = () => {
  return (
    <PageTemplate fullScreen={false}>
      <VRScene />
    </PageTemplate>
  );
};

export default VR;
