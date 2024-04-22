import { Rank } from "@/utils/generalInterfaces";

export const ranks = [
  {
    id: 1,
    iconPath: "/static/Ranks/CadetIcon.svg",
    title: "Кадет",
    fromLevel: 0,
    xpCount: 0,
  },
  {
    id: 2,
    iconPath: "/static/Ranks/SpaceCadetIcon.svg",
    title: "Космический кадет",
    fromLevel: 5,
    xpCount: 1600,
  },
  {
    id: 3,
    iconPath: "/static/Ranks/SergeantIcon.svg",
    title: "Сержант",
    fromLevel: 10,
    xpCount: 7100,
  },
  {
    id: 4,
    iconPath: "/static/Ranks/MasterSergeantIcon.svg",
    title: "Мастер-сержант",
    fromLevel: 15,
    xpCount: 14400,
  },
  {
    id: 5,
    iconPath: "/static/Ranks/ChiefIcon.svg",
    title: "Мичман",
    fromLevel: 20,
    xpCount: 23900,
  },
  {
    id: 6,
    iconPath: "/static/Ranks/SpaceChiefPrimeIcon.svg",
    title: "Главный космический мичман",
    fromLevel: 25,
    xpCount: 35900,
  },
  {
    id: 7,
    iconPath: "/static/Ranks/DeathCaptainIcon.svg",
    title: "Смертоносный капитан",
    fromLevel: 30,
    xpCount: 50400,
  },
  {
    id: 8,
    iconPath: "/static/Ranks/MarshalIcon.svg",
    title: "Маршал",
    fromLevel: 35,
    xpCount: 67400,
  },
  {
    id: 9,
    iconPath: "/static/Ranks/StarMarshalIcon.svg",
    title: "Космический маршал",
    fromLevel: 40,
    xpCount: 87000,
  },
  {
    id: 10,
    iconPath: "/static/Ranks/AdmiralIcon.svg",
    title: "Адмирал",
    fromLevel: 45,
    xpCount: 108900,
  },
  {
    id: 11,
    iconPath: "/static/Ranks/SkullAdmiralIcon.svg",
    title: "Адмирал Череп",
    fromLevel: 50,
    xpCount: 133400,
  },
  {
    id: 12,
    iconPath: "/static/Ranks/FleetAdmiralIcon.svg",
    title: "Адмирал флота",
    fromLevel: 60,
    xpCount: 189900,
  },
  {
    id: 13,
    iconPath: "/static/Ranks/AdmirableAdmiralIcon.svg",
    title: "Несравненный адмирал",
    fromLevel: 70,
    xpCount: 256400,
  },
  {
    id: 14,
    iconPath: "/static/Ranks/CommanderIcon.svg",
    title: "Командующий",
    fromLevel: 80,
    xpCount: 332900,
  },
  {
    id: 15,
    iconPath: "/static/Ranks/GalacticCommanderIcon.svg",
    title: "Галактический командующий",
    fromLevel: 90,
    xpCount: 419400,
  },
  {
    id: 16,
    iconPath: "/static/Ranks/HellCommanderIcon.svg",
    title: "Командующий преисподней",
    fromLevel: 100,
    xpCount: 515900,
  },
  {
    id: 17,
    iconPath: "/static/Ranks/GeneralIcon.svg",
    title: "Генерал",
    fromLevel: 110,
    xpCount: 622400,
  },
  {
    id: 18,
    iconPath: "/static/Ranks/5StarGeneralIcon.svg",
    title: "5-ти звездочный генерал",
    fromLevel: 120,
    xpCount: 738900,
  },
  {
    id: 19,
    iconPath: "/static/Ranks/10StarGeneralIcon.svg",
    title: "10-ти звездочный генерал",
    fromLevel: 130,
    xpCount: 865400,
  },
  {
    id: 20,
    iconPath: "/static/Ranks/PrivateIcon.svg",
    title: "Рядовой",
    fromLevel: 140,
    xpCount: 1001900,
  },
  {
    id: 21,
    iconPath: "/static/Ranks/SuperPrivateIcon.svg",
    title: "Супер рядовой",
    fromLevel: 150,
    xpCount: 1148400,
  },
  {
    id: 22,
    iconPath: "/static/Ranks/SuperCitizenIcon.svg",
    title: "Супер гражданин",
    fromLevel: "Super Citizen издание",
    xpCount: 0,
  },
] as Rank[];
