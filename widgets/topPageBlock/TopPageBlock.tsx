import React from "react";

import TheHeader from "@/widgets/header/TheHeader";

import RunningLine from "@/shared/runningLine/RunningLine";

import "./TopPageBlock.css";

const TopPageBlock = () => {
  return (
    <section className="topPageSection">
      <TheHeader />

      <RunningLine />
    </section>
  );
};

export default TopPageBlock;
