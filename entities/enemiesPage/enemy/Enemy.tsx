"use client";
import React from "react";

import Link from "next/link";

import { enemiesStore } from "@/store/EnemiesStore";

import {
  getSpecificAutomatonStyle,
  getSpecificTerminidStyle,
} from "@/utils/enemyTypeFunctions";
import { toSlug } from "@/utils/generalFunctions";

import "./Enemy.css";

interface EnemyTypeProps {
  id: number;
  iconPath: string;
  imageStyleScale: string;
  fraction: string;
  imagePlugStyles: string;
  title: string;
  engTitle: string;
}

const Enemy: React.FC<EnemyTypeProps> = ({
  id,
  iconPath,
  imageStyleScale,
  imagePlugStyles,
  fraction,
  title,
  engTitle,
}) => {
  const getEnemyFraction = () => {
    return fraction === "Терминиды" ? "terminids" : "automatons";
  };

  const handleCurrentEnemyTypeChange = () => {
    fraction === "Терминиды"
      ? enemiesStore.changeCurrentEnemy(
          enemiesStore.terminids.find((enemy) => enemy.id === id)!,
        )
      : enemiesStore.changeCurrentEnemy(
          enemiesStore.automatons.find((enemy) => enemy.id === id)!,
        );
  };
  return (
    <Link
      href={`/enemy/${getEnemyFraction()}/${toSlug(engTitle)}`}
      onClick={() => handleCurrentEnemyTypeChange()}
      className="rootWidgetLink"
    >
      {iconPath ? (
        <img
          src={`${iconPath}`}
          alt=""
          style={{ transform: imageStyleScale }}
          className={`w-[200px] mlarge:w-[180px] mmedium:w-[160px] msmall:w-[140px] h-[300px] mlarge:h-[235px] mmedium:h-[215px] msmall:h-[195px] ${fraction === "Автоматоны" ? getSpecificAutomatonStyle(id) : getSpecificTerminidStyle(id)}`}
        />
      ) : (
        <p
          className={`${imagePlugStyles} text-[#2cc388] text-center font-['Insignia'] font-bold`}
        >
          ?
        </p>
      )}

      <p className="mt-[20px] mlarge:mt-[-5px] mmedium:mt-[-5px] msmall:mt-0 text-[#ffffff] text-[1.75rem] mlarge:text-[1.25rem] mmedium:text-[1.125rem] msmall:text-[1rem] text-center font-['Exo2'] font-bold">
        {title}
      </p>
    </Link>
  );
};

export default Enemy;
