import { Suspense } from "react";

import { NextUIProvider } from "@nextui-org/react";
import Router from "./router/Router";

import "./locales/i18n";

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
