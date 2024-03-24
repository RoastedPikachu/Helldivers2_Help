import { IResource, Level, Rank } from "@/utils/generalInterfaces";

export const ranks = [
  {
    id: 1,
    iconPath: "/static/ranks/CadetIcon.svg",
    title: "Кадет",
    fromLevel: 0,
    xpCount: 0,
  },
  {
    id: 2,
    iconPath: "/static/ranks/SpaceCadetIcon.svg",
    title: "Космический кадет",
    fromLevel: 5,
    xpCount: 1600,
  },
  {
    id: 3,
    iconPath: "/static/ranks/SergeantIcon.svg",
    title: "Сержант",
    fromLevel: 10,
    xpCount: 7100,
  },
  {
    id: 4,
    iconPath: "/static/ranks/MasterSergeantIcon.svg",
    title: "Мастер-сержант",
    fromLevel: 15,
    xpCount: 14400,
  },
  {
    id: 5,
    iconPath: "/static/ranks/ChiefIcon.svg",
    title: "Мичман",
    fromLevel: 20,
    xpCount: 23900,
  },
  {
    id: 6,
    iconPath: "/static/ranks/SpaceChiefPrimeIcon.svg",
    title: "Главный космический мичман",
    fromLevel: 25,
    xpCount: 35900,
  },
  {
    id: 7,
    iconPath: "/static/ranks/DeathCaptainIcon.svg",
    title: "Смертоносный капитан",
    fromLevel: 30,
    xpCount: 50400,
  },
  {
    id: 8,
    iconPath: "/static/ranks/MarshalIcon.svg",
    title: "Маршал",
    fromLevel: 35,
    xpCount: 67400,
  },
  {
    id: 9,
    iconPath: "/static/ranks/StarMarshalIcon.svg",
    title: "Космический маршал",
    fromLevel: 40,
    xpCount: 87000,
  },
  {
    id: 10,
    iconPath: "/static/ranks/AdmiralIcon.svg",
    title: "Адмирал",
    fromLevel: 45,
    xpCount: 108900,
  },
  {
    id: 11,
    iconPath: "/static/ranks/SkullAdmiralIcon.svg",
    title: "Адмирал Череп",
    fromLevel: 50,
    xpCount: 133400,
  },
  {
    id: 12,
    iconPath: "/static/ranks/SuperCitizenIcon.svg",
    title: "Супер гражданин",
    fromLevel: "Super Citizen издание",
    xpCount: 0,
  },
] as Rank[];

