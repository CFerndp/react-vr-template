import React from "react";

import { PageTemplateProps } from "./types";

const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  fullScreen = true,
}) => {
  return (
    <main
      className={`dark bg-gradient-to-b from-slate-900 via-slate-500 to-slate-900 text-foreground bg-background w-screen h-screen ${
        fullScreen ? "p-4" : "p-0"
      } scroll-smooth scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 overflow-auto`}
    >
      {children}
    </main>
  );
};

export default PageTemplate;
