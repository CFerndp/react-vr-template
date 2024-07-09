import { Suspense } from "react";

import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Suspense>
      <NextUIProvider>
        <Home />
      </NextUIProvider>
    </Suspense>
  );
}

export default App;
