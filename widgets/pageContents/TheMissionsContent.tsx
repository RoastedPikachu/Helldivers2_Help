import React from "react";

import {
  automatonMissions,
  generalMissions,
  secondaryMissions,
  terminidMissions,
} from "@/data/missions";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Mission from "@/entities/mission/Mission";

const TheMissionsContent = () => {
  return (
    <main>
      <ThePageTitle title={"типы"} additionalTitle={"миссий"} />

      <PageDescription
        description={
          "Миссии — это то, выполнением чего занимается каждый Адский Десантник. Это сама цель их существования, ведь выполнение миссии — помощь людям, дополнительные ресурсы для Супер-Земли и продвижение демократии в галактике."
        }
      />

      <PageDescription
        description={
          "Каждая миссия является задачей, которую надо выполнить. Она может таить в себе страшные трудности и опасных врагов, но также и полезные ресурсы. Вам придется заниматься большим количеством задач: спасением гражданских, добычей ресурсов, зачисткой противников и т.д. Главное помнить, без Адских Десантников миссию не выполнить, поэтому вы — элита Супер-Земли."
        }
      />

      <EntitySection title={"ОБЩИЕ"} gridStyles={"grid-cols-1"}>
        {generalMissions.map((mission) => (
          <Mission
            key={mission.id}
            imagePath={mission.imagePath}
            title={mission.title}
            description={mission.description}
            level={mission.level}
            targetMissionCompletionCount={mission.targetMissionCompletionCount}
          />
        ))}
      </EntitySection>

      <EntitySection title={"ВТОРОСТЕПЕННЫЕ"} gridStyles={"grid-cols-1"}>
        {secondaryMissions.map((mission) => (
          <Mission
            key={mission.id}
            imagePath={mission.imagePath}
            title={mission.title}
            description={mission.description}
            effect={mission.effect}
            rewardEffect={mission.rewardEffect}
          />
        ))}
      </EntitySection>

      <EntitySection title={"ПРОТИВ ТЕРМИНИДОВ"} gridStyles={"grid-cols-1"}>
        {terminidMissions.map((mission) => (
          <Mission
            key={mission.id}
            imagePath={mission.imagePath}
            title={mission.title}
            description={mission.description}
            level={mission.level}
            targetMissionCompletionCount={mission.targetMissionCompletionCount}
          />
        ))}
      </EntitySection>

      <EntitySection title={"ПРОТИВ АВТОМАТОНОВ"} gridStyles={"grid-cols-1"}>
        {automatonMissions.map((mission) => (
          <Mission
            key={mission.id}
            imagePath={mission.imagePath}
            title={mission.title}
            description={mission.description}
            level={mission.level}
            targetMissionCompletionCount={mission.targetMissionCompletionCount}
          />
        ))}
      </EntitySection>
    </main>
  );
};

export default TheMissionsContent;
