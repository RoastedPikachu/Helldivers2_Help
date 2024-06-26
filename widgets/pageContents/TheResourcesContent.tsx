"use client";
import React, { useState } from "react";

import { IResource, ResourceTableTitle } from "@/utils/generalInterfaces";

import { resources } from "@/data/resources";

import ResourceTable from "@/widgets/resourceTable/ResourceTable";

import ThePageTitle from "@/shared/ThePageTitle";
import PageDescription from "@/shared/PageDescription";

import Resource from "@/entities/resource/Resource";
import CurrentResourceInfo from "@/entities/currentResourceInfo/CurrentResourceInfo";

const TheResourcesContent = () => {
  const [currentResource, setCurrentResource] = useState({} as IResource);

  const handleResourceBlockClick = (id: number) => {
    setCurrentResource(resources.find((resource) => resource.id === id)!);
  };

  const getSpecificResourceTitles = (): ResourceTableTitle[] | undefined => {
    if (currentResource.id <= 3) {
      return [
        {
          id: 1,
          name: "Сложность",
        },
        {
          id: 2,
          name: "Количество",
        },
      ];
    } else if (currentResource.id === 5) {
      return [
        {
          id: 1,
          name: "Сложность",
        },
        {
          id: 2,
          name: "1 Миссия",
        },
        {
          id: 3,
          name: "2 Миссия",
        },
        {
          id: 4,
          name: "3 Миссия",
        },
        {
          id: 5,
          name: "Всего",
        },
      ];
    }
  };
  return (
    <main>
      <ThePageTitle title={"ресурсы"} additionalTitle={"галактики"} />

      <PageDescription
        description={
          "Ресурсы — это топливо для повышения вашей личной эффективности в борьбе за продвижение управляемой демократии, свободы и процветания по всей галактике."
        }
      />

      <PageDescription
        description={
          "Они позволяют улучшать корабль, покупать новое снаряжение и вооружение, а также открывать боевой пропуск."
        }
      />

      <section
        id="ResourceInfo"
        className="relative grid grid-cols-3 mlarge:grid-cols-1 gap-y-[30px] mlarge:gap-y-[25px] mmedium:gap-y-[20px] msmall:gap-y-[15px] gap-x-[30px] mlarge:gapy-x-[25px] mmedium:gap-x-[20px] msmall:gap-x-[15px] mt-[50px] mlarge:mt-[30px] w-full h-auto"
      >
        {resources.map((resource) => (
          <Resource
            key={resource.id}
            id={resource.id}
            iconPath={resource.iconPath}
            title={resource.title}
            handleResourceBlockClick={handleResourceBlockClick}
          />
        ))}
      </section>

      <section className="mt-[50px] mlarge:mt-[30px]">
        {currentResource.id && (
          <CurrentResourceInfo
            title={currentResource.title}
            difficulties={currentResource.difficulties}
            prices={currentResource.prices}
            obtainingMethod={currentResource.obtainingMethod}
            applicationScope={currentResource.applicationScope}
            maxAmount={currentResource.maxAmount}
          />
        )}

        {currentResource.isDependsOnDifficulty && (
          <ResourceTable
            resourceId={currentResource.id}
            titles={getSpecificResourceTitles()!}
          />
        )}
      </section>
    </main>
  );
};

export default TheResourcesContent;
