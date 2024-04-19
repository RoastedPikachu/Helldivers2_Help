"use client";
import React, { useState, useEffect } from "react";

import axios from "axios";

import { Order } from "@/utils/componentInterfaces";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";
import ThePageTitle from "@/shared/ThePageTitle";

import ActiveCampaign from "@/entities/campaign/activeCampaign/ActiveCampaign";
import ActiveCampaignError from "@/entities/campaign/activeCampaignError/ActiveCampaignError";
import ActiveCampaignBlank from "@/entities/campaign/activeCampaignBlank/ActiveCampaignBlank";

import MajorOrder from "@/entities/orders/majorOrder/MajorOrder";
import MajorOrderError from "@/entities/orders/majorOrderError/MajorOrderError";
import MajorOrderBlank from "@/entities/orders/majorOrderBlank/MajorOrderBlank";
import NoMajorOrder from "@/entities/orders/noMajorOrder/NoMajorOrder";

import "./War.css";

const Page = () => {
  const [activeCampaigns, setActiveCampaigns] = useState([] as any[]);
  const [planetRegenArray, setPlanetRegenArray] = useState([] as any);
  const [order, setOrder] = useState({} as Order);

  const [impactMultiplier, setImpactMultiplier] = useState(0);

  const [isRequestError, changeIsRequestError] = useState(false);
  const [isActiveCampaignsLoaded, changeIsActiveCampaignsLoaded] =
    useState(false);
  const [isMajorOrderLoaded, changeIsMajorOrderLoaded] = useState(false);

  const getActiveCampaigns = () => {
    let result = [] as any[];

    axios
      .get("https://helldiverstrainingmanual.com/api/v1/war/campaign")
      .then((response) => {
        result = response.data;

        changeIsRequestError(false);
        setActiveCampaigns(response.data);
        changeIsActiveCampaignsLoaded(true);
      })
      .catch((error) => {
        changeIsRequestError(true);
        changeIsActiveCampaignsLoaded(false);
      });

    return result;
  };

  const getPlanetRegen = () => {
    axios
      .get("https://helldiverstrainingmanual.com/api/v1/war/status")
      .then((response) => {
        setImpactMultiplier(response.data.impactMultiplier);
        setPlanetRegenArray(response.data.planetStatus);
      })
      .catch(() => {
        changeIsRequestError(true);
      });
  };

  const getMajorOrder = () => {
    axios
      .get(
        "https://helldivers-2-dotnet.fly.dev/raw/api/v2/Assignment/War/801",
        {
          headers: {
            "Accept-Language": "ru-RU",
          },
        },
      )
      .then((response) => {
        changeIsRequestError(false);
        changeIsMajorOrderLoaded(true);

        console.log(response);

        const orderPlanets =
          response.data[0].setting.tasks[0].values[2] !== 0
            ? [
                ...response.data[0].setting.tasks.map(
                  (task: any) => task.values[2],
                ),
              ]
            : [];

        setOrder({
          title: response.data[0].setting.taskDescription,
          expiresIn: response.data[0].expiresIn / 60 / 60,
          description: response.data[0].setting.overrideBrief,
          completedPlanets: response.data[0].progress,
          targetPlanets: orderPlanets,
          reward: response.data[0].setting.reward.amount,
        });
      })
      .catch(() => {
        changeIsMajorOrderLoaded(false);
        changeIsRequestError(true);
      });
  };

  useEffect(() => {
    getActiveCampaigns();
    getPlanetRegen();
    getMajorOrder();

    let campaignInterval = setInterval(() => getActiveCampaigns(), 2500) as any;
    let planetRegenInterval = setInterval(() => getPlanetRegen(), 60000) as any;

    return () => {
      campaignInterval = null;
      planetRegenInterval = null;
    };
  }, []);
  return (
    <>
      <TheHeader />

      <RunningLine />

      <main className="flex justify-between">
        <section className="galaxyMap">
          <ThePageTitle title={"карта галактики"} additionalTitle={""} />

          <div className="galaxyMap_Wrapper">
            <div className="galaxyMap_Wrapper_BlankBlock">
              <p className="galaxyMap_Wrapper_BlankBlock_Text">
                Здесь будет карта
              </p>

              <img
                src="/static/GeneralIcons/BuildIcon.svg"
                alt=""
                className="galaxyMap_Wrapper_BlankBlock_Icon"
              />
            </div>
          </div>

          <ThePageTitle title={"главный приказ"} additionalTitle={""} />

          {isRequestError && <MajorOrderError />}

          {isMajorOrderLoaded && order.title && (
            <MajorOrder
              title={order.title}
              expiresIn={order.expiresIn}
              description={order.description}
              targetPlanets={order.targetPlanets}
              completedPlanets={order.completedPlanets}
              reward={order.reward}
            />
          )}

          {!isMajorOrderLoaded && <MajorOrderBlank />}

          {!isMajorOrderLoaded && !order.title && <NoMajorOrder />}
        </section>

        <section className="ml-[30px]">
          <ThePageTitle title={"активные сражения"} additionalTitle={""} />

          <div className="activeEfforts">
            {!isActiveCampaignsLoaded && isRequestError && (
              <ActiveCampaignError />
            )}

            {isActiveCampaignsLoaded && !isRequestError
              ? activeCampaigns.map((activeCampaign) => (
                  <ActiveCampaign
                    key={activeCampaign.planetIndex}
                    planetIndex={activeCampaign.planetIndex}
                    fraction={activeCampaign.faction}
                    isDefense={activeCampaign.defense}
                    expiresIn={activeCampaign?.expireDateTime}
                    percentage={activeCampaign.percentage}
                    playersCount={activeCampaign.players}
                    planetRegenArray={planetRegenArray}
                    impactMultiplier={impactMultiplier}
                  />
                ))
              : !isRequestError &&
                [{ id: 1 }, { id: 2 }, { id: 3 }].map((blank) => (
                  <ActiveCampaignBlank key={blank.id} />
                ))}
          </div>
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
