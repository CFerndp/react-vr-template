import { Suspense } from "react";

import { NextUIProvider } from "@nextui-org/react";
import Router from "./router/Router";

function App() {
  return (
    <Suspense>
      <NextUIProvider>
        <Router />
      </NextUIProvider>
    </Suspense>
  );
}

export default App;
