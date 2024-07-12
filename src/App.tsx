import { Suspense } from "react";
import { RecoilRoot } from "recoil";

import { NextUIProvider } from "@nextui-org/react";
import Router from "./router/Router";

import "./locales/i18n";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Suspense>
      <RecoilRoot>
        <NextUIProvider>
          <Router />
          <ToastContainer />
        </NextUIProvider>
      </RecoilRoot>
    </Suspense>
  );
}

export default App;
