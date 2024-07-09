import React from "react";

import { PageTemplateProps } from "./types";

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <main className="dark bg-gradient-to-b from-slate-900 via-slate-500 to-slate-900 text-foreground bg-background w-screen h-screen p-4">
      {children}
    </main>
  );
};

export default PageTemplate;
