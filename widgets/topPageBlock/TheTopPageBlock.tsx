import React from "react";

import TheHeader from "@/widgets/header/TheHeader";

import RunningLine from "@/shared/runningLine/RunningLine";

import "./TheTopPageBlock.css";

const TheTopPageBlock = () => {
  return (
    <section className="topPageSection">
      <TheHeader />

      {typeof window !== "undefined" &&
        !window.location.href.includes("/stratagemTraining") && <RunningLine />}
    </section>
  );
};

export default TheTopPageBlock;
