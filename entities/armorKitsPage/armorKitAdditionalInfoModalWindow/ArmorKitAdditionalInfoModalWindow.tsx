"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { armorStore } from "@/store/ArmorKitsStore";
import { mobileStore } from "@/store/MobileStore";

import { Bonus } from "@/utils/dataInterfaces";

import "./ArmorKitAdditionalInfoModalWindow.css";

interface ArmorKitAdditionalInfoModalWindowProps {
  imagePath: string;
  type: string;
  name: string;
  description: string;
  price: number;
  armorRating: number;
  speed: number;
  staminaRegen: number;
  bonus: Bonus;
}

const ArmorKitAdditionalInfoModalWindow: React.FC<ArmorKitAdditionalInfoModalWindowProps> =
  observer(
    ({
      imagePath,
      type,
      name,
      description,
      price,
      armorRating,
      speed,
      staminaRegen,
      bonus,
    }) => {
      return (
        <Observer>
          {() => (
            <div className="sliderModal">
              <button
                onClick={() => armorStore.clearCurrentArmorInfo()}
                className="sliderModal_CloseButton !top-[15px] !right-[15px]"
              >
                <img
                  src="/static/GeneralIcons/CloseIcon.svg"
                  alt=""
                  className="sliderModal_CloseButton_Icon"
                />
              </button>

              <div className="currentArmor_Modal_Top">
                <div className="currentArmor_Modal_Top_ImageWrapper">
                  <img
                    src={imagePath}
                    alt=""
                    className={`currentArmor_Modal_Top_ImageWrapper_Image`}
                  />
                </div>

                <div className="currentArmor_Modal_Top_TextBlock">
                  <h2 className="currentArmor_Modal_Top_TextBlock_Title">
                    {name}
                  </h2>

                  <p className="text-[#ffffff] text-[1.25rem] mlarge:text-[1rem] mmedium:text-[0.875rem] msmall:text-[0.75rem] font-['Exo2'] font-semibold brightness-75">
                    {type}
                  </p>

                  <div className="currentArmor_Modal_Top_TextBlock_Characteristic mt-[20px] mlarge:!mt-[10px]">
                    <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Name">
                      СТОИМОСТЬ:{" "}
                    </p>

                    <div className="currentArmor_Modal_Top_TextBlock_Characteristic_Price">
                      <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Price_Text">
                        {price}
                      </p>

                      {price < 200 && price !== 0 ? (
                        <img
                          src="/static/Resources/MedalIcon.svg"
                          alt=""
                          className="currentArmor_Modal_Top_TextBlock_Characteristic_Price_Image"
                        />
                      ) : (
                        price !== 0 && (
                          <img
                            src="/static/Resources/SuperCreditIcon.svg"
                            alt=""
                            className="currentArmor_Modal_Top_TextBlock_Characteristic_Price_Image"
                          />
                        )
                      )}
                    </div>
                  </div>

                  {!mobileStore.isMobileDevice && (
                    <div className="mt-[10px] mlarge:mt-[10px]">
                      <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Name">
                        ЭФФЕКТ:
                      </p>

                      <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Value">
                        {bonus.name}
                      </p>

                      <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Description">
                        {bonus.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="currentArmor_Modal_Bottom">
                {mobileStore.isMobileDevice && (
                  <div className="mt-[10px]">
                    <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Name">
                      ЭФФЕКТ:
                    </p>

                    <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Value">
                      {bonus.name}
                    </p>

                    <p className="currentArmor_Modal_Top_TextBlock_Characteristic_Description">
                      {bonus.description}
                    </p>
                  </div>
                )}

                <div className="currentArmor_Modal_Bottom_Top">
                  <h3 className="currentArmor_Modal_Bottom_Top_Title">
                    ОПИСАНИЕ:
                  </h3>

                  <p className="currentArmor_Modal_Bottom_Top_Text">
                    {description}
                  </p>
                </div>

                <div className="currentArmor_Modal_Bottom_Bottom">
                  <div className="currentArmor_Modal_Bottom_Bottom_TextBlock">
                    <p className="currentArmor_Modal_Bottom_Bottom_TextBlock_Title">
                      РЕЙТИНГ БРОНИ:
                    </p>

                    <p className="currentArmor_Modal_Bottom_Bottom_TextBlock_Text">
                      {armorRating}
                    </p>
                  </div>

                  <div className="currentArmor_Modal_Bottom_Bottom_TextBlock">
                    <p className="currentArmor_Modal_Bottom_Bottom_TextBlock_Title">
                      СКОРОСТЬ:
                    </p>

                    <p className="currentArmor_Modal_Bottom_Bottom_TextBlock_Text">
                      {speed}
                    </p>
                  </div>

                  <div className="currentArmor_Modal_Bottom_Bottom_TextBlock">
                    <p className="currentArmor_Modal_Bottom_Bottom_TextBlock_Title">
                      ВОССТАНОВЛЕНИЕ ВЫНОСЛИВОСТИ:
                    </p>

                    <p className="currentArmor_Modal_Bottom_Bottom_TextBlock_Text">
                      {staminaRegen}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Observer>
      );
    },
  );

export default ArmorKitAdditionalInfoModalWindow;
