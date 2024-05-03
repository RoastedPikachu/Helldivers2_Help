"use client";
import React, { useState } from "react";

import { observer, Observer } from "mobx-react-lite";

import { levels } from "@/data/levels";

import { mobileStore } from "@/store/MobileStore";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import "./LevelsSection.css";

const LevelsSection = observer(() => {
  const [currentLevel, setCurrentLevel] = useState("");
  const [targetLevel, setTargetLevel] = useState("");

  const getLevelsArray = () => {
    if (targetLevel && !currentLevel) {
      return levels.filter((level) => level.id < parseInt(targetLevel));
    } else if (!currentLevel && !targetLevel) {
      return levels;
    } else {
      return levels.filter((level) => level.id > parseInt(currentLevel));
    }
  };

  const getCurrentLevelXpTotal = () => {
    return levels.find((level) => level.id === parseInt(currentLevel))
      ?.xpTotal!;
  };

  const getTargetLevelXpTotal = () => {
    return levels.find((level) => level.id === parseInt(targetLevel))?.xpTotal!;
  };

  return (
    <Observer>
      {() => (
        <section className="levelsSection">
          <SectionTitle text={"КАЛЬКУЛЯТОР УРОВНЕЙ"} />

          <form>
            <div className="formInputBlock">
              <input
                type="text"
                list="Levels"
                placeholder={`Начальный ${mobileStore.isMobileDevice ? "" : "уровень"}`}
                maxLength={10}
                value={currentLevel}
                onChange={(event) => setCurrentLevel(event.target.value)}
                className="formInputBlock_Input"
              />

              {currentLevel && (
                <button
                  onClick={() => setCurrentLevel("")}
                  className="formInputBlock_ClearButton"
                >
                  <img
                    src="/static/GeneralIcons/XMarkIcon.svg"
                    alt=""
                    className="formInputBlock_ClearButton_Icon"
                  />
                </button>
              )}
            </div>

            <div className="formInputBlock">
              <input
                type="text"
                list="Levels"
                placeholder={`Конечный ${mobileStore.isMobileDevice ? "" : "уровень"}`}
                maxLength={10}
                value={targetLevel}
                onChange={(event) => setTargetLevel(event.target.value)}
                className="formInputBlock_Input"
              />

              {targetLevel && (
                <button
                  onClick={() => setTargetLevel("")}
                  className="formInputBlock_ClearButton"
                >
                  <img
                    src="/static/GeneralIcons/XMarkIcon.svg"
                    alt=""
                    className="formInputBlock_ClearButton_Icon"
                  />
                </button>
              )}
            </div>

            <datalist id="Levels">
              {getLevelsArray().map((level) => (
                <option
                  key={level.id}
                  value={
                    level.id + (mobileStore.isMobileDevice ? "" : " уровень")
                  }
                />
              ))}
            </datalist>

            <div className="formResultBlock">
              <p className="formResultBlock_Text">
                {getTargetLevelXpTotal() - getCurrentLevelXpTotal() || 0} опыта
              </p>
            </div>
          </form>
        </section>
      )}
    </Observer>
  );
});

export default LevelsSection;
