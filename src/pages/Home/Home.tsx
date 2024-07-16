import React from "react";
import { Button, Switch } from "@nextui-org/react";
import { Link } from "wouter";
import { Routes } from "../../router/routes";
import { useTranslation } from "react-i18next";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import { Divider, Input } from "@nextui-org/react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectConfigState,
  setDebugMode,
  setRestAPIIP,
  setRestAPIPORT,
} from "../../redux/stores/config/configStore";

const Home: React.FC = () => {
  const { t } = useTranslation("home");
  const { restAPIIP, debugMode, restAPIPORT } =
    useAppSelector(selectConfigState);

  const dispatch = useAppDispatch();

  const onChangeDebugMode: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch(setDebugMode(event.currentTarget.checked));
  };

  const onChangeRestAPIIP: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch(setRestAPIIP(event.currentTarget.value));
  };

  const onChangeRestAPIPORT: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch(setRestAPIPORT(event.currentTarget.value));
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
          isSelected={debugMode}
          onChange={onChangeDebugMode}
        >
          {t("debug.label")}
        </Switch>
        {debugMode ? null : (
          <>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-5">
              <Input
                type="text"
                label={t("ip.input.label")}
                placeholder={t("ip.input.placeholder")}
                value={restAPIIP}
                onChange={onChangeRestAPIIP}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-5">
              <Input
                type="text"
                label={t("port.input.label")}
                placeholder={t("port.input.placeholder")}
                value={restAPIPORT}
                onChange={onChangeRestAPIPORT}
              />
            </div>
          </>
        )}
      </section>
    </PageTemplate>
  );
};

export default Home;
