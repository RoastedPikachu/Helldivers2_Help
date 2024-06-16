import { makeAutoObservable } from "mobx";

import { weaponTypes } from "@/data/weaponTypes";

import {
  CurrentWeaponInfo,
  Grenade,
  PrimaryOrSecondaryWeapon,
  SupportWeapon,
} from "@/utils/storeInterfaces";
import { WeaponType } from "@/utils/dataInterfaces";
import { stratagemStore } from "@/store/StratagemStore";
import { obtainingTypes } from "@/data/obtainingTypes";

class WeaponsStore {
  currentWeaponInfo = {} as CurrentWeaponInfo;

  primaryWeapons = [
    {
      id: 1,
      imagePath: "/static/Weaponry/primary/AR23Image.webp",
      weaponType: weaponTypes.primary,
      name: "AR-23 «Освободитель»",
      description:
        "Стандартная штурмовая винтовка ВССЗ, обладающая сбалансированной мощью, скорострельностью и весом, чтобы надежно поражать небольшие цели.",
      price: 0,
      damage: 60,
      magsCount: 7,
      roundsPerMag: 45,
      totalRounds: 315,
      recoil: 15,
      fireRate: 320,
      totalDamage: 18900,
      dps: 526,
      obtainingTypeIcon: obtainingTypes[0].icon,
    },
    {
      id: 2,
      imagePath: "/static/Weaponry/primary/AR23AImage.png",
      weaponType: weaponTypes.primary,
      name: "AR-23A Карабин «Освободитель»",
      description:
        "Компактная версия «Освободителя», отличающаяся повышенной эффективностью на ближней дистанции. Скорострельность повышена за счет увеличения разброса.",
      price: 20,
      damage: 60,
      magsCount: 7,
      roundsPerMag: 45,
      totalRounds: 315,
      recoil: 26,
      fireRate: 920,
      totalDamage: 18900,
      dps: 526,
      obtainingTypeIcon: obtainingTypes[10].icon,
    },
    {
      id: 3,
      imagePath: "/static/Weaponry/primary/LibConcImage.webp",
      weaponType: weaponTypes.primary,
      name: "AR-23Е «Взрывной освободитель»",
      description:
        "Модифицированная винтовка «Освободитель», оснащенная разрывными патронами и коллиматорным прицелом. Обладает повышенным уроном и отдачей.",
      price: 20,
      damage: 65,
      magsCount: 10,
      roundsPerMag: 30,
      totalRounds: 300,
      recoil: 28,
      fireRate: 320,
      totalDamage: 19500,
      dps: 296,
      obtainingTypeIcon: obtainingTypes[6].icon,
    },
    {
      id: 4,
      imagePath: "/static/Weaponry/primary/LibPenImage.webp",
      weaponType: weaponTypes.primary,
      name: "AR-23P «Пробойный освободитель»",
      description:
        "Модифицированная винтовка «Освободитель», оснащенная прицелом и бронебойными боеприпасами, способными уничтожать бронированные цели.",
      price: 40,
      damage: 45,
      magsCount: 10,
      roundsPerMag: 30,
      totalRounds: 300,
      recoil: 19,
      fireRate: 640,
      totalDamage: 13500,
      dps: 372,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 5,
      imagePath: "/static/Weaponry/primary/Br14Image.webp",
      weaponType: weaponTypes.primary,
      name: "BR-14 «Эксперт»",
      description:
        "Точная, бронебойная винтовка BR-14 «Эксперт» выносит справедливые приговоры врагам среднего размера, хотя ограниченный магазин ограничивает ее эффективность против больших групп.",
      price: 20,
      damage: 80,
      magsCount: 8,
      roundsPerMag: 25,
      totalRounds: 200,
      recoil: 40,
      fireRate: 550,
      totalDamage: 16000,
      dps: 577,
      obtainingTypeIcon: obtainingTypes[8].icon,
    },
    {
      id: 6,
      imagePath: "/static/Weaponry/primary/Ar61Image.webp",
      weaponType: weaponTypes.primary,
      name: "AR-61 «Размягчитель»",
      description:
        "Крупнокалиберная штурмовая винтовка, отличающаяся небольшим магазином, но увеличенной останавливающей силой.",
      price: 20,
      damage: 60,
      magsCount: 10,
      roundsPerMag: 35,
      totalRounds: 350,
      recoil: 10,
      fireRate: 600,
      totalDamage: 21000,
      dps: 475,
      obtainingTypeIcon: obtainingTypes[9].icon,
    },
    {
      id: 7,
      imagePath: "/static/Weaponry/primary/R63CsDiligenceImage.webp",
      weaponType: weaponTypes.primary,
      name: "R-63 «Рвение»",
      description:
        "Крупнокалиберная марксманская винтовка. Обладает высоким уроном и точностью, но малой емкостью магазина и низкой скорострельностью.",
      price: 8,
      damage: 125,
      magsCount: 8,
      roundsPerMag: 20,
      totalRounds: 160,
      recoil: 35,
      fireRate: 350,
      totalDamage: 20000,
      dps: 581,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 8,
      imagePath: "/static/Weaponry/primary/R63CsImage.webp",
      weaponType: weaponTypes.primary,
      name: "R-63 «Рвение антиснайпер»",
      description:
        "Модифицированная винтовка «Рвение», обладающая повышенным уроном, но сниженной скорострельностью. Выпускает по одной пуле за раз.",
      price: 40,
      damage: 140,
      magsCount: 6,
      roundsPerMag: 15,
      totalRounds: 90,
      recoil: 53,
      fireRate: 350,
      totalDamage: 12600,
      dps: 622,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 9,
      imagePath: "/static/Weaponry/primary/Smg37Image.webp",
      weaponType: weaponTypes.primary,
      name: "SMG-37 «Защитник»",
      description:
        "Крупнокалиберный пистолет-пулемет с возможностью вести огонь одной рукой. Обладает относительно низкой скорострельностью.",
      price: 15,
      damage: 70,
      magsCount: 7,
      roundsPerMag: 45,
      totalRounds: 315,
      recoil: 10,
      fireRate: 520,
      totalDamage: 22050,
      dps: 519,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 10,
      imagePath: "/static/Weaponry/primary/Smg72Image.webp",
      weaponType: weaponTypes.primary,
      name: "SMG-72 «Трамбовщик»",
      description:
        "Стреляет ударными патронами, оглушающими врагов. Скорострельность снижена по сравнению с другими пистолетами-пулеметами.",
      price: 60,
      damage: 65,
      magsCount: 7,
      roundsPerMag: 45,
      totalRounds: 315,
      recoil: 10,
      fireRate: 475,
      totalDamage: 20475,
      dps: 426,
      obtainingTypeIcon: obtainingTypes[9].icon,
    },
    {
      id: 11,
      imagePath: "/static/Weaponry/primary/Mp98Image.webp",
      weaponType: weaponTypes.primary,
      name: "MP-98 «Рыцарь»",
      description:
        "Пистолет-пулемет с экстремально высоким темпом стрельбы и возможностью вести огонь одной рукой. Идеален для многозадачности.",
      price: "Издание Super-Citizen",
      damage: 50,
      magsCount: 7,
      roundsPerMag: 50,
      totalRounds: 350,
      recoil: 20,
      fireRate: 1380,
      totalDamage: 17500,
      dps: 871,
      obtainingTypeIcon: obtainingTypes[3].icon,
    },
    {
      id: 12,
      imagePath: "/static/Weaponry/primary/Sg8Image.webp",
      weaponType: weaponTypes.primary,
      name: "SG-8 «Каратель»",
      description:
        "Мощный помповый дробовик с двумя магазинами. Отличается ограниченной способностью пробивать броню. Идеален для малых и быстрых целей.",
      price: 4,
      damage: 405,
      magsCount: 3.75,
      roundsPerMag: 16,
      totalRounds: 60,
      recoil: 120,
      fireRate: 80,
      totalDamage: 24300,
      dps: 447,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 13,
      imagePath: "/static/Weaponry/primary/Sg8SImage.webp",
      weaponType: weaponTypes.primary,
      name: "SG-8S «Крушила»",
      description:
        "Модифицированный дробовик «Каратель», стреляющий тяжелыми мощными пулями. Идеально подходит, чтобы пробивать большие дыры в больших целях.",
      price: 60,
      damage: 280,
      magsCount: 3.75,
      roundsPerMag: 16,
      totalRounds: 60,
      recoil: 120,
      fireRate: 80,
      totalDamage: 15000,
      dps: 276,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 14,
      imagePath: "/static/Weaponry/primary/Sg225Image.webp",
      weaponType: weaponTypes.primary,
      name: "SG-225 «Крушитель»",
      description:
        "Автоматический дробовик с высокой скорострельностью, идеально подходящий для устранения толп врагов. Требует частой перезарядки.",
      price: 20,
      damage: 330,
      magsCount: 7,
      roundsPerMag: 13,
      totalRounds: 91,
      recoil: 55,
      fireRate: 300,
      totalDamage: 30030,
      dps: 1263,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 15,
      imagePath: "/static/Weaponry/primary/Sg225IeImage.webp",
      weaponType: weaponTypes.primary,
      name: "SG-225IE «Зажигательный крушитель»",
      description:
        "Модифицированный дробовик «Крушитель», стреляющий зажигательными снарядами. Сильно нагревается, поэтому стреляет только очередями.",
      price: 60,
      damage: 180,
      magsCount: 6,
      roundsPerMag: 25,
      totalRounds: 150,
      recoil: 28,
      fireRate: 300,
      totalDamage: 36000,
      dps: 1011,
      obtainingTypeIcon: obtainingTypes[6].icon,
    },
    {
      id: 16,
      imagePath: "/static/Weaponry/primary/Sg225SpImage.webp",
      weaponType: weaponTypes.primary,
      name: "SG-225SP «Крушитель ураган»",
      description:
        "Модифицированный дробовик «Крушитель», стреляющий плотным зарядом дроби, которая отлично справляется с небольшими целями.",
      price: 60,
      damage: 192,
      magsCount: 8,
      roundsPerMag: 26,
      totalRounds: 208,
      recoil: 28,
      fireRate: 330,
      totalDamage: 39936,
      dps: 851,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 17,
      imagePath: "/static/Weaponry/primary/Jar5Image.webp",
      weaponType: weaponTypes.primary,
      name: "JAR-5 «Угнетатель»",
      description:
        "«Угнетатель» стреляет реактивными снарядами. Отличается высоким уроном, но низкой скорострельностью и малой емкостью магазина.",
      price: 80,
      damage: 275,
      magsCount: 6,
      roundsPerMag: 15,
      totalRounds: 90,
      recoil: 75,
      fireRate: 250,
      totalDamage: 24750,
      dps: 876,
      obtainingTypeIcon: obtainingTypes[6].icon,
    },
    {
      id: 18,
      imagePath: "/static/Weaponry/primary/Cb9Image.webp",
      weaponType: weaponTypes.primary,
      name: "CB-9 «Взрывной арбалет»",
      description:
        "Стреляет мощными взрывающимися зарядами, которые наносят максимальный урон при прямом попадании. При прицеливании необходимо учитывать силу тяжести.",
      price: 80,
      damage: 420,
      magsCount: 8,
      roundsPerMag: 5,
      totalRounds: 40,
      recoil: 35,
      fireRate: 50,
      totalDamage: 16800,
      dps: 299,
      obtainingTypeIcon: obtainingTypes[8].icon,
    },
    {
      id: 19,
      imagePath: "/static/Weaponry/primary/R36Image.webp",
      weaponType: weaponTypes.primary,
      name: "R-36 «Извергатель»",
      description:
        "Стреляет мощными взрывающимися зарядами, которые наносят максимальный урон при прямом попадании. При прицеливании необходимо учитывать силу тяжести.",
      price: 60,
      damage: 420,
      magsCount: 6,
      roundsPerMag: 5,
      totalRounds: 30,
      recoil: 75,
      fireRate: 25,
      totalDamage: 12600,
      dps: 157,
      obtainingTypeIcon: obtainingTypes[8].icon,
    },
    {
      id: 20,
      imagePath: "/static/Weaponry/primary/Las5Image.webp",
      weaponType: weaponTypes.primary,
      name: "LAS-5 «Коса»",
      description:
        "Лазерная винтовка, стреляющая непрерывным лучом. Не требует перезарядки, но в случае перегрева нужно заменить радиатор.",
      price: 30,
      damage: 350,
      magsCount: 8,
      roundsPerMag: 8,
      totalRounds: 64,
      recoil: 1,
      fireRate: 1,
      totalDamage: 22400,
      dps: 322,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 21,
      imagePath: "/static/Weaponry/primary/Las16Image.webp",
      weaponType: weaponTypes.primary,
      name: "LAS-16 «Серп»",
      description:
        "Лазерная винтовка, стреляющая короткими очередями. Не требует перезарядки, но в случае перегрева нужно заменить радиатор.",
      price: 20,
      damage: 55,
      magsCount: 3,
      roundsPerMag: 9,
      totalRounds: 45,
      recoil: 2,
      fireRate: 750,
      totalDamage: 1485,
      dps: 433,
      obtainingTypeIcon: obtainingTypes[7].icon,
    },
    {
      id: 22,
      imagePath: "/static/Weaponry/primary/Plas1Image.webp",
      weaponType: weaponTypes.primary,
      name: "PLAS-1 «Поджигатель»",
      description:
        "Плазменная винтовка, стреляющая зарядом перегретого газа, который взрывается при попадании. Не стойте в зоне взрыва.",
      price: 60,
      damage: 200,
      magsCount: 6,
      roundsPerMag: 15,
      totalRounds: 90,
      recoil: 20,
      fireRate: 250,
      totalDamage: 18000,
      dps: 671,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 23,
      imagePath: "/static/Weaponry/primary/Plas101Image.webp",
      weaponType: weaponTypes.primary,
      name: "PLAS-101 «Очиститель»",
      description:
        "Плазменная винтовка, выстреливающая заряд перегретого газа, который взрывается при ударе. Каждый выстрел требует полной предварительной зарядки.",
      price: 80,
      damage: 250,
      magsCount: 6,
      roundsPerMag: 15,
      totalRounds: 90,
      recoil: 20,
      fireRate: 250,
      totalDamage: 22500,
      dps: 847,
      obtainingTypeIcon: obtainingTypes[9].icon,
    },
    {
      id: 24,
      imagePath: "/static/Weaponry/primary/Sg8PImage.webp",
      weaponType: weaponTypes.primary,
      name: "SG-8P «Плазменный каратель»",
      description:
        "Модифицированный дробовик «Крушитель», стреляющий взрывающимися снарядами плазмы. Стреляйте аккуратно – взрывающаяся плазма может ранить ваших товарищей.",
      price: 60,
      damage: 250,
      magsCount: 8,
      roundsPerMag: 8,
      totalRounds: 64,
      recoil: 110,
      fireRate: 80,
      totalDamage: 16000,
      dps: 289,
      obtainingTypeIcon: obtainingTypes[7].icon,
    },
    {
      id: 25,
      imagePath: "/static/Weaponry/primary/Arc12Image.webp",
      weaponType: weaponTypes.primary,
      name: "ARC-12 «Налетчик»",
      description:
        "Дробовик, выпускающий широкий заряд высоковольтного электричества, которое перескакивает между целями (чужими и своими) в области действия.",
      price: 80,
      damage: 250,
      magsCount: 1,
      roundsPerMag: 1,
      totalRounds: 1,
      recoil: 60,
      fireRate: 45,
      totalDamage: Infinity,
      dps: 142,
      obtainingTypeIcon: obtainingTypes[7].icon,
    },
  ] as PrimaryOrSecondaryWeapon[];

