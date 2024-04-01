"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { enemyTypeStore } from "@/store/EnemyTypeStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import EnemyType from "@/entities/enemyType/EnemyType";
import CurrentEnemyType from "@/entities/CurrentEnemyType";

const Page = observer(() => {
  return (
    <Observer>
      {() => (
        <>
          <TheHeader />

          <RunningLine />

          <main>
            <ThePageTitle title={"автоматоны"} additionalTitle={""} />

            <PageDescription
              description={
                "Автоматоны олицетворяют угрозу всему демократическому человечеству, представляя страшную силу на поле боя. От неуклюжего чудовища Халка до слабого и архаичного танка, автоматоны - технологическая мощь, нуждающаяся в свободе."
              }
            />

            <PageDescription
              description={
                "Чтобы противостоять угрозе, исходящей от автоматов, Адские Десантники должны извлекать выгоду из присущих им недостатков и использовать их уязвимости при любой возможности. Победить механическую орду можно, используя правильную стратегию, решимость, разные тактики и мощнейшее вооружение."
              }
            />

            <PageDescription
              description={
                "Как передовые защитники Супер-Земли, Адские Десантники должны стойко переносить натиск автоматонов, стремясь преодолеть их тактику и технологии. Только упорство, хитрость, вера в свободу, процветание и демократию может помочь победить угрозу автоматонов, обеспечив дальнейшее продвижение демократии по всей галактике."
              }
            />

            <section className="relative grid grid-cols-3 grid-rows-2 gap-y-[30px] gap-x-[30px] mt-[50px] w-full h-auto">
              {enemyTypeStore.automatons.map((automaton) => (
                <EnemyType
                  key={automaton.id}
                  id={automaton.id}
                  iconPath={automaton.iconPath}
                  rootBlockStyles={"w-full h-[300px]"}
                  fractionType={2}
                  imagePlugStyles={"mt-[70px] h-[230px] text-[7rem]"}
                  title={automaton.title}
                />
              ))}

              {enemyTypeStore.currentEnemyType.id && (
                <CurrentEnemyType rootBlockStyles={"w-full h-[300px]"} />
              )}
            </section>
          </main>

          <TheFooter />
        </>
      )}
    </Observer>
  );
});

export default Page;
