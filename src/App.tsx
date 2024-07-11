import { Suspense } from "react";
import { RecoilRoot } from "recoil";

import { NextUIProvider } from "@nextui-org/react";
import Router from "./router/Router";

import "./locales/i18n";

function App() {
  return (
    <Suspense>
      <NextUIProvider>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </NextUIProvider>
    </Suspense>
  );
}

export default App;
