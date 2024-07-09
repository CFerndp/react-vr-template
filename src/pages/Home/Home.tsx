import React from "react";
import { Button } from "@nextui-org/button";
import { Link } from "wouter";
import { Routes } from "../../router/routes";
import { useTranslation } from "react-i18next";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import { Divider } from "@nextui-org/react";

const Home: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <PageTemplate>
      <section className="text-center text-blue-600 dark:text-neutral-200">
        <h1 className="text-5xl font-bold mb-5">{t("title.label")}</h1>
        <Divider className="mb-5" />
        <div className="w-screen flex gap-2 justify-center">
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
      </section>
    </PageTemplate>
  );
};

export default Home;
