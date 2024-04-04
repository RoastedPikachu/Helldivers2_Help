"use client";
import React, { useState, useRef } from "react";

import "./Stratagem.css";
import Typewriter from "@/shared/Typewriter";

interface StratagemProps {
  iconPath: string;
  videoPath: string | undefined;
  videoPreviewPath: string | undefined;
  name: string;
  description: string;
  price: number | undefined;
  obtainingLevel: number | undefined;
  callTime: number | undefined;
  useCount: number | undefined;
  reloadTime: number | undefined;
}

const Stratagem: React.FC<StratagemProps> = ({
  iconPath,
  videoPath,
  videoPreviewPath,
  name,
  description,
  price,
  obtainingLevel,
  callTime,
  useCount,
  reloadTime,
}) => {
  const [isAdditionalInfoOpened, changeIsAdditionalInfoOpened] =
    useState(false);
  const [playButtonClicksCount, setPlayButtonClicksCount] = useState(1);

  const videoRef = useRef<HTMLVideoElement>();

  const handlePlayButtonClick = () => {
    if (playButtonClicksCount % 2 === 0) {
      pauseVideo();
    } else {
      playVideo();
    }

    setPlayButtonClicksCount((prev) => prev + 1);
  };

  const playVideo = () => {
    videoRef.current && videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current && videoRef.current.pause();
  };
  return (
    <div className="rootStratagemBlock">
      <div
        className={`rootStratagemBlock_Top ${isAdditionalInfoOpened ? "" : "z-30"}`}
      >
        <div className="rootStratagemBlock_Top_Left">
          <img
            src={`${iconPath}`}
            alt=""
            className="rootStratagemBlock_Top_Left_ImageWrapper_Image"
          />

          <h4 className="rootStratagemBlock_Top_Left_Title">{name}</h4>
        </div>

        <button
          onClick={() => changeIsAdditionalInfoOpened((prev) => !prev)}
          className="rootStratagemBlock_Top_Button"
        >
          <img
            src="/static/GeneralIcons/ArrowDownIcon.svg"
            alt=""
            className={`rootStratagemBlock_Top_Button_Image ${isAdditionalInfoOpened ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      <div
        className={`rootStratagemBlock_Bottom ${isAdditionalInfoOpened ? "opacity-1" : videoPath && videoPreviewPath ? "mt-[-475px] opacity-0" : "mt-[-70px] opacity-0"}`}
      >
        {videoPath && videoPreviewPath && (
          <div className="rootStratagemBlock_Bottom_Top">
            <div className="rootStratagemBlock_Bottom_Top_Left">
              <video
                poster={`${videoPreviewPath}`}
                src={`${videoPath}`}
                preload="none"
                playsInline
                loop
                // @ts-ignore
                ref={videoRef}
                className="rootStratagemBlock_Bottom_Top_Left_Video"
              ></video>

              <button
                onClick={handlePlayButtonClick}
                className="rootStratagemBlock_Bottom_Top_Left_Video_Button"
              >
                {playButtonClicksCount % 2 === 0 ? (
                  <img
                    src="/static/GeneralIcons/PauseVideoIcon.svg"
                    alt=""
                    className="rootStratagemBlock_Bottom_Top_Left_Video_Button_Pause"
                  />
                ) : (
                  <img
                    src="/static/GeneralIcons/PlayVideoIcon.svg"
                    alt=""
                    className="rootStratagemBlock_Bottom_Top_Left_Video_Button_Play"
                  />
                )}
              </button>
            </div>

            <div className="rootStratagemBlock_Bottom_Top_Right">
              <p className="rootStratagemBlock_Bottom_Top_Right_Text mt-[-5px]">
                <b className="rootStratagemBlock_Bottom_Top_Right_Text_Bold">
                  Открывается на:{" "}
                </b>
                {obtainingLevel} уровне
              </p>

              <p className="rootStratagemBlock_Bottom_Top_Right_Text">
                <b className="rootStratagemBlock_Bottom_Top_Right_Text_Bold">
                  Цена:{" "}
                </b>
                {price}
              </p>

              <p className="rootStratagemBlock_Bottom_Top_Right_Text">
                <b className="rootStratagemBlock_Bottom_Top_Right_Text_Bold">
                  Время вызова:{" "}
                </b>
                {callTime} сек.
              </p>

              <p className="rootStratagemBlock_Bottom_Top_Right_Text">
                <b className="rootStratagemBlock_Bottom_Top_Right_Text_Bold">
                  Применения:{" "}
                </b>
                {useCount === 0 ? "Неограниченно" : useCount}
              </p>

              <p className="rootStratagemBlock_Bottom_Top_Right_Text">
                <b className="rootStratagemBlock_Bottom_Top_Right_Text_Bold">
                  Время перезарядки:{" "}
                </b>
                {reloadTime} сек.
              </p>
            </div>
          </div>
        )}

        <p className="rootStratagemBlock_Bottom_Description">
          {isAdditionalInfoOpened && (
            <Typewriter text={description} delay={30} />
          )}
        </p>
      </div>
    </div>
  );
};

export default Stratagem;