export const levels = [
  {
    id: 1,
    xpRequired: 0,
    xpTotal: 0,
  },
  {
    id: 2,
    xpRequired: 100,
    xpTotal: 100,
  },
  {
    id: 3,
    xpRequired: 250,
    xpTotal: 350,
  },
  {
    id: 4,
    xpRequired: 500,
    xpTotal: 850,
  },
  {
    id: 5,
    xpRequired: 750,
    xpTotal: 1600,
  },
  {
    id: 6,
    xpRequired: 1000,
    xpTotal: 2600,
  },
  {
    id: 7,
    xpRequired: 1000,
    xpTotal: 3600,
  },
  {
    id: 8,
    xpRequired: 1000,
    xpTotal: 4600,
  },
  {
    id: 9,
    xpRequired: 1250,
    xpTotal: 5850,
  },
  {
    id: 10,
    xpRequired: 1250,
    xpTotal: 7100,
  },
  {
    id: 11,
    xpRequired: 1300,
    xpTotal: 8400,
  },
  {
    id: 12,
    xpRequired: 1500,
    xpTotal: 9900,
  },
  {
    id: 13,
    xpRequired: 1500,
    xpTotal: 11400,
  },
  {
    id: 14,
    xpRequired: 1500,
    xpTotal: 12900,
  },
  {
    id: 15,
    xpRequired: 1500,
    xpTotal: 14400,
  },
  {
    id: 16,
    xpRequired: 1500,
    xpTotal: 15900,
  },
  {
    id: 17,
    xpRequired: 2000,
    xpTotal: 17900,
  },
  {
    id: 18,
    xpRequired: 2000,
    xpTotal: 19900,
  },
  {
    id: 19,
    xpRequired: 2000,
    xpTotal: 21900,
  },
  {
    id: 20,
    xpRequired: 2000,
    xpTotal: 23900,
  },
  {
    id: 21,
    xpRequired: 2000,
    xpTotal: 25900,
  },
  {
    id: 22,
    xpRequired: 2500,
    xpTotal: 28400,
  },
  {
    id: 23,
    xpRequired: 2500,
    xpTotal: 30900,
  },
  {
    id: 24,
    xpRequired: 2500,
    xpTotal: 33400,
  },
  {
    id: 25,
    xpRequired: 2500,
    xpTotal: 35900,
  },
  {
    id: 26,
    xpRequired: 2500,
    xpTotal: 38400,
  },
  {
    id: 27,
    xpRequired: 3000,
    xpTotal: 41400,
  },
  {
    id: 28,
    xpRequired: 3000,
    xpTotal: 44400,
  },
  {
    id: 29,
    xpRequired: 3000,
    xpTotal: 47400,
  },
  {
    id: 30,
    xpRequired: 3000,
    xpTotal: 50400,
  },
  {
    id: 31,
    xpRequired: 3000,
    xpTotal: 53400,
  },
  {
    id: 32,
    xpRequired: 3500,
    xpTotal: 56900,
  },
  {
    id: 33,
    xpRequired: 3500,
    xpTotal: 60400,
  },
  {
    id: 34,
    xpRequired: 3500,
    xpTotal: 63900,
  },
  {
    id: 35,
    xpRequired: 3500,
    xpTotal: 67400,
  },
  {
    id: 36,
    xpRequired: 3500,
    xpTotal: 70900,
  },
  {
    id: 37,
    xpRequired: 4000,
    xpTotal: 74900,
  },
  {
    id: 38,
    xpRequired: 4000,
    xpTotal: 78900,
  },
  {
    id: 39,
    xpRequired: 4000,
    xpTotal: 82900,
  },
  {
    id: 40,
    xpRequired: 4000,
    xpTotal: 86900,
  },
  {
    id: 41,
    xpRequired: 4000,
    xpTotal: 90900,
  },
  {
    id: 42,
    xpRequired: 4500,
    xpTotal: 95400,
  },
  {
    id: 43,
    xpRequired: 4500,
    xpTotal: 99900,
  },
  {
    id: 44,
    xpRequired: 4500,
    xpTotal: 104400,
  },
  {
    id: 45,
    xpRequired: 4500,
    xpTotal: 108900,
  },
  {
    id: 46,
    xpRequired: 4500,
    xpTotal: 113400,
  },
  {
    id: 47,
    xpRequired: 5000,
    xpTotal: 118400,
  },
  {
    id: 48,
    xpRequired: 5000,
    xpTotal: 123400,
  },
  {
    id: 49,
    xpRequired: 5000,
    xpTotal: 128400,
  },
  {
    id: 50,
    xpRequired: 5000,
    xpTotal: 133400,
  },
] as Level[];

export const resources = [
  {
    id: 1,
    iconPath: "/static/resources/CommonSampleIcon.svg",
    title: "Обычные образцы",
    difficulties: "На всех сложностях",
    obtainingMethod:
      "Нахождение на точках интереса, аванпостах терминидов и автоматонов",
    applicationScope: "Улучшение 1, 2 и 3 уровня модулей корабля",
    maxAmount: "500 единиц",
    isDependsOnDifficulty: true,
  },
  {
    id: 2,
    iconPath: "/static/resources/RareSampleIcon.svg",
    title: "Редкие образцы",
    difficulties: "Этот вид образцов встречается начиная с 4 уровня сложности",
    obtainingMethod:
      "Нахождение на точках интереса, аванпостах терминидов и автоматонов, также в дикой природе, в форме цветка",
    applicationScope: "Улучшение 1, 2 и 3 уровня модулей корабля",
    maxAmount: "250 единиц",
    isDependsOnDifficulty: true,
  },
  {
    id: 3,
    iconPath: "/static/resources/UltraRareSampleIcon.svg",
    title: "Суперобразцы",
    difficulties: "Этот вид образцов встречается начиная с 7 уровня сложности",
    obtainingMethod: "Нахождение на точке интереса с камнем",
    applicationScope: "Улучшение 2 и 3 уровня модулей корабля",
    maxAmount: "100 единиц",
    isDependsOnDifficulty: true,
  },
  {
    id: 4,
    iconPath: "/static/resources/SuperCreditIcon.svg",
    title: "Супер кредиты",
    difficulties: "На всех сложностях",
    prices: ["$1.99", "$4.99", "$9.99", "$19.99"],
    obtainingMethod:
      "Покупка внутриигровом магазине или нахождение на точках интереса",
    applicationScope: "Покупка предметов в супер-магазине или боевого пропуска",
    maxAmount: "Зависит от размеров кошелька или вашего времени",
    isDependsOnDifficulty: false,
  },
  {
    id: 5,
    iconPath: "/static/resources/MedalIcon.svg",
    title: "Медали",
    difficulties: "На всех сложностях",
    obtainingMethod:
      "Завершение заданий, нахождение на точках интереса, выполнение приказов с Супер-Земли",
    applicationScope: "Покупка содержимого боевого пропуска",
    maxAmount: "250 единиц",
    isDependsOnDifficulty: true,
  },
  {
    id: 6,
    iconPath: "/static/resources/RequisitesIcon.svg",
    title: "Реквизиты",
    difficulties: "На всех сложностях",
    obtainingMethod:
      "Завершение заданий, успешная эвакуация с задания, нахождение на точках интереса",
    applicationScope: "Покупка стратагем",
    maxAmount: "50000 единиц",
    isDependsOnDifficulty: false,
  },
] as IResource[];

