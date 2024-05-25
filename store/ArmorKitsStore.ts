import { makeAutoObservable } from "mobx";

import { obtainingType } from "@/data/armor/obtainingTypes";
import { armorBonuses } from "@/data/armor/bonuses";

import { ArmorKit, CurrentArmorInfo } from "@/utils/storeInterfaces";
import { ArmorObtainingType } from "@/utils/dataInterfaces";

class ArmorKitsStore {
  currentArmorInfo = {} as CurrentArmorInfo;

  armorKits: { [key: string]: ArmorKit[] } = {
    tutorial: [
      {
        id: 1,
        imagePath: "/static/ArmorKits/B01TacticalImage.webp",
        type: "Средняя броня",
        name: "B-01 «Тактик»",
        obtainingType: obtainingType["0"],
        obtainingMethod: "Пройдите обучение",
        description:
          "Это стандартная броня Супер-Земли, изготовленная из того же титанового сплава, что и корпус эсминца.",
        price: 0,
        armorRating: 150,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.extraArmor,
      },
    ],
    helldiversMobilize: [
      {
        id: 1,
        imagePath: "/static/ArmorKits/Sc34InfiltratorImage.webp",
        type: "Легкая броня",
        name: "SС-34 «Лазутчик»",
        obtainingType: obtainingType["1"],
        obtainingMethod:
          "Покупается в боевом пропуске «Адские Десантники, в бой!»",
        description:
          "Работающая на плутонии-238 ядерная батарея позволяет сканировать местность еще долгое время после того, как пользователь прекратил существование.",
        price: 5,
        armorRating: 70,
        speed: 530,
        staminaRegen: 115,
        bonus: armorBonuses.scout,
      },
      {
        id: 2,
        imagePath: "/static/ArmorKits/Fs05MarksmanImage.webp",
        type: "Тяжелая броня",
        name: "FS-05 «Меткий стрелок»",
        obtainingType: obtainingType["1"],
        obtainingMethod:
          "Покупается в боевом пропуске «Адские Десантники, в бой!»",
        description:
          "В первых прототипах использовались амортизационные гели, но эта броня стабилизирует цель с помощью встроенных гироскопов.",
        price: 11,
        armorRating: 150,
        speed: 450,
        staminaRegen: 50,
        bonus: armorBonuses.fortification,
      },
      {
        id: 3,
        imagePath: "/static/ArmorKits/Ce35TrenchEngineerImage.webp",
        type: "Средняя броня",
        name: "CE-35 «Траншейный инженер»",
        obtainingType: obtainingType["1"],
        obtainingMethod:
          "Покупается в боевом пропуске «Адские Десантники, в бой!»",
        description:
          "Когда колонисты из системы Хеллмейр нашли потерянный груз с этой броней, их любимым развлечением стало пробивание заборов.",
        price: 17,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.engineerKit,
      },
      {
        id: 4,
        imagePath: "/static/ArmorKits/Сm09BonesnapperImage.webp",
        type: "Средняя броня",
        name: "CM-09 «Костолом»",
        obtainingType: obtainingType["1"],
        obtainingMethod:
          "Покупается в боевом пропуске «Адские Десантники, в бой!»",
        description:
          "Дизайн брони основан на костюме колониального хирурга, на чьи медицинские обязанности часто накладывается необходимость участвовать в обороне.",
        price: 27,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.medKit,
      },
      {
        id: 5,
        imagePath: "/static/ArmorKits/Dp40HeroOfTheFederationImage.webp",
        type: "Средняя броня",
        name: "DP-40 «Герой федерации»",
        obtainingType: obtainingType["1"],
        obtainingMethod:
          "Покупается в боевом пропуске «Адские Десантники, в бой!»",
        description:
          'Хотя изначально он предназначался исключительно для церемониального использования, его вдохновляющая энергия оказалась столь же полезной на поле боя (темный вариант набора "Кавалер демократии").',
        price: 45,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.democracyProtects,
      },
      {
        id: 6,
        imagePath: "/static/ArmorKits/Fs23BattleMasterImage.webp",
        type: "Тяжелая броня",
        name: "FS-23 «Воевода»",
        obtainingType: obtainingType["1"],
        obtainingMethod:
          "Покупается в боевом пропуске «Адские Десантники, в бой!»",
        description:
          "Бывшие в употреблении образцы этой стабилизирующей прицел брони неожиданно стали популярны среди любителей наблюдать за инопланетными птицами.",
        price: 60,
        armorRating: 150,
        speed: 450,
        staminaRegen: 50,
        bonus: armorBonuses.fortification,
      },
      {
        id: 7,
        imagePath: "/static/ArmorKits/Sc30TrailblazerScoutImage.webp",
        type: "Легкая броня",
        name: "SС-30 «Следопыт»",
        obtainingType: obtainingType["1"],
        obtainingMethod:
          "Покупается в боевом пропуске «Адские Десантники, в бой!»",
        description:
          "Эта запатентованная ткань поглощает инфракрасное и ультрафиолетовое излучение, предотвращая обнаружение всеми известными видами детекторов.",
        price: 85,
        armorRating: 50,
        speed: 550,
        staminaRegen: 125,
        bonus: armorBonuses.scout,
      },
      {
        id: 8,
        imagePath: "/static/ArmorKits/Sa04CombatTechnicianImage.webp",
        type: "Средняя броня",
        name: "SA-04 «Боевой техник»",
        obtainingType: obtainingType["1"],
        obtainingMethod:
          "Покупается в боевом пропуске «Адские Десантники, в бой!»",
        description:
          "Этот костюм увеличивает силу носителя, поэтому в нем рекомендуется с осторожностью открывать двери или обнимать коллег.",
        price: 100,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.scout,
      },
      {
        id: 9,
        imagePath: "/static/ArmorKits/Cm14PhysicianImage.webp",
        type: "Средняя броня",
        name: "CM-14 «Врач»",
        obtainingType: obtainingType["1"],
        obtainingMethod:
          "Покупается в боевом пропуске «Адские Десантники, в бой!»",
        description:
          "Уникальное сочетание красного, белого и зеленого цветов межгалактического лечебного корпуса извещает Адский Десант, помощь идет!.",
        price: 120,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.medKit,
      },
      {
        id: 10,
        imagePath: "/static/ArmorKits/Dp11ChampionOfThePeopleImage.webp",
        type: "Средняя броня",
        name: "DP-11 «Защитник народа»",
        obtainingType: obtainingType["1"],
        obtainingMethod:
          "Покупается в боевом пропуске «Адские Десантники, в бой!»",
        description:
          "Три нашивки на наплечниках символизируют три принципа Супер-Земли: свободу, демократию и процветание.",
        price: 175,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.democracyProtects,
      },
    ],
    steeledVeterans: [
      {
        id: 1,
        imagePath: "/static/ArmorKits/Sa25SteelTrooperImage.webp",
        type: "Средняя броня",
        name: "SA-25 «Стальной кавалерист»",
        obtainingType: obtainingType["2"],
        obtainingMethod: "Покупается в боевом пропуске «Закаленные ветераны»",
        description:
          "Чтобы добиться оптимальной эффективности, производитель рекомендует избегать погружения брони в соленую воду на длительный срок.",
        price: 30,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.servoAssisted,
      },
      {
        id: 2,
        imagePath: "/static/ArmorKits/Sa12ServoAssistedImage.webp",
        type: "Средняя броня",
        name: "SA-12 «Сервоприводная»",
        obtainingType: obtainingType["2"],
        obtainingMethod: "Покупается в боевом пропуске «Закаленные ветераны»",
        description:
          "Каждая конечность с сервоприводом содержит 138 крошечных моторчиков, которые поддерживают естественную походку и долгосрочное здоровье спины.",
        price: 80,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.servoAssisted,
      },
      {
        id: 3,
        imagePath: "/static/ArmorKits/Sa32DynamoImage.webp",
        type: "Тяжелая броня",
        name: "SA-32 «Динамо»",
        obtainingType: obtainingType["2"],
        obtainingMethod: "Покупается в боевом пропуске «Закаленные ветераны»",
        description:
          "С помощью гражданских модификаций этой брони жители горных колоний зашвыривают наверх метеорологическое оборудование.",
        price: 112,
        armorRating: 150,
        speed: 450,
        staminaRegen: 50,
        bonus: armorBonuses.servoAssisted,
      },
    ],
    cuttingEdge: [
      {
        id: 1,
        imagePath: "/static/ArmorKits/Ex03Prototype3Image.webp",
        type: "Средняя броня",
        name: "EX-03 «Прототип 3»",
        obtainingType: obtainingType["3"],
        obtainingMethod: "Покупается в боевом пропуске «На острие»",
        description:
          "Проводка этого прототипа находится под напряжением 400 000 вольт, поэтому он оснащен удобной изолирующей резиновой подкладкой.",
        price: 30,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.electricalCondult,
      },
      {
        id: 2,
        imagePath: "/static/ArmorKits/Ex16Prototype16Image.webp",
        type: "Средняя броня",
        name: "EX-16 «Прототип 16»",
        obtainingType: obtainingType["3"],
        obtainingMethod: "Покупается в боевом пропуске «На острие»",
        description:
          "Так как электрическая дуга создает мощное магнитное поле, пользователю не стоит активировать ее вблизи сшитых скобами документов.",
        price: 80,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.electricalCondult,
      },
      {
        id: 3,
        imagePath: "/static/ArmorKits/Ex00PrototypeXImage.webp",
        type: "Легкая броня",
        name: "EX-00 «Прототип X»",
        obtainingType: obtainingType["3"],
        obtainingMethod: "Покупается в боевом пропуске «На острие»",
        description:
          "Результат траты нескольких миллиардов суперкредитов и 12 лет разработки «Солдата будущего».",
        price: 112,
        armorRating: 50,
        speed: 550,
        staminaRegen: 125,
        bonus: armorBonuses.electricalCondult,
      },
    ],
    democraticDetonation: [
      {
        id: 1,
        imagePath: "/static/ArmorKits/Ce27GroundBreakerImage.webp",
        type: "Средняя броня",
        name: "CE-27 «Первопробиватель»",
        obtainingType: obtainingType["4"],
        obtainingMethod:
          "Покупается в боевом пропуске «Демократический подрыв»",
        description:
          "«Нет такой поверхности, которую нельзя пробить», — старшина Джанет Джонс, основательница землеройного корпуса.",
        price: 30,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.engineerKit,
      },
      {
        id: 2,
        imagePath: "/static/ArmorKits/Ce07DemolitionSpecialistImage.webp",
        type: "Легкая броня",
        name: "CE-07 «Мастер-подрывник»",
        obtainingType: obtainingType["4"],
        obtainingMethod:
          "Покупается в боевом пропуске «Демократический подрыв»",
        description:
          "Эта броня была разработана для лунных терраформеров и способна выдержать резкие перепады давления, температуры и скорости перемещения.",
        price: 80,
        armorRating: 64,
        speed: 536,
        staminaRegen: 118,
        bonus: armorBonuses.engineerKit,
      },
      {
        id: 3,
        imagePath: "/static/ArmorKits/Fs55DevastatorImage.webp",
        type: "Тяжелая броня",
        name: "FS-55 «Разрушитель»",
        obtainingType: obtainingType["4"],
        obtainingMethod:
          "Покупается в боевом пропуске «Демократический подрыв»",
        description:
          "Содержит множество маленьких карманов, позволяющих равномерно распределить вес боеприпасов, образцов и симпатичных камней.",
        price: 112,
        armorRating: 150,
        speed: 450,
        staminaRegen: 50,
        bonus: armorBonuses.fortification,
      },
    ],
    polarPatriots: [
      {
        id: 1,
        imagePath: "/static/ArmorKits/Cw36WinterWarriorImage.webp",
        type: "Тяжелая броня",
        name: "CW-36 «Зимний воин»",
        obtainingType: obtainingType["5"],
        obtainingMethod: "Покупается в боевом пропуске «Полярные патриоты»",
        description:
          "Броня обеспечивает маскировку в заснеженных областях и пользуется популярностью среди фотографов-натуралистов и опытных охотников.",
        price: 30,
        armorRating: 150,
        speed: 450,
        staminaRegen: 50,
        bonus: armorBonuses.servoAssisted,
      },
      {
        id: 2,
        imagePath: "/static/ArmorKits/Cw22KadiaqImage.webp",
        type: "Тяжелая броня",
        name: "CW-22 «Кадьяк»",
        obtainingType: obtainingType["5"],
        obtainingMethod: "Покупается в боевом пропуске «Полярные патриоты»",
        description:
          "Броня CW-22 «Кадьяк» была тщательно испытана на герметичность патриотичными добровольцами в рамках программы продвижения граждан «Подопытные для Супер-Земли».",
        price: 80,
        armorRating: 150,
        speed: 450,
        staminaRegen: 50,
        bonus: armorBonuses.fortification,
      },
      {
        id: 3,
        imagePath: "/static/ArmorKits/Cw4ArcticRangerImage.webp",
        type: "Легкая броня",
        name: "CW-4 «Арктический рейнджер»",
        obtainingType: obtainingType["5"],
        obtainingMethod: "Покупается в боевом пропуске «Полярные патриоты»",
        description:
          "Оснащен разгрузочным поясом со множеством карманов, которые можно наполнить различными предметами: перочинными ножами, сувенирами из дома или интересными камнями.",
        price: 112,
        armorRating: 50,
        speed: 550,
        staminaRegen: 125,
        bonus: armorBonuses.scout,
      },
    ],
    superstore: [
      {
        id: 1,
        imagePath: "/static/ArmorKits/B08LightGunnerImage.webp",
        type: "Легкая броня",
        name: "B-08 «Легкий стрелок»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          "Компактная и гибкая, эта кевларовая броня добавляет минимальную массу, что делает ее обычным выбором для фитнес-тестов Адских Десантников.",
        price: 225,
        armorRating: 100,
        speed: 550,
        staminaRegen: 125,
        bonus: armorBonuses.fortification,
      },
      {
        id: 2,
        imagePath: "/static/ArmorKits/B24EnforcerImage.webp",
        type: "Средняя броня",
        name: "B-24 «Вышибала»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          "В ходе полевых испытаний 84% пользователей заявили, что броня улучшила их осанку и самооценку.",
        price: 225,
        armorRating: 129,
        speed: 471,
        staminaRegen: 71,
        bonus: armorBonuses.fortification,
      },
      {
        id: 3,
        imagePath: "/static/ArmorKits/B27FortifiedCommandoImage.webp",
        type: "Тяжелая броня",
        name: "B-27 «Укрепленный коммандос»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          'Впервые эта броня появилась в клипе на летний хит "Наша любовь словно свобода (нерушима)".',
        price: 600,
        armorRating: 200,
        speed: 450,
        staminaRegen: 50,
        bonus: armorBonuses.extraArmor,
      },
      {
        id: 4,
        imagePath: "/static/ArmorKits/Ce67TitanImage.webp",
        type: "Легкая броня",
        name: "CE-67 «Титан»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          "Являясь качественным продуктом, эта броня может разрушить 300 000 километров ограждений без снижения эксплуатационной эффективности.",
        price: 225,
        armorRating: 79,
        speed: 521,
        staminaRegen: 111,
        bonus: armorBonuses.engineerKit,
      },
      {
        id: 5,
        imagePath: "/static/ArmorKits/Ce74BreakerImage.webp",
        type: "Легкая броня",
        name: "CE-74 «Крушитель»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          "Отечественная версия этой брони доступна для граждан, которые хотят выполнить эффективные проекты по ремонту дома.",
        price: 375,
        armorRating: 50,
        speed: 550,
        staminaRegen: 125,
        bonus: armorBonuses.engineerKit,
      },
      {
        id: 6,
        imagePath: "/static/ArmorKits/Ce81JuggernautImage.webp",
        type: "Средняя броня",
        name: "CE-81 «Джаггернаут»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          "Один из самых долговечных видов инженерных брони. Каждый комплект прошел проверку взрослой особью жука-громилы.",
        price: 375,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.engineerKit,
      },
      {
        id: 7,
        imagePath: "/static/ArmorKits/Cm10ClinicianImage.webp",
        type: "Средняя броня",
        name: "CM-10 «Клиницист»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          "Запатентованная технология обратного шва снижает риск попадания телесных жидкостей внутрь бронм.",
        price: 375,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.medKit,
      },
      {
        id: 8,
        imagePath: "/static/ArmorKits/Cm17ButcherImage.webp",
        type: "Тяжелая броня",
        name: "CM-17 «Мясник»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          "Броня популярна у фронтовых хирургов, которые как искусно собирают тела, так и разбирают их по кусочкам.",
        price: 375,
        armorRating: 150,
        speed: 450,
        staminaRegen: 50,
        bonus: armorBonuses.medKit,
      },
      {
        id: 9,
        imagePath: "/static/ArmorKits/Cm21TrenchParamedicImage.webp",
        type: "Легкая броня",
        name: "CM-21 «Траншейный медик»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          "Когда-то эта броня предназначалась для переноски медицинского оборудования на поле боя. Сейчас в ней можно носить большой запас стимов.",
        price: 375,
        armorRating: 64,
        speed: 536,
        staminaRegen: 118,
        bonus: armorBonuses.medKit,
      },
      {
        id: 10,
        imagePath: "/static/ArmorKits/Fs11ExecutionerImage.webp",
        type: "Тяжелая броня",
        name: "FS-11 «Палач»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          'Эту броню популяризовал актер Чип Месситер, который носил ее в боевике-ромком-мюзикле "Мое сердце похитил человек в шлеме".',
        price: 225,
        armorRating: 150,
        speed: 450,
        staminaRegen: 50,
        bonus: armorBonuses.fortification,
      },
      {
        id: 11,
        imagePath: "/static/ArmorKits/Fs34ExterminatorImage.webp",
        type: "Средняя броня",
        name: "FS-34 «Истребитель»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          "Имеет запатентованное антипригарное покрытие, которое облегчает соскабливание внутренностей после долгого рабочего дня.",
        price: 600,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.fortification,
      },
      {
        id: 12,
        imagePath: "/static/ArmorKits/Fs37RavagerImage.webp",
        type: "Легкая броня",
        name: "FS-37 «Разоритель»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          "Содержит множество маленьких карманов, позволяющих равномерно распределить вес боеприпасов, образцов и симпатичных камешков.",
        price: 375,
        armorRating: 50,
        speed: 550,
        staminaRegen: 125,
        bonus: armorBonuses.engineerKit,
      },
      {
        id: 13,
        imagePath: "/static/ArmorKits/Fs38EradicatorImage.webp",
        type: "Легкая броня",
        name: "FS-38 «Искоренитель»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          "Впервые он был применен в шахтах Киберстана, где обеспечивал защиту от взрывов в богатых водородом пещерах.",
        price: 375,
        armorRating: 50,
        speed: 550,
        staminaRegen: 125,
        bonus: armorBonuses.fortification,
      },
      {
        id: 14,
        imagePath: "/static/ArmorKits/Fs61DreadnoughtImage.webp",
        type: "Тяжелая броня",
        name: "FS-61 «Дредноут»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          "С помощью гражданских модификаций этой брони жители горных колоний зашвыривают наверх метеорологическое оборудование.",
        price: 375,
        armorRating: 150,
        speed: 450,
        staminaRegen: 50,
        bonus: armorBonuses.servoAssisted,
      },
      {
        id: 15,
        imagePath: "/static/ArmorKits/Sc15DroneMasterImage.webp",
        type: "Средняя броня",
        name: "SС-15 «Мастер дронов»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          "Некоторые солдаты сообщают о странных радиопомехах, появляющихся, если носить эту броню рядом с инопланетными артефактами.",
        price: 375,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.engineerKit,
      },
      {
        id: 16,
        imagePath: "/static/ArmorKits/Sc37LegionnaireImage.webp",
        type: "Легкая броня",
        name: "SС-37 «Легионер»",
        obtainingType: obtainingType["6"],
        obtainingMethod: "Покупается в Супермагазине",
        description:
          'Эта броня основана на старинной униформе "Легиона Суперземли", менее патриотичного предшественника "Адских Десантников".',
        price: 225,
        armorRating: 50,
        speed: 550,
        staminaRegen: 125,
        bonus: armorBonuses.servoAssisted,
      },
    ],
    preOrder: [
      {
        id: 1,
        imagePath: "/static/ArmorKits/Tr7AmbassadorOfTheBrandImage.webp",
        type: "Средняя броня",
        name: "TR-7 «Представитель бренда»",
        obtainingType: obtainingType["7"],
        obtainingMethod: "Бонус за предзаказ",
        description:
          "Рекламная броня, изготовленная компанией SUMY Corp. в рамках весьма успешной маркетинговой кампании замороженного йогурта.",
        price: 0,
        armorRating: 150,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.extraArmor,
      },
      {
        id: 2,
        imagePath: "/static/ArmorKits/Tr9CavalierOfDemocracyImage.webp",
        type: "Средняя броня",
        name: "TR-9 «Кавалер демократии»",
        obtainingType: obtainingType["7"],
        obtainingMethod: "Бонус за предзаказ",
        description:
          "Носители этих доспехов не ездят верхом на лошадях, но, тем не менее, отправляются в бой верхом на верном скакуне Свободы.",
        price: 0,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.democracyProtects,
      },
      {
        id: 3,
        imagePath: "/static/ArmorKits/Tr62KnightImage.webp",
        type: "Тяжелая броня",
        name: "TR-62 «Рыцарь»",
        obtainingType: obtainingType["7"],
        obtainingMethod: "Бонус за предзаказ",
        description:
          "Создан для того, чтобы вершить правосудие в самых темных уголках галактики.",
        price: 0,
        armorRating: 150,
        speed: 450,
        staminaRegen: 50,
        bonus: armorBonuses.servoAssisted,
      },
    ],
    superCitizen: [
      {
        id: 1,
        imagePath: "/static/ArmorKits/Dp53SaviourOfTheFreeImage.webp",
        type: "Средняя броня",
        name: "DP-53 «Спаситель свободных»",
        obtainingType: obtainingType["8"],
        obtainingMethod: "Покупка издания Super-Citizen",
        description:
          "Точная копия доспехов, которые носили в битве за Пик Свободы. Почитайте их наследие и носите его с гордостью.",
        price: 0,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.democracyProtects,
      },
    ],
    twitchDrops: [
      {
        id: 1,
        imagePath: "/static/ArmorKits/Tr117AlphaCommanderImage.webp",
        type: "Средняя броня",
        name: "TR-117 «Альфа командир»",
        obtainingType: obtainingType["9"],
        obtainingMethod: "Helldivers2 Twitch-drops",
        description:
          "Для столь сильных и уверенных в себе воинов, что им не требуется какая-либо поддержка.",
        price: 0,
        armorRating: 100,
        speed: 500,
        staminaRegen: 100,
        bonus: armorBonuses.medKit,
      },
    ],
  };

  constructor() {
    makeAutoObservable(this);
  }

  changeCurrentArmorInfo(id: number, obtainingType: ArmorObtainingType) {
    this.currentArmorInfo = { id: id, obtainingType: obtainingType };
  }

  clearCurrentArmorInfo() {
    this.currentArmorInfo = {} as CurrentArmorInfo;
  }
}

export const armorStore = new ArmorKitsStore();
