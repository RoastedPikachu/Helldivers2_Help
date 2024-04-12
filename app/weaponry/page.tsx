"use client";
import React from "react";

import { observer, Observer } from "mobx-react-lite";

import { SwiperSlide } from "swiper/react";

import { weaponsStore } from "@/store/WeaponsStore";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";
import ModalSlider from "@/widgets/modalSlider/ModalSlider";
import WeaponSection from "@/widgets/weaponSection/WeaponSection";

import RunningLine from "@/shared/RunningLine";
import TheScrollToUpButton from "@/shared/TheScrollToUpButton/TheScrollToUpButton";
import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import WeaponAdditionalInfoModalWindow from "@/entities/weaponryPage/weaponAdditionalInfoModalWindow/WeaponAdditionalInfoModalWindow";

import "swiper/css";
import "swiper/css/navigation";

import "./Weaponry.css";

const Page = observer(() => {
  const getSpecificWeaponArray = (weaponType: number) => {
    switch (weaponType) {
      case 1:
        return weaponsStore.primaryWeapons;
      case 2:
        return weaponsStore.secondaryWeapons;
      case 3:
        return weaponsStore.grenades;
    }
  };

  return (
    <Observer>
      {() => (
        <>
          <TheHeader />

          <RunningLine />

          <TheScrollToUpButton />

          <main>
            <ThePageTitle
              title={"вооружение"}
              additionalTitle={"адского десантника"}
            />

            <PageDescription
              description={
                "Вооружение — это ключ к успеху для любого Адского Десантника. От дробовиков до энергетического оружия — все это инструменты, которые помогут вам распространять управляемую демократию в галактике."
              }
            />

            <PageDescription
              description={
                "Когда жуки начнут ползти, а машины — стрелять, не стойте в стороне. Возьмите оружие, и покажите врагам Супер-Земли, на что способны настоящие Адские Десантники. С демократией на вашей стороне и вашими товарищами рядом, вы непобедимы!"
              }
            />

            <ModalSlider currentEntityId={weaponsStore.currentWeaponInfo.id}>
              {getSpecificWeaponArray(
                weaponsStore.currentWeaponInfo.weaponType?.typeNumber!,
              )?.map((weapon) => (
                <SwiperSlide key={weapon.id}>
                  {"magsCount" in weapon ? (
                    <WeaponAdditionalInfoModalWindow
                      imagePath={weapon.imagePath}
                      name={weapon.name}
                      description={weapon.description}
                      price={weapon.price}
                      damage={weapon.damage}
                      magsCount={weapon.magsCount}
                      roundsPerMag={weapon.roundsPerMag}
                      totalRounds={weapon.totalRounds}
                      recoil={weapon.recoil}
                      fireRate={weapon.fireRate}
                      totalDamage={weapon.totalDamage}
                      dpm={weapon.dpm}
                    />
                  ) : (
                    <WeaponAdditionalInfoModalWindow
                      imagePath={weapon.imagePath}
                      name={weapon.name}
                      description={weapon.description}
                      price={weapon.price}
                      damage={weapon.damage}
                      fuseTime={weapon.fuseTime}
                      penetration={weapon.penetration}
                      radius={weapon.radius}
                    />
                  )}
                </SwiperSlide>
              ))}
            </ModalSlider>

            <WeaponSection
              title={"ОСНОВНОЕ"}
              gridStyles={"grid-cols-3"}
              weaponArray={getSpecificWeaponArray(1)!}
            />

            <WeaponSection
              title={"ВТОРИЧНОЕ"}
              gridStyles={"grid-cols-3"}
              weaponArray={getSpecificWeaponArray(2)!}
            />

            <WeaponSection
              title={"ГРАНАТЫ"}
              gridStyles={"grid-cols-4"}
              weaponArray={getSpecificWeaponArray(3)!}
            />
          </main>

          <TheFooter />
        </>
      )}
    </Observer>
  );
});

export default Page;
