import React from "react";
import VRScene from "../../scenes/VRScene/VRScene";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import VRWrapper from "../../components/VRWrapper/VRWrapper";

const VR: React.FC = () => {
  return (
    <PageTemplate fullScreen={false}>
      <VRWrapper>
        <VRScene />
      </VRWrapper>
    </PageTemplate>
  );
};

export default VR;