  secondaryWeapons = [
    {
      id: 1,
      imagePath: "/static/Weaponry/secondary/P2Image.webp",
      weaponType: weaponTypes.secondary,
      name: "P-2 «Миротворец»",
      description:
        "Стандартный пистолет ВССЗ, отличающийся высокой скорострельностью, емким магазином и быстрой перезарядкой.",
      price: 0,
      damage: 75,
      magsCount: 4,
      roundsPerMag: 15,
      totalRounds: 60,
      recoil: 23,
      fireRate: 900,
      totalDamage: 3600,
      dps: 643,
      obtainingTypeIcon: obtainingTypes[0].icon,
    },
    {
      id: 2,
      imagePath: "/static/Weaponry/secondary/P19Image.webp",
      weaponType: weaponTypes.secondary,
      name: "P-19 «Избавитель»",
      description:
        "Невероятно скорострельный автоматический пистолет, позволяющий разбираться с толпами врагов.",
      price: 5,
      damage: 60,
      magsCount: 4,
      roundsPerMag: 31,
      totalRounds: 124,
      recoil: 11,
      fireRate: 1100,
      totalDamage: 7440,
      dps: 841,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 3,
      imagePath: "/static/Weaponry/secondary/P4Image.webp",
      weaponType: weaponTypes.secondary,
      name: "P-4 «Сенатор»",
      description:
        "Мощный револьвер, который можно перезаряжать по одному патрону. Надежное оружие, наносящее большой урон.s",
      price: 15,
      damage: 175,
      magsCount: 3.33,
      roundsPerMag: 6,
      totalRounds: 20,
      recoil: 43,
      fireRate: 200,
      totalDamage: 3000,
      dps: 299,
      obtainingTypeIcon: obtainingTypes[6].icon,
    },
    {
      id: 4,
      imagePath: "/static/Weaponry/secondary/Las7Image.webp",
      weaponType: weaponTypes.secondary,
      name: "LAS-7 «Кинжал»",
      description:
        "Лазерный пистолет, стреляющий непрерывным лучом. Не требует боеприпасов, но может перегреться и потребовать замены батареек.",
      price: 60,
      damage: 200,
      magsCount: 3,
      roundsPerMag: 3,
      totalRounds: 9,
      recoil: 1,
      fireRate: 1,
      totalDamage: 1350,
      dps: 127,
      obtainingTypeIcon: obtainingTypes[7].icon,
    },
    {
      id: 5,
      imagePath: "/static/Weaponry/secondary/Gp31Image.webp",
      weaponType: weaponTypes.secondary,
      name: "GP-31 «Пистолет-гранатомет»",
      description:
        "Пистолет, стреляющий гранатами. Его необходимо перезаряжать между выстрелами.",
      price: 60,
      damage: 600,
      magsCount: 8,
      roundsPerMag: 1,
      totalRounds: 8,
      recoil: 43,
      fireRate: 900,
      totalDamage: 4800,
      dps: 734,
      obtainingTypeIcon: obtainingTypes[8].icon,
    },
    {
      id: 6,
      imagePath: "/static/Weaponry/secondary/P113Image.webp",
      weaponType: weaponTypes.secondary,
      name: "P-113 «Вердикт»",
      description:
        "Полуавтоматический, действующий отводом газов пистолет P-113 использует 14-мм патрон «Быстрое заседание», крупнейший патрон центрального воспламенения для магазинных пистолетов.",
      price: 60,
      damage: 125,
      magsCount: 8,
      roundsPerMag: 10,
      totalRounds: 80,
      recoil: 40,
      fireRate: 450,
      totalDamage: 10000,
      dps: 695,
      obtainingTypeIcon: obtainingTypes[9].icon,
    },
    {
      id: 7,
      imagePath: "/static/Weaponry/secondary/Sg22Image.webp",
      weaponType: weaponTypes.secondary,
      name: "SG-22 «Партизан»",
      description:
        "Трехствольный обрез-переломка. Переключите режим стрельбы, чтобы выстрелить из всех трех стволов одновременно.",
      price: 50,
      damage: 405,
      magsCount: 8,
      roundsPerMag: 3,
      totalRounds: 30,
      recoil: 170,
      fireRate: 650,
      totalDamage: 10000,
      dps: 695,
      obtainingTypeIcon: obtainingTypes[10].icon,
    },
  ] as PrimaryOrSecondaryWeapon[];

