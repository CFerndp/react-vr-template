import React from "react";
import { Button } from "@nextui-org/button";

const Home: React.FC = () => {
  return (
    <div>
      <Button onClick={() => console.log("VR!!")} color="primary">
        Go to VR P300 experiment
      </Button>
    </div>
  );
};

export default Home;
