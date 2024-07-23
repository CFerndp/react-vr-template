import React from "react";
import { Button, Switch } from "@nextui-org/react";
import { Link } from "wouter";
import { Routes } from "../../router/routes";
import { useTranslation } from "react-i18next";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import { Divider, Input } from "@nextui-org/react";

import { useRecoilState } from "recoil";
import {
  debugModeAtom,
  experimentTarget,
  restAPIIPAtom,
  restAPIPORTAtom,
} from "../../states/configState";

const Home: React.FC = () => {
  const { t } = useTranslation("home");
  const [restIP, setRestIP] = useRecoilState(restAPIIPAtom);
  const [restPORT, setRestPORT] = useRecoilState(restAPIPORTAtom);

  const [isTestGateway, setIsTestGateway] = useRecoilState(debugModeAtom);

  const [target, setTarget] = useRecoilState(experimentTarget);

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
        <h3 className="text-2xl font-bold mb-5">
          {t("config.experiment.title")}
        </h3>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-5">
          <Input
            type="text"
            label={t("target.input.label")}
            placeholder={t("target.input.placeholder")}
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
        <Divider />

        <h3 className="text-2xl font-bold mb-5">{t("config.backend.title")}</h3>
        <Switch
          className="mb-5"
          isSelected={isTestGateway}
          onChange={onChangeDebugMode}
        >
          {t("debug.label")}
        </Switch>
        {isTestGateway ? null : (
          <>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-5">
              <Input
                type="text"
                label={t("ip.input.label")}
                placeholder={t("ip.input.placeholder")}
                value={restIP}
                onChange={(e) => setRestIP(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-5">
              <Input
                type="text"
                label={t("port.input.label")}
                placeholder={t("port.input.placeholder")}
                value={restPORT}
                onChange={(e) => setRestPORT(e.target.value)}
              />
            </div>
          </>
        )}
      </section>
    </PageTemplate>
  );
};

export default Home;
