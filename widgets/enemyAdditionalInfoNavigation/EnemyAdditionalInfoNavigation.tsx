import React, { useEffect } from "react";

import Link from "next/link";

import { observer, Observer } from "mobx-react-lite";

import { enemiesStore } from "@/store/EnemiesStore";

import { Enemy } from "@/utils/generalInterfaces";

import { getEnemyFractionPageLink, toSlug } from "@/utils/generalFunctions";

import "./EnemyAdditionalInfoNavigation.css";

const EnemyAdditionalInfoNavigation = observer(() => {
  const getPreviousEnemy = () => {
    if (enemiesStore.currentEnemy.fraction === "Терминиды") {
      return enemiesStore.terminids.at(enemiesStore.currentEnemy.id - 2);
    } else {
      return enemiesStore.automatons.at(enemiesStore.currentEnemy.id - 2);
    }
  };

  const getNextEnemy = () => {
    if (enemiesStore.currentEnemy.fraction === "Терминиды") {
      return (
        enemiesStore.currentEnemy.id === enemiesStore.terminids.length
          ? enemiesStore.terminids[0]
          : enemiesStore.terminids[enemiesStore.currentEnemy.id]
      )!;
    } else {
      return (
        enemiesStore.currentEnemy.id === enemiesStore.automatons.length
          ? enemiesStore.automatons[0]
          : enemiesStore.automatons[enemiesStore.currentEnemy.id]
      )!;
    }
  };

  const handleCurrentEnemyChange = (isNextEnemy: boolean) => {
    isNextEnemy
      ? enemiesStore.changeCurrentEnemy(getNextEnemy())
      : enemiesStore.changeCurrentEnemy(getPreviousEnemy()!);
  };
  return (
    <Observer>
      {() => (
        <div className="navBlock">
          <Link
            href={`${getEnemyFractionPageLink()}/${toSlug(getPreviousEnemy()!.engTitle)}`}
            onClick={() => handleCurrentEnemyChange(false)}
            className="navBlock_buttonEnemyLink"
          >
            <img src="/static/GeneralIcons/LeftArrowIcon.svg" alt="" />

            <p className="navBlock_buttonEnemyLink_Text ml-[10px]">
              {getPreviousEnemy()!.title}
            </p>
          </Link>

          <Link
            href={`${getEnemyFractionPageLink()}/${toSlug(getNextEnemy()?.engTitle)}`}
            onClick={() => handleCurrentEnemyChange(true)}
            className="navBlock_buttonEnemyLink"
          >
            <p className="navBlock_buttonEnemyLink_Text mr-[10px]">
              {getNextEnemy()?.title}
            </p>

            <img
              src="/static/GeneralIcons/LeftArrowIcon.svg"
              alt=""
              className="rotate-180"
            />
          </Link>
        </div>
      )}
    </Observer>
  );
});

export default EnemyAdditionalInfoNavigation;