export const samplesCountPerDifficulty = [
  {
    id: 1,
    difficultyTitle: "Простейшая",
    commonSamplesCount: 11,
    rareSamplesCount: "-",
    superSamplesCount: "-",
  },
  {
    id: 2,
    difficultyTitle: "Легкая",
    commonSamplesCount: 15,
    rareSamplesCount: "-",
    superSamplesCount: "-",
  },
  {
    id: 3,
    difficultyTitle: "Средняя",
    commonSamplesCount: 21,
    rareSamplesCount: "-",
    superSamplesCount: "-",
  },
  {
    id: 4,
    difficultyTitle: "Непростая",
    commonSamplesCount: 25,
    rareSamplesCount: 13,
    superSamplesCount: "-",
  },
  {
    id: 5,
    difficultyTitle: "Высокая",
    commonSamplesCount: 29,
    rareSamplesCount: 18,
    superSamplesCount: "-",
  },
  {
    id: 6,
    difficultyTitle: "Экстрим",
    commonSamplesCount: 35,
    rareSamplesCount: 20,
    superSamplesCount: "-",
  },
  {
    id: 7,
    difficultyTitle: "Самоубийство",
    commonSamplesCount: 35,
    rareSamplesCount: 26,
    superSamplesCount: 3,
  },
  {
    id: 8,
    difficultyTitle: "Невозможная",
    commonSamplesCount: 40,
    rareSamplesCount: 30,
    superSamplesCount: 5,
  },
  {
    id: 9,
    difficultyTitle: "Прямо в ад",
    commonSamplesCount: 40,
    rareSamplesCount: 40,
    superSamplesCount: 6,
  },
];

export const medalsCountPerDifficulty = [
  {
    id: 1,
    difficultyTitle: "Простейшая",
    firstMissionCount: 1,
    secondMissionCount: "-",
    thirdMissionCount: "-",
    totalCount: 1,
  },
  {
    id: 2,
    difficultyTitle: "Легкая",
    firstMissionCount: 2,
    secondMissionCount: "-",
    thirdMissionCount: "-",
    totalCount: 2,
  },
  {
    id: 3,
    difficultyTitle: "Средняя",
    firstMissionCount: 2,
    secondMissionCount: 4,
    thirdMissionCount: "-",
    totalCount: 6,
  },
  {
    id: 4,
    difficultyTitle: "Непростая",
    firstMissionCount: 3,
    secondMissionCount: 5,
    thirdMissionCount: "-",
    totalCount: 8,
  },
  {
    id: 5,
    difficultyTitle: "Высокая",
    firstMissionCount: 4,
    secondMissionCount: 6,
    thirdMissionCount: 8,
    totalCount: 18,
  },
  {
    id: 6,
    difficultyTitle: "Экстрим",
    firstMissionCount: 5,
    secondMissionCount: 7,
    thirdMissionCount: 9,
    totalCount: 21,
  },
  {
    id: 7,
    difficultyTitle: "Самоубийство",
    firstMissionCount: 6,
    secondMissionCount: 8,
    thirdMissionCount: 10,
    totalCount: 24,
  },
  {
    id: 8,
    difficultyTitle: "Невозможная",
    firstMissionCount: 7,
    secondMissionCount: 10,
    thirdMissionCount: 12,
    totalCount: 29,
  },
  {
    id: 9,
    difficultyTitle: "Прямо в ад",
    firstMissionCount: 8,
    secondMissionCount: 11,
    thirdMissionCount: 14,
    totalCount: 33,
  },
];