  supportWeapons = [
    {
      id: 1,
      imagePath: "/static/Weaponry/support/Mg43Image.webp",
      weaponType: weaponTypes.support,
      name: "MG-43 «Пулемет»",
      description:
        "Стационарный пулемет. Обладает большой огневой мощью, но сильной отдачей и сниженной точностью.",
      price: 0,
      damage: 80,
      magsCount: 2,
      roundsPerMag: 150,
      totalRounds: 300,
      callTime: 3,
      directions:
        stratagemStore.stratagems.patrioticAdministrationCenter[0].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
    {
      id: 2,
      imagePath: "/static/Weaponry/support/Apw1Image.webp",
      weaponType: weaponTypes.support,
      name: "APW-1 «Крупнокалиберная винтовка»",
      description:
        "Крупнокалиберная снайперская винтовка, эффективно поражающая легкую бронированную технику на большом расстоянии. Используется только с прицелом.",
      price: 5000,
      damage: 450,
      magsCount: 6,
      roundsPerMag: 7,
      totalRounds: 42,
      callTime: 7,
      directions:
        stratagemStore.stratagems.patrioticAdministrationCenter[1].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
    {
      id: 3,
      imagePath: "/static/Weaponry/support/Mg105Image.webp",
      weaponType: weaponTypes.support,
      name: "MG-105 «Доблесть»",
      description:
        "Компактный пулемет малого калибра. Меньшая огневая мощь по сравнению с тяжелыми пулеметами компенсируется удобством использования и быстротой перезарядки.",
      price: 3500,
      damage: 60,
      magsCount: 3,
      roundsPerMag: 250,
      totalRounds: 750,
      callTime: 7,
      directions:
        stratagemStore.stratagems.patrioticAdministrationCenter[2].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
    {
      id: 4,
      imagePath: "/static/Weaponry/support/Eat17Image.webp",
      weaponType: weaponTypes.support,
      name: "EAT-17 «Одноразовый бронебой»",
      description:
        "Одноразовое оружие, предназначенное для повреждения бронированной техники. Выбрасывается после использования.",
      price: 3000,
      damage: 650,
      magsCount: 1,
      roundsPerMag: 1,
      totalRounds: 1,
      callTime: 6,
      directions:
        stratagemStore.stratagems.patrioticAdministrationCenter[3].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
    {
      id: 5,
      imagePath: "/static/Weaponry/support/Gr8Image.webp",
      weaponType: weaponTypes.support,
      name: "GR-8 «Безоткатная винтовка»",
      description:
        "Безоткатная винтовка, эффективно уничтожающая бронированную технику. В комплекте идет рюкзак поддержки для перезарядки.",
      price: 6000,
      damage: 650,
      magsCount: 10,
      roundsPerMag: 1,
      totalRounds: 10,
      callTime: 7,
      directions:
        stratagemStore.stratagems.patrioticAdministrationCenter[4].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
    {
      id: 6,
      imagePath: "/static/Weaponry/support/Flam40Image.webp",
      weaponType: weaponTypes.support,
      name: "FLAM-40 «Огнемет»",
      description:
        "Зажигательное оружие ближнего боя. Поджигает врагов, ландшафт и легковоспламеняющихся союзников.",
      price: 6000,
      damage: null,
      magsCount: 4,
      roundsPerMag: 100,
      totalRounds: 400,
      callTime: 3,
      directions:
        stratagemStore.stratagems.patrioticAdministrationCenter[5].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
    {
      id: 7,
      imagePath: "/static/Weaponry/support/Ac8Image.webp",
      weaponType: weaponTypes.support,
      name: "AC-8 «Автопушка»",
      description:
        "Автоматическая пушка, эффективно уничтожающая легкую бронированную технику. Для перезарядки требуется прикладываемый рюкзак поддержки.",
      price: 7000,
      damage: 260,
      magsCount: 10,
      roundsPerMag: 5,
      totalRounds: 50,
      callTime: 7,
      directions:
        stratagemStore.stratagems.patrioticAdministrationCenter[6].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
    {
      id: 8,
      imagePath: "/static/Weaponry/support/Mg206Image.webp",
      weaponType: weaponTypes.support,
      name: "MG-206 «Тяжелый пулемет»",
      description:
        "Очень мощный, но сложный в обращении пулемет с сильной отдачей.",
      price: 6000,
      damage: 100,
      magsCount: 2,
      roundsPerMag: 75,
      totalRounds: 150,
      callTime: 7,
      directions:
        stratagemStore.stratagems.patrioticAdministrationCenter[7].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
    {
      id: 9,
      imagePath: "/static/Weaponry/support/Rl77Image.webp",
      weaponType: weaponTypes.support,
      name: "RL-77 «Ракетница с подрывом в воздухе»",
      description:
        "Выпускает ракету, которая взрывается при приближении к цели и разбрасывает множество взрывающихся бомб.",
      price: 6000,
      damage: 500,
      magsCount: 2,
      roundsPerMag: 75,
      totalRounds: 150,
      callTime: 7,
      directions:
        stratagemStore.stratagems.patrioticAdministrationCenter[8].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
    {
      id: 10,
      imagePath: "/static/Weaponry/support/Rs422Image.webp",
      weaponType: weaponTypes.support,
      name: "RS-422 «Рельсотрон»",
      description:
        "Экспериментальное оружие, отличающееся высокой бронепробивной способностью. Требует зарядки между выстрелами, так что выбирайте цели с умом.",
      price: 10000,
      damage: 600,
      magsCount: 20,
      roundsPerMag: 1,
      totalRounds: 20,
      callTime: 7,
      directions:
        stratagemStore.stratagems.patrioticAdministrationCenter[9].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
    {
      id: 11,
      imagePath: "/static/Weaponry/support/SpearImage.webp",
      weaponType: weaponTypes.support,
      name: "FAF-14 «Копье»",
      description:
        "Противотанковая ракета с самонаведением, которую нужно навести на цель перед запуском. Эффективна против больших и бронированных целей.",
      price: 9000,
      damage: 1000,
      magsCount: 3,
      roundsPerMag: 1,
      totalRounds: 3,
      callTime: 3,
      directions:
        stratagemStore.stratagems.patrioticAdministrationCenter[10].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
    {
      id: 12,
      imagePath: "/static/Weaponry/support/Gl21Image.webp",
      weaponType: weaponTypes.support,
      name: "GL-21 «Гранатомет»",
      description:
        "Гранатомет, эффективно поражающий бронированную пехоту. Не предназначен для уничтожения бронированной техники или укреплений.",
      price: 6000,
      damage: 350,
      magsCount: 10,
      roundsPerMag: 1,
      totalRounds: 10,
      callTime: 3,
      directions: stratagemStore.stratagems.engineerBay[2].directions,
      features: ["Оружие поддержки", "Адская капсула", "Взрывчатка"],
      obtainingTypeIcon: "",
    },
    {
      id: 13,
      imagePath: "/static/Weaponry/support/Las98Image.webp",
      weaponType: weaponTypes.support,
      name: "LAS-98 «Лазерная пушка»",
      description:
        "Лазерное оружие, стреляющее непрерывным лучом. Не требует перезарядки, но в случае перегрева нужно заменить радиатор.",
      price: 4000,
      damage: 350,
      magsCount: 1,
      roundsPerMag: 1,
      totalRounds: 1,
      callTime: 7,
      directions: stratagemStore.stratagems.engineerBay[3].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
    {
      id: 14,
      imagePath: "/static/Weaponry/support/Arc3Image.webp",
      weaponType: weaponTypes.support,
      name: "ARC-3 «Дуговой метатель»",
      description:
        "Выстреливает электрическую дугу на близком расстоянии. Заряжается для стрельбы молниями, способными поразить несколько целей.",
      price: 7000,
      damage: 250,
      magsCount: 1,
      roundsPerMag: 1,
      totalRounds: Infinity,
      callTime: 3,
      directions: stratagemStore.stratagems.engineerBay[7].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
    {
      id: 15,
      imagePath: "/static/Weaponry/support/Las99Image.webp",
      weaponType: weaponTypes.support,
      name: "LAS-99 Пушка «Квазар»",
      description:
        "Заряжается и выпускает мощный взрывающийся сгусток энергии. После выстрела долго перезаряжается.",
      price: 7500,
      damage: 650,
      magsCount: 1,
      roundsPerMag: 1,
      totalRounds: Infinity,
      callTime: 7,
      directions:
        stratagemStore.stratagems.patrioticAdministrationCenter[9].directions,
      features: ["Оружие поддержки", "Адская капсула"],
      obtainingTypeIcon: "",
    },
  ] as SupportWeapon[];

  grenades = [
    {
      id: 1,
      imagePath: "/static/Weaponry/grenades/ExplosiveImage.webp",
      weaponType: weaponTypes.grenade,
      name: "G-12 «Фугасная»",
      description:
        "Фугасная граната, наносящая урон легко бронированным целям. При взрыве наносит большой урон по небольшой площади.",
      price: 0,
      damage: 400,
      fuseTime: 3.5,
      penetration: 4,
      radius: 7,
      obtainingTypeIcon: obtainingTypes[0].icon,
    },
    {
      id: 2,
      imagePath: "/static/Weaponry/grenades/FragImage.webp",
      weaponType: weaponTypes.grenade,
      name: "G-6 «Осколочная»",
      description:
        "Противопехотная осколочная граната. При взрыве наносит урон по большой площади.",
      price: 2,
      damage: 250,
      fuseTime: 2.4,
      penetration: 3,
      radius: 8,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 3,
      imagePath: "/static/Weaponry/grenades/ImpactImage.webp",
      weaponType: weaponTypes.grenade,
      name: "G-16 «Ударная»",
      description:
        "Ударная граната, предназначенная для немедленного взрыва при контакте. Наносит концентрированный урон в небольшом радиусе, что очень эффективно против скоплений живой силы противника.",
      price: 20,
      damage: 400,
      fuseTime: 0,
      penetration: 4,
      radius: 7,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 4,
      imagePath: "/static/Weaponry/grenades/IncendiaryImage.webp",
      weaponType: weaponTypes.grenade,
      name: "G-10 «Зажигательная»",
      description:
        "Зажигательная граната, разработанная для возгорания при детонации. Распространяет горящий материал на умеренную площадь, вызывая ожоги.",
      price: 25,
      damage: 150,
      fuseTime: 2.9,
      penetration: 1,
      radius: 7,
      obtainingTypeIcon: obtainingTypes[6].icon,
    },
    {
      id: 5,
      imagePath: "/static/Weaponry/grenades/SmokeImage.webp",
      weaponType: weaponTypes.grenade,
      name: "G-3 «Дымовая»",
      description:
        "Дымовая граната, разработанная для быстрого охвата и маскировки. При активации выпускает продолжительное облако, мешающее видимости и обеспечивающее стратегическое прикрытие для маневров и отступления.",
      price: 25,
      damage: 0,
      fuseTime: 2.4,
      penetration: 0,
      radius: 5,
      obtainingTypeIcon: obtainingTypes[5].icon,
    },
    {
      id: 6,
      imagePath: "/static/Weaponry/grenades/StunImage.webp",
      weaponType: weaponTypes.grenade,
      name: "G-23 «Оглушающая»",
      description: "Временно оглушает все цели в радиусе действия.",
      price: 20,
      damage: 0,
      fuseTime: 1.8,
      penetration: 6,
      radius: 10,
      obtainingTypeIcon: obtainingTypes[7].icon,
    },
    {
      id: 7,
      imagePath: "/static/Weaponry/grenades/ThermiteImage.webp",
      weaponType: weaponTypes.grenade,
      name: "G-123 «Термитная»",
      description:
        "Термитная граната, прилипающая к поверхностям, а потом горящая с температурой 2000°C. Может прожечь некоторую броню.",
      price: 15,
      damage: 100,
      fuseTime: 2.9,
      penetration: 7,
      radius: 2,
      obtainingTypeIcon: obtainingTypes[8].icon,
    },
    {
      id: 8,
      imagePath: "/static/Weaponry/grenades/ImpactIncendiaryImage.webp",
      weaponType: weaponTypes.grenade,
      name: "G-13 «Зажигательная ударная»",
      description:
        "Зажигательная граната, поджигающая любые цели и ландшафт в области взрыва. Использовать с осторожностью.",
      price: 25,
      damage: 150,
      fuseTime: 0.0,
      penetration: 3,
      radius: 7,
      obtainingTypeIcon: obtainingTypes[9].icon,
    },
  ] as Grenade[];

  constructor() {
    makeAutoObservable(this);
  }

  changeCurrentWeaponInfo(id: number, weaponType: WeaponType) {
    this.currentWeaponInfo = { id: id, weaponType: weaponType };
  }

  clearCurrentWeaponInfo() {
    this.currentWeaponInfo = {} as CurrentWeaponInfo;
  }
}

export const weaponsStore = new WeaponsStore();
