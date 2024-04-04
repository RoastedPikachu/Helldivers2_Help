import React from "react";

import TheHeader from "@/widgets/TheHeader";
import TheFooter from "@/widgets/TheFooter";

import RunningLine from "@/shared/RunningLine";

import "./Stratagems.css";
import Stratagem from "@/entities/stratagem/Stratagem";
import { stratagemStore } from "@/store/StratagemStore";
import TheScrollToUpButton from "@/shared/TheScrollToUpButton/TheScrollToUpButton";

const Page = () => {
  return (
    <>
      <TheHeader />

      <RunningLine />

      <TheScrollToUpButton />

      <main>
        <h2 className="pageTitle">СТРАТАГЕМЫ</h2>

        <p className="pageDescription">
          Каждый Адский Десантник знает, что на безжалостных полях сражений
          выживание зависит не только от огневой мощи, но и от стратегии,
          хитрости и разумного использования стратагем.
        </p>

        <p className="pageDescription">
          Эти очень полезные в галактической войны «штучки» утверждают наше
          господство над инопланетной угрозой и отстаивают ценности свободы и
          управляемой демократии.
        </p>

        <p className="pageDescription">
          Когда мы сталкиваемся с превосходящими силами противника, стратагемы
          становятся средством, способным изменить ход битвы. Будь то нанесение
          точечных ударов, развертывание мощных турелей или получение снабжения,
          каждая стратагема служит важнейшей цели — обеспечению свободы и
          процветания в галактике.
        </p>

        <section className="pageSection">
          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">ОРУЖИЕ ПОДДЕРЖКИ</h3>

            <div className="pageSection_Block_Wrapper">
              {stratagemStore.stratagems
                .filter((stratagem) => stratagem.type.typeNumber === 0)
                .map((stratagem) => (
                  <Stratagem
                    key={stratagem.id}
                    iconPath={stratagem.iconPath}
                    videoPath={stratagem.videoPath}
                    videoPreviewPath={stratagem.videoPreviewPath}
                    name={stratagem.name}
                    description={stratagem.description}
                    price={stratagem.price}
                    obtainingLevel={stratagem.obtainingLevel}
                    callTime={stratagem.callTime}
                    useCount={stratagem.useCount}
                    reloadTime={stratagem.reloadTime}
                  />
                ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">ОРБИТАЛЬНЫЕ</h3>

            <div className="pageSection_Block_Wrapper">
              {stratagemStore.stratagems
                .filter((stratagem) => stratagem.type.typeNumber === 1)
                .map((stratagem) => (
                  <Stratagem
                    key={stratagem.id}
                    iconPath={stratagem.iconPath}
                    videoPath={stratagem.videoPath}
                    videoPreviewPath={stratagem.videoPreviewPath}
                    name={stratagem.name}
                    description={stratagem.description}
                    price={stratagem.price}
                    obtainingLevel={stratagem.obtainingLevel}
                    callTime={stratagem.callTime}
                    useCount={stratagem.useCount}
                    reloadTime={stratagem.reloadTime}
                  />
                ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">АНГАР</h3>

            <div className="pageSection_Block_Wrapper">
              {stratagemStore.stratagems
                .filter((stratagem) => stratagem.type.typeNumber === 2)
                .map((stratagem) => (
                  <Stratagem
                    key={stratagem.id}
                    iconPath={stratagem.iconPath}
                    videoPath={stratagem.videoPath}
                    videoPreviewPath={stratagem.videoPreviewPath}
                    name={stratagem.name}
                    description={stratagem.description}
                    price={stratagem.price}
                    obtainingLevel={stratagem.obtainingLevel}
                    callTime={stratagem.callTime}
                    useCount={stratagem.useCount}
                    reloadTime={stratagem.reloadTime}
                  />
                ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">КАПИТАНСКИЙ МОСТИК</h3>

            <div className="pageSection_Block_Wrapper">
              {stratagemStore.stratagems
                .filter((stratagem) => stratagem.type.typeNumber === 3)
                .map((stratagem) => (
                  <Stratagem
                    key={stratagem.id}
                    iconPath={stratagem.iconPath}
                    videoPath={stratagem.videoPath}
                    videoPreviewPath={stratagem.videoPreviewPath}
                    name={stratagem.name}
                    description={stratagem.description}
                    price={stratagem.price}
                    obtainingLevel={stratagem.obtainingLevel}
                    callTime={stratagem.callTime}
                    useCount={stratagem.useCount}
                    reloadTime={stratagem.reloadTime}
                  />
                ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">ИНЖЕНЕРНЫЙ ОТСЕК</h3>

            <div className="pageSection_Block_Wrapper">
              {stratagemStore.stratagems
                .filter((stratagem) => stratagem.type.typeNumber === 4)
                .map((stratagem) => (
                  <Stratagem
                    key={stratagem.id}
                    iconPath={stratagem.iconPath}
                    videoPath={stratagem.videoPath}
                    videoPreviewPath={stratagem.videoPreviewPath}
                    name={stratagem.name}
                    description={stratagem.description}
                    price={stratagem.price}
                    obtainingLevel={stratagem.obtainingLevel}
                    callTime={stratagem.callTime}
                    useCount={stratagem.useCount}
                    reloadTime={stratagem.reloadTime}
                  />
                ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">МАСТЕРСКАЯ РОБОТОВ</h3>

            <div className="pageSection_Block_Wrapper">
              {stratagemStore.stratagems
                .filter((stratagem) => stratagem.type.typeNumber === 5)
                .map((stratagem) => (
                  <Stratagem
                    key={stratagem.id}
                    iconPath={stratagem.iconPath}
                    videoPath={stratagem.videoPath}
                    videoPreviewPath={stratagem.videoPreviewPath}
                    name={stratagem.name}
                    description={stratagem.description}
                    price={stratagem.price}
                    obtainingLevel={stratagem.obtainingLevel}
                    callTime={stratagem.callTime}
                    useCount={stratagem.useCount}
                    reloadTime={stratagem.reloadTime}
                  />
                ))}
            </div>
          </div>

          <div className="pageSection_Block">
            <h3 className="pageSection_Block_Title">ОБЩИЕ</h3>

            <div className="pageSection_Block_Wrapper">
              {stratagemStore.stratagems
                .filter((stratagem) => stratagem.type.typeNumber === 6)
                .map((stratagem) => (
                  <Stratagem
                    key={stratagem.id}
                    iconPath={stratagem.iconPath}
                    videoPath={stratagem.videoPath}
                    videoPreviewPath={stratagem.videoPreviewPath}
                    name={stratagem.name}
                    description={stratagem.description}
                    price={stratagem.price}
                    obtainingLevel={stratagem.obtainingLevel}
                    callTime={stratagem.callTime}
                    useCount={stratagem.useCount}
                    reloadTime={stratagem.reloadTime}
                  />
                ))}
            </div>
          </div>
        </section>
      </main>

      <TheFooter />
    </>
  );
};

export default Page;
