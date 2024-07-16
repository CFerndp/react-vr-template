import { Suspense } from "react";

import { NextUIProvider } from "@nextui-org/react";
import Router from "./router/Router";

import "./locales/i18n";
import { ToastContainer } from "react-toastify";

import { store } from "./redux/store";

import "react-toastify/dist/ReactToastify.css";
import { Provider as ReduxProvider } from "react-redux";

function App() {
  return (
    <Suspense>
      <ReduxProvider store={store}>
        <NextUIProvider>
          <Router />
          <ToastContainer />
        </NextUIProvider>
      </ReduxProvider>
    </Suspense>
  );
}

export default App;
