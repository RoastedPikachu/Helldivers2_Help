import React from "react";

import { achievementsStore } from "@/store/AchievementsStore";

import EntitySection from "@/widgets/EntitySection";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Achievement from "@/entities/achievement/Achievement";

const TheAchievementsContent = () => {
  return (
    <main>
      <ThePageTitle title={"достижения"} additionalTitle={""} />

      <PageDescription
        description={
          "Для поощрения каждого десантника руководство Супер-Земли разработало список достижений, за выполнение которых вы будете получать почет и уважение от каждого жителя свободной и демократической галактики."
        }
      />

      <EntitySection
        title="ЛЕГКИЕ"
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-2 mlarge:grid-cols-1"}
      >
        {achievementsStore.achievements.easy.map((achievement) => (
          <Achievement
            key={achievement.id}
            iconPath={achievement.iconPath}
            title={achievement.title}
            description={achievement.description}
            accomplishmentWay={achievement.accomplishmentWay}
          />
        ))}
      </EntitySection>

      <EntitySection
        title="ЭКСТРИМ"
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-2 mlarge:grid-cols-1"}
      >
        {achievementsStore.achievements.extreme.map((achievement) => (
          <Achievement
            key={achievement.id}
            iconPath={achievement.iconPath}
            title={achievement.title}
            description={achievement.description}
            accomplishmentWay={achievement.accomplishmentWay}
          />
        ))}
      </EntitySection>

      <EntitySection
        title="ПРЯМО В АД"
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-2 mlarge:grid-cols-1"}
      >
        {achievementsStore.achievements.helldive.map((achievement) => (
          <Achievement
            key={achievement.id}
            iconPath={achievement.iconPath}
            title={achievement.title}
            description={achievement.description}
            accomplishmentWay={achievement.accomplishmentWay}
          />
        ))}
      </EntitySection>

      <EntitySection
        title="ДОЛГИЙ ПУТЬ"
        gridStyles={"mt-[50px] mlarge:mt-[30px] grid-cols-2 mlarge:grid-cols-1"}
      >
        {achievementsStore.achievements.longWay.map((achievement) => (
          <Achievement
            key={achievement.id}
            iconPath={achievement.iconPath}
            title={achievement.title}
            description={achievement.description}
            accomplishmentWay={achievement.accomplishmentWay}
          />
        ))}
      </EntitySection>
    </main>
  );
};

export default TheAchievementsContent;
