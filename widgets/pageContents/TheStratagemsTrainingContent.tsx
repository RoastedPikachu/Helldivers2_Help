"use client";
import React, { useEffect } from "react";

import { observer, Observer } from "mobx-react-lite";

import { stratagemStore } from "@/store/StratagemStore";

import ThePageTitle from "@/shared/ThePageTitle";

const TheStratagemsTrainingContent = observer(() => {
  const getSpecificGameTimeColor = () => {
    if (stratagemStore.secondsLeft > 2) {
      return "bg-[#ffe702]";
    }
    return "bg-[#ef4444]";
  };

  const getArrowBrightness = (direction: any) => {
    if (direction.isPressed) {
      return "";
    }
    return "brightness-50";
  };

  const getArrowColor = (direction: any) => {
    if (direction.isPressed) {
      return stratagemStore.isStratagemInputFail ? "#ef4444" : "#ffe702";
    }
    return "#ffffff";
  };

  const getTargetInlineRotate = (direction: any) => {
    switch (direction.orientation) {
      case 1:
        return (
          <svg
            key={direction.id}
            width="55"
            height="55"
            viewBox="0 0 65 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-[30px] rotate-0 ${getArrowBrightness(direction)}`}
          >
            <g clipPath="url(#clip0_1_4)">
              <path
                d="M32.5 0L0 30H18.9583V60H46.0417V30H65L32.5 0Z"
                fill={`${getArrowColor(direction)}`}
              />
              <path
                d="M35.1761 0.892805C34.8779 0.61746 34.479 0.392326 34.0135 0.236796C33.5481 0.0812659 33.0302 1.62527e-06 32.5044 1.62527e-06C31.9786 1.62527e-06 31.4607 0.0812659 30.9953 0.236796C30.5299 0.392326 30.1309 0.61746 29.8327 0.892805L0.580405 27.7576C0.24181 28.0675 0.0432524 28.4304 0.00630039 28.807C-0.0306516 29.1836 0.0954166 29.5594 0.370811 29.8936C0.646205 30.2278 1.06039 30.5077 1.56837 30.7027C2.07634 30.8978 2.65868 31.0006 3.25212 31L61.7567 31C62.3488 30.9984 62.9289 30.8943 63.4349 30.6988C63.9408 30.5032 64.3533 30.2237 64.6281 29.8903C64.9028 29.5568 65.0294 29.1821 64.9942 28.8063C64.9591 28.4305 64.7634 28.068 64.4284 27.7576L35.1761 0.892805Z"
                fill={`${getArrowColor(direction)}`}
              />
            </g>
            <defs>
              <clipPath id="clip0_1_4">
                <rect
                  width="65"
                  height="60"
                  fill={`${getArrowColor(direction)}`}
                />
              </clipPath>
            </defs>
          </svg>
        );
      case 2:
        return (
          <svg
            key={direction.id}
            width="55"
            height="55"
            viewBox="0 0 65 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-[30px] rotate-90 ${getArrowBrightness(direction)}`}
          >
            <g clipPath="url(#clip0_1_4)">
              <path
                d="M32.5 0L0 30H18.9583V60H46.0417V30H65L32.5 0Z"
                fill={`${getArrowColor(direction)}`}
              />
              <path
                d="M35.1761 0.892805C34.8779 0.61746 34.479 0.392326 34.0135 0.236796C33.5481 0.0812659 33.0302 1.62527e-06 32.5044 1.62527e-06C31.9786 1.62527e-06 31.4607 0.0812659 30.9953 0.236796C30.5299 0.392326 30.1309 0.61746 29.8327 0.892805L0.580405 27.7576C0.24181 28.0675 0.0432524 28.4304 0.00630039 28.807C-0.0306516 29.1836 0.0954166 29.5594 0.370811 29.8936C0.646205 30.2278 1.06039 30.5077 1.56837 30.7027C2.07634 30.8978 2.65868 31.0006 3.25212 31L61.7567 31C62.3488 30.9984 62.9289 30.8943 63.4349 30.6988C63.9408 30.5032 64.3533 30.2237 64.6281 29.8903C64.9028 29.5568 65.0294 29.1821 64.9942 28.8063C64.9591 28.4305 64.7634 28.068 64.4284 27.7576L35.1761 0.892805Z"
                fill={`${getArrowColor(direction)}`}
              />
            </g>
            <defs>
              <clipPath id="clip0_1_4">
                <rect
                  width="65"
                  height="60"
                  fill={`${getArrowColor(direction)}`}
                />
              </clipPath>
            </defs>
          </svg>
        );
      case 3:
        return (
          <svg
            key={direction.id}
            width="55"
            height="55"
            viewBox="0 0 65 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-[30px] rotate-180 ${getArrowBrightness(direction)}`}
          >
            <g clipPath="url(#clip0_1_4)">
              <path
                d="M32.5 0L0 30H18.9583V60H46.0417V30H65L32.5 0Z"
                fill={`${getArrowColor(direction)}`}
              />
              <path
                d="M35.1761 0.892805C34.8779 0.61746 34.479 0.392326 34.0135 0.236796C33.5481 0.0812659 33.0302 1.62527e-06 32.5044 1.62527e-06C31.9786 1.62527e-06 31.4607 0.0812659 30.9953 0.236796C30.5299 0.392326 30.1309 0.61746 29.8327 0.892805L0.580405 27.7576C0.24181 28.0675 0.0432524 28.4304 0.00630039 28.807C-0.0306516 29.1836 0.0954166 29.5594 0.370811 29.8936C0.646205 30.2278 1.06039 30.5077 1.56837 30.7027C2.07634 30.8978 2.65868 31.0006 3.25212 31L61.7567 31C62.3488 30.9984 62.9289 30.8943 63.4349 30.6988C63.9408 30.5032 64.3533 30.2237 64.6281 29.8903C64.9028 29.5568 65.0294 29.1821 64.9942 28.8063C64.9591 28.4305 64.7634 28.068 64.4284 27.7576L35.1761 0.892805Z"
                fill={`${getArrowColor(direction)}`}
              />
            </g>
            <defs>
              <clipPath id="clip0_1_4">
                <rect
                  width="65"
                  height="60"
                  fill={`${getArrowColor(direction)}`}
                />
              </clipPath>
            </defs>
          </svg>
        );
      case 4:
        return (
          <svg
            key={direction.id}
            width="55"
            height="55"
            viewBox="0 0 65 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-[30px] -rotate-90 ${getArrowBrightness(direction)}`}
          >
            <g clipPath="url(#clip0_1_4)">
              <path
                d="M32.5 0L0 30H18.9583V60H46.0417V30H65L32.5 0Z"
                fill={`${getArrowColor(direction)}`}
              />
              <path
                d="M35.1761 0.892805C34.8779 0.61746 34.479 0.392326 34.0135 0.236796C33.5481 0.0812659 33.0302 1.62527e-06 32.5044 1.62527e-06C31.9786 1.62527e-06 31.4607 0.0812659 30.9953 0.236796C30.5299 0.392326 30.1309 0.61746 29.8327 0.892805L0.580405 27.7576C0.24181 28.0675 0.0432524 28.4304 0.00630039 28.807C-0.0306516 29.1836 0.0954166 29.5594 0.370811 29.8936C0.646205 30.2278 1.06039 30.5077 1.56837 30.7027C2.07634 30.8978 2.65868 31.0006 3.25212 31L61.7567 31C62.3488 30.9984 62.9289 30.8943 63.4349 30.6988C63.9408 30.5032 64.3533 30.2237 64.6281 29.8903C64.9028 29.5568 65.0294 29.1821 64.9942 28.8063C64.9591 28.4305 64.7634 28.068 64.4284 27.7576L35.1761 0.892805Z"
                fill={`${getArrowColor(direction)}`}
              />
            </g>
            <defs>
              <clipPath id="clip0_1_4">
                <rect
                  width="65"
                  height="60"
                  fill={`${getArrowColor(direction)}`}
                />
              </clipPath>
            </defs>
          </svg>
        );
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", stratagemStore.handleGameStart, {
      once: true,
    });

    return () => {
      document.removeEventListener("keydown", stratagemStore.handleGameStart);
    };
  }, []);
  return (
    <Observer>
      {() => (
        <main>
          <div className="flex justify-center items-center w-full h-[60px]">
            <ThePageTitle title={"тренировка"} additionalTitle={"стратагем"} />
          </div>

          <section className="relative flex justify-center items-center w-full h-[calc(100vh-310px)]">
            {!stratagemStore.isGameStarted && !stratagemStore.isRoundEnded && (
              <div className="relative grid justify-items-center w-auto h-auto">
                <svg
                  width="50"
                  height="45"
                  viewBox="0 0 65 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_4)">
                    <path
                      d="M32.5 0L0 30H18.9583V60H46.0417V30H65L32.5 0Z"
                      fill="#ffe702"
                    />
                    <path
                      d="M35.1761 0.892805C34.8779 0.61746 34.479 0.392326 34.0135 0.236796C33.5481 0.0812659 33.0302 1.62527e-06 32.5044 1.62527e-06C31.9786 1.62527e-06 31.4607 0.0812659 30.9953 0.236796C30.5299 0.392326 30.1309 0.61746 29.8327 0.892805L0.580405 27.7576C0.24181 28.0675 0.0432524 28.4304 0.00630039 28.807C-0.0306516 29.1836 0.0954166 29.5594 0.370811 29.8936C0.646205 30.2278 1.06039 30.5077 1.56837 30.7027C2.07634 30.8978 2.65868 31.0006 3.25212 31L61.7567 31C62.3488 30.9984 62.9289 30.8943 63.4349 30.6988C63.9408 30.5032 64.3533 30.2237 64.6281 29.8903C64.9028 29.5568 65.0294 29.1821 64.9942 28.8063C64.9591 28.4305 64.7634 28.068 64.4284 27.7576L35.1761 0.892805Z"
                      fill="#ffe702"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_4">
                      <rect width="65" height="60" fill="#ffe702" />
                    </clipPath>
                  </defs>
                </svg>

                <div
                  className={`mt-[10px] w-[100px] h-[150px] ${stratagemStore.isRequiredKeyPressed ? "bg-[#008000]" : "bg-[#7f1d1d]"} border-2 border-[#ffe702] duration-[400ms] ease-in-out`}
                ></div>

                <p className="mt-[10px] w-full text-[#ffe702] text-[1.25rem] text-center font-['Exo2'] font-semibold">
                  НАЧАТЬ
                </p>

                <p className="text-[#ffffff] text-[1rem] text-center font-['Insignia'] brightness-50">
                  {stratagemStore.highestGameScore}
                </p>

                <p className="mt-[20px] text-[#ffffff] text-[1.25rem] text-center brightness-75">
                  Используйте WASD или стрелки на клавиатуре для ввода стратагем
                </p>
              </div>
            )}

            {!stratagemStore.isRoundEnded && stratagemStore.isGameStarted && (
              <div className="flex items-start">
                <span className="mr-[100px]">
                  <p className="mt-[-10px] text-[#ffffff] text-[2rem] text-left font-['Exo2'] font-semibold">
                    Раунд
                  </p>

                  <p className="mt-[-7.5px] text-[#ffe702] text-[3rem] text-left font-['Insignia'] font-extrabold">
                    {stratagemStore.currentRoundNumber}
                  </p>
                </span>

                <div className="relative p-[4px] w-auto min-w-[735px] h-auto">
                  <div className="flex items-center w-full h-[120px]">
                    <img
                      src={`${stratagemStore.currentStratagem.iconPath}`}
                      alt=""
                      className="w-[120px] h-full"
                    />

                    {stratagemStore.nextStratagemsArray
                      .slice(0, 5)
                      .map((nextStratagem, index) => (
                        <img
                          key={index + 1}
                          src={`${nextStratagem.iconPath}`}
                          alt=""
                          className="ml-[40px] w-[75px] h-[75px]"
                        />
                      ))}
                  </div>

                  <div
                    className={`flex items-center mt-[10px] w-full h-[50px] ${getSpecificGameTimeColor()}`}
                  >
                    <h3 className="w-full text-[#000000] text-[1.5rem] text-center font-['Exo2'] font-bold">
                      {stratagemStore.currentStratagem.name}
                    </h3>
                  </div>

                  <div className="flex justify-center items-center pl-[30px] w-full h-[120px]">
                    <div className="flex">
                      {stratagemStore.currentStratagem.directions?.map(
                        (direction) => getTargetInlineRotate(direction),
                      )}
                    </div>
                  </div>

                  <div
                    style={{ width: `${stratagemStore.secondsLeft * 10}%` }}
                    className={`h-[30px] ${getSpecificGameTimeColor()}`}
                  ></div>
                </div>

                <span className="ml-[100px]">
                  <p className="mt-[-12.5px] text-[#ffe702] text-[3rem] text-right font-['Insignia'] font-extrabold">
                    {stratagemStore.currentScore}
                  </p>

                  <p className="mt-[-17.5px] text-[#ffffff] text-[2rem] text-right font-['Exo2'] font-semibold">
                    Счет
                  </p>

                  <p className="text-[#ffffff] text-[1rem] text-right font-['Exo2'] font-semibold brightness-50">
                    Ваш рекорд:{" "}
                    <b className="font-['Insignia']">
                      {stratagemStore.highestGameScore}
                    </b>
                  </p>
                </span>
              </div>
            )}

            {stratagemStore.isRoundEnded && stratagemStore.isRoundLost && (
              <div className="grid justify-items-center mt-[-100px] w-auto min-w-[550px]">
                <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
                  Игра окончена
                </h2>

                <div className="flex justify-between items-center mt-[30px] w-full h-auto">
                  <span className="text-[#ffffff] text-[1.5rem] text-left font-['Exo2'] font-bold">
                    <p>ФИНАЛЬНЫЙ СЧЕТ</p>

                    <p className="text-[#ffe702] text-[2rem]">
                      {stratagemStore.finalGameScore}
                    </p>
                  </span>

                  <span className="text-[#ffffff] text-[1.5rem] text-right font-['Exo2'] font-bold">
                    <p>МАКС. РЕЗУЛЬТАТ</p>

                    <p className="text-[2rem]">
                      {stratagemStore.highestGameScore}
                    </p>
                  </span>
                </div>
              </div>
            )}

            {stratagemStore.isRoundEnded &&
              stratagemStore.isResultsShowed &&
              !stratagemStore.isRoundLost && (
                <div className="relative mt-[-100px] w-[600px]">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[#ffffff] text-[2rem] font-['Exo2'] font-bold">
                      Бонус за раунд
                    </p>

                    <p className="mt-[5px] text-[#ffe702] text-[2.5rem] font-['Insignia'] font-bold">
                      {stratagemStore.currentRoundBonus}
                    </p>
                  </div>

                  <span className="flex justify-between items-center w-full">
                    <p className="text-[#ffffff] text-[2rem] font-['Exo2'] font-bold">
                      Бонус за время
                    </p>

                    <p className="mt-[5px] text-[#ffe702] text-[2.5rem] font-['Insignia'] font-bold">
                      {stratagemStore.currentRoundTimeBonus.toFixed(0)}
                    </p>
                  </span>

                  <span className="flex justify-between items-center w-full">
                    <p className="text-[#ffffff] text-[2rem] font-['Exo2'] font-bold">
                      Бонус за идеал
                    </p>

                    <p className="mt-[5px] text-[#ffe702] text-[2.5rem] font-['Insignia'] font-bold">
                      {stratagemStore.isClearInputRound ? "100" : "0"}
                    </p>
                  </span>

                  <span className="flex justify-between items-center w-full">
                    <p className="text-[#ffffff] text-[2rem] font-['Exo2'] font-bold">
                      Итоговый счет
                    </p>

                    <p className="mt-[5px] text-[#ffe702] text-[2.5rem] font-['Insignia'] font-bold">
                      {stratagemStore.currentScore}
                    </p>
                  </span>
                </div>
              )}

            {stratagemStore.isRoundEnded &&
              !stratagemStore.isResultsShowed &&
              !stratagemStore.isRoundLost && (
                <div className="grid justify-items-center mt-[-100px] w-auto">
                  <h2 className="text-[#ffffff] text-[2.5rem] font-['Exo2'] font-bold">
                    Приготовьтесь
                  </h2>

                  <p className="mt-[30px] text-[#ffffff] text-[2.25rem] font-['Exo2'] font-bold">
                    Раунд
                  </p>

                  <p className="text-[#ffe702] text-[3rem] font-['Insignia'] font-bold">
                    {stratagemStore.currentRoundNumber}
                  </p>
                </div>
              )}
          </section>
        </main>
      )}
    </Observer>
  );
});

export default TheStratagemsTrainingContent;