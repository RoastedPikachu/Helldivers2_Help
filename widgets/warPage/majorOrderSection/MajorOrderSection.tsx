"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";

import { Order } from "@/utils/componentInterfaces";

import SectionTitle from "@/shared/sectionTitle/SectionTitle";

import MajorOrderError from "@/entities/orders/majorOrderError/MajorOrderError";
import MajorOrder from "@/entities/orders/majorOrder/MajorOrder";
import MajorOrderBlank from "@/entities/orders/majorOrderBlank/MajorOrderBlank";
import NoMajorOrder from "@/entities/orders/noMajorOrder/NoMajorOrder";

import "./MajorOrderSection.css";

const MajorOrderSection = () => {
  const [isMajorOrderLoaded, changeMajorOrderLoadStatus] = useState(false);
  const [isNoMajorOrder, changeMajorOrderExistenceStatus] = useState(false);
  const [isMajorOrderReceiveError, changeMajorOrderReceiveErrorStatus] =
    useState(false);

  const [majorOrder, setMajorOrder] = useState({} as Order);

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
        changeMajorOrderReceiveErrorStatus(false);
        changeMajorOrderLoadStatus(true);

        const data = response.data[0];

        const orderPlanets =
          data.setting.tasks[0].values[2] !== 0
            ? [...data.setting.tasks.map((task: any) => task.values[2])]
            : [];

        setMajorOrder({
          title: data.setting.taskDescription,
          expiresIn: data.expiresIn / 60 / 60,
          description: data.setting.overrideBrief,
          targetPlanets: orderPlanets,
          targetCount: data.setting.tasks[0].values[0],
          completedPlanets: data.progress,
          reward: data.setting.reward.amount,
        });
      })
      .catch((error) => {
        changeMajorOrderReceiveErrorStatus(true);
      });
  };

  useEffect(() => {
    getMajorOrder();

    let majorOrderInterval = setInterval(() => getMajorOrder(), 60000) as any;

    return () => {
      majorOrderInterval = null;
    };
  }, []);
  return (
    <section className="majorOrderSection">
      <SectionTitle text={"ПРИКАЗЫ"} />

      {isMajorOrderReceiveError && <MajorOrderError />}

      {!isMajorOrderLoaded && !isMajorOrderReceiveError && <MajorOrderBlank />}

      {isMajorOrderLoaded && !isMajorOrderReceiveError && isNoMajorOrder && (
        <NoMajorOrder />
      )}

      {isMajorOrderLoaded && !isNoMajorOrder && (
        <MajorOrder
          title={majorOrder.title}
          expiresIn={majorOrder.expiresIn}
          description={majorOrder.description}
          targetPlanets={majorOrder.targetPlanets}
          targetCount={majorOrder.targetCount}
          completedPlanets={majorOrder.completedPlanets}
          reward={majorOrder.reward}
        />
      )}
    </section>
  );
};

export default MajorOrderSection;
