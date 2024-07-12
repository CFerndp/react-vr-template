import React from "react";
import { Button, Switch } from "@nextui-org/react";
import { Link } from "wouter";
import { Routes } from "../../router/routes";
import { useTranslation } from "react-i18next";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import { Divider, Input } from "@nextui-org/react";

import { RESTGateway } from "../../gateways/RESTGateway/RESTGateway";
import { toast } from "react-toastify";
import { TestGateway } from "../../gateways/TestGateway/TESTGateway";
import { useRecoilState } from "recoil";
import {
  debugModeAtom,
  restAPIIPAtom,
  restAPIPORTAtom,
} from "../../states/configState";
import { EEGGatewayAtom } from "../../states/EEGGatewayState";

const Home: React.FC = () => {
  const { t } = useTranslation("home");
  const [restIP, setRestIP] = useRecoilState(restAPIIPAtom);
  const [restPORT, setRestPORT] = useRecoilState(restAPIPORTAtom);

  const [isTestGateway, setIsTestGateway] = useRecoilState(debugModeAtom);

  const [, setEEGGateway] = useRecoilState(EEGGatewayAtom);

  const onSave = () => {
    if (isTestGateway) {
      setEEGGateway(new TestGateway());
      toast("Configuración guardada con exito en modo debug", {
        type: "success",
      });
    } else if (restIP && restPORT) {
      setEEGGateway(new RESTGateway(restIP, restPORT));
      toast("Configuración guardada con exito", {
        type: "success",
      });
    } else {
      toast("Configuración invalida", {
        type: "error",
      });
    }
  };

  const onChangeDebugMode: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setIsTestGateway(event.currentTarget.checked);
  };

  return (
    <PageTemplate>
      <section className="text-center text-blue-600 dark:text-neutral-200">
        <h1 className="text-5xl font-bold mb-5">{t("title.label")}</h1>
        <Divider className="mb-5" />
        <div className="w-full flex gap-2 flex-col justify-center mb-5">
          <Link href={Routes.VR}>
            <Button size="lg" color="primary" variant="shadow">
              {t("button.vr")}
            </Button>
          </Link>
          <Link href={Routes["2D"]}>
            <Button size="lg" color="secondary" variant="shadow">
              {t("button.2d")}
            </Button>
          </Link>
        </div>
        <Divider />
        <h2 className="text-3xl font-bold mb-5">{t("config.title")}</h2>
        <Switch
          className="mb-5"
          isSelected={isTestGateway}
          onChange={onChangeDebugMode}
        >
          Debug mode
        </Switch>
        {isTestGateway ? null : (
          <div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-5">
              <Input
                type="text"
                label="REST Server IP"
                placeholder="127.0.0.1"
                value={restIP}
                onChange={(e) => setRestIP(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-5">
              <Input
                type="text"
                label="REST Server Port"
                placeholder="8000"
                value={restPORT}
                onChange={(e) => setRestPORT(e.target.value)}
              />
            </div>
          </div>
        )}
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center">
          <Button size="lg" color="success" variant="shadow" onClick={onSave}>
            {t("button.save")}
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Home;
