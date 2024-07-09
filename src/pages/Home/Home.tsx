import React from "react";
import { Button } from "@nextui-org/button";
import { Link } from "wouter";
import { Routes } from "../../router/routes";

const Home: React.FC = () => {
  return (
    <div>
      <Link href={Routes.VR}>
        <Button color="primary">Go to VR P300 experiment</Button>
      </Link>
    </div>
  );
};

export default Home;
