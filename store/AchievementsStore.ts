import { makeAutoObservable } from "mobx";

import { Achievement } from "@/utils/storeInterfaces";

class AchievementsStore {
  achievements: { [key: string]: Achievement[] } = {
    easy: [
      {
        id: 1,
        iconPath: "/static/Achievements/TrainingIcon.webp",
        title: "Прямо профи",
        description: "Пройдите основное обучение.",
        accomplishmentWay: "Теперь ты Адский Десантник, поздравляю!",
      },
      {
        id: 2,
        iconPath: "/static/Achievements/YoungLadIcon.webp",
        title: "Крепкий молодой человек",
        description:
          "Наденьте на своего Адского Десантника новый плащ, броню и шлем.",
        accomplishmentWay:
          "Воспользуйтесь арсеналом и экипируйте своего Адского Десантника. Пусть друзья обзавидуются.",
      },
      {
        id: 3,
        iconPath: "/static/Achievements/BugStomperIcon.webp",
        title: "Давитель жуков",
        description: "Сыграйте 1 задание против жуков.",
        accomplishmentWay:
          "Выполните 1 задание против терминидов. Смерть жукам!",
      },
      {
        id: 4,
        iconPath: "/static/Achievements/BotScrapperIcon.webp",
        title: "Сокрушитель ботов",
        description: "Сыграйте 1 задание против ботов.",
        accomplishmentWay:
          "Выполните 1 задание против автоматонам. Так держать, Джон Коннор!",
      },
      {
        id: 5,
        iconPath: "/static/Achievements/TacticoolIcon.webp",
        title: "Крутактика — это вам не это",
        description: "Выполните 10 тактических заданий.",
        accomplishmentWay:
          "Просто выполни 10 тактических заданий. Покажи своим врагам, что такое демократия!",
      },
      {
        id: 6,
        iconPath: "/static/Achievements/NightIcon.webp",
        title: "Ночные гости",
        description: "Эвакуируйтесь с задания ночью.",
        accomplishmentWay: "Закончи любое задание на ночной стороне планеты.",
      },
      {
        id: 7,
        iconPath: "/static/Achievements/CountrysideDefenceIcon.webp",
        title: "Эвакуатор окраин",
        description: "Сыграйте задание по обороне планеты.",
        accomplishmentWay:
          "Сыграйте любую миссию на планете, которая сейчас находится под атакой одной из фракций.",
      },
      {
        id: 8,
        iconPath: "/static/Achievements/SpreadDemocracyIcon.webp",
        title: "Распространитель демократии",
        description: "Убейте 150 врагов в ходе одного задания.",
        accomplishmentWay:
          "Выполните любое задание начиная с 3 или 4 уровня сложности.",
      },
      {
        id: 9,
        iconPath: "/static/Achievements/JobIsDoneIcon.webp",
        title: "Все готово",
        description: "Выполните задание, но провалите эвакуацию.",
        accomplishmentWay:
          "Заверши задание, но не эвакуируйся (потрать все стратагемы). Не волнуйся, не ты первый, не ты последний.",
      },
      {
        id: 10,
        iconPath: "/static/Achievements/NickOfTimeIcon.webp",
        title: "В последнюю секунду",
        description: "Эвакуируйтесь по достижении таймером нуля",
        accomplishmentWay:
          "Просто эвакуируйтесь после того, как время закончится. Хорошим временным ориентиром будет отсутствие возможности вызова любых стратагем.",
      },
      {
        id: 11,
        iconPath: "/static/Achievements/LongArmIcon.webp",
        title: "Длинная рука правосудия",
        description: "Уничтожьте цель с расстояния более 100м",
        accomplishmentWay:
          "Убейте цель с большой дистанции, можете использовать крупнокалиберную винтовку с оптическим прицелом.",
      },
      {
        id: 12,
        iconPath: "/static/Achievements/CoolGuysDontLookIcon.webp",
        title: "Крутые парни не смотря-А-А-А-А!",
        description: "Пролетите минимум 25 метров на взрывной волне.",
        accomplishmentWay:
          "Вызовите орбитальную стратагему или стратагему «Орла» стоя на какой-нибудь возвышенности.",
      },
      {
        id: 13,
        iconPath: "/static/Achievements/HulkIcon.webp",
        title: "Нет ничего важнее свободы",
        description: "Победите глыбу.",
        accomplishmentWay:
          "Начните миссию на 4+ сложности и убейте его. Можете воспользоваться вентиляционным отверстием сзади или просто вызвать стратагему.",
      },
      {
        id: 14,
        iconPath: "/static/Achievements/BileTitanIcon.webp",
        title: "Чем они выше...",
        description: "Уничтожьте желчного титана.",
        accomplishmentWay:
          "Желчный титан появляется в качестве постоянно противника, начиная с 6 сложности. Используйте мощные стратагемы и весь арсенал. Это считается за одного!",
      },
      {
        id: 15,
        iconPath: "/static/Achievements/EatThisIcon.webp",
        title: "Жри!",
        description: "Убейте жука-воина выстрелом из дробовика с 1 метра.",
        accomplishmentWay:
          "Подпусти жука война поближе и выпусти в него всю обойму. Самый главный воин здесь ты!",
      },
      {
        id: 16,
        iconPath: "/static/Achievements/IllegalStalkingIcon.webp",
        title: "Не следи за мной",
        description: "Уничтожьте тактическую цель «гнездо следопытов».",
        accomplishmentWay:
          "Взорвите гнездо следопытов. Можете воспользоваться гранатой, стратагемой, гранатометом или автопушкой.",
      },
      {
        id: 17,
        iconPath: "/static/Achievements/HotPotatoIcon.webp",
        title: "Лови!",
        description: "Бросьте обратно готовую взорваться гранату.",
        accomplishmentWay:
          "Просто кинь гранату себе под ноги, а потом откинь подальше. ",
      },
      {
        id: 18,
        iconPath: "/static/Achievements/GetSomeIcon.webp",
        title: "Получайте!",
        description:
          "Выпустите как минимум 150 пуль за одну очередь, убив не менее 10 врагов.",
        accomplishmentWay:
          "Возьмите стратагему пулемета и примените на группе противников. Главное не спускать пальца с курка, вы же не предатель?",
      },
      {
        id: 19,
        iconPath: "/static/Achievements/InjuriesIcon.webp",
        title: "Что тебя не убивает...",
        description: "Все ваши конечности должны быть повреждены одновременно.",
        accomplishmentWay:
          "Экипируйте броню со свойством «Демократия защищает» и постарайтесь взоврваться. Возможно с 1 попытки не получится, но Адские Десантники не умирают!",
      },
      {
        id: 20,
        iconPath: "/static/Achievements/DemocracyStemIcon.webp",
        title: "Демократия все еще с тобой",
        description: "Исцелите другого игрока стимами.",
        accomplishmentWay:
          "Подойдите к раненому союзнику, наведитесь на него и нажмите клавишу «E». Герои не умирают!",
      },
      {
        id: 21,
        iconPath: "/static/Achievements/PromoteSynergyIcon.webp",
        title: "Продвигай синергию",
        description: "Помогите товарищу перезарядить оружие.",
        accomplishmentWay:
          "Ваш напарник должен использовать автопушку/безоткатную винтовку/копье, заберите у него рюкзак с запасными снарядами и помогайте заряжать оружие. Сила в дружбе!",
      },
    ],
    extreme: [
      {
        id: 1,
        iconPath: "/static/Achievements/ExtractamundoIcon.webp",
        title: "Экстраэвакуация!",
        description: "Эвакуируйте весь отряд на сложности «Высокая» или выше.",
        accomplishmentWay:
          "Следуйте совету «Не умирайте» и достижение будет получено.",
      },
      {
        id: 2,
        iconPath: "/static/Achievements/StratagemsIcon.webp",
        title: "Чтобы не сомневаться",
        description:
          "Одновременно вызовите 6 стратагем орбитальных бомбардировок по одной области.",
        accomplishmentWay:
          "Берите своих напарников и используйте орбитальные стратагемы в 1 точке. Советую брать 120 и 380 мм, так как они дадут вам больше времени использовать все.",
      },
      {
        id: 3,
        iconPath: "/static/Achievements/DemocracyPowerIcon.webp",
        title: "Сила демократии",
        description: "Убейте 25 врагов одной стратагемой.",
        accomplishmentWay:
          "Выполняйте задание на 5+ сложности, выберите стратагему с большой областью урона и вызовите ее на группу противников. Советую делать это около гнезд/заводов.",
      },
      {
        id: 4,
        iconPath: "/static/Achievements/FireKillIcon.webp",
        title: "Выжечь все огнем!",
        description: "Убейте 100 врагов огненным уроном в ходе одного задания.",
        accomplishmentWay:
          "Используйте поджигающее оружие, а также авиаудар напалмом. Советую выполнять задание против терминидов. Как насчет жучиного BBQ?",
      },
      {
        id: 5,
        iconPath: "/static/Achievements/QuantityScienceIcon.webp",
        title: "Для науки важно количество",
        description: "Эвакуируйтесь с как минимум 15 обычными образцами.",
        accomplishmentWay:
          "Любой ваш товарищ должен эвакуироваться с 15 обычных образцов в своих карманах. Главное это количество должно быть у 1 человека.",
      },
      {
        id: 6,
        iconPath: "/static/Achievements/SamplesFriendIcon.webp",
        title: "Образцы — лучшие друзья десантников",
        description:
          "Эвакуируйте команду из задания с не менее чем 15 редкими образцами.",
        accomplishmentWay:
          "Просто идите на задание с большой сложностью, так как там будет больше образцов.",
      },
      {
        id: 7,
        iconPath: "/static/Achievements/HoldOnMyLiberTeaIcon.webp",
        title: "Подержи мой чай свободы!",
        description:
          "С помощью реактивного ранца введите себя в состояние тряпичной куклы.",
        accomplishmentWay:
          "Киньте гранату себе под ноги и перед ее взрывом используйте реактивный ранец.",
      },
    ],
    helldive: [
      {
        id: 1,
        iconPath: "/static/Achievements/DrawIcon.webp",
        title: "Пусть будет ничья",
        description: "Отстрелите глыбе обе руки и эвакуируйтесь, пока он жив.",
        accomplishmentWay:
          "Глыба встречается, начиная с 4 сложности, просто отстрелите ему руки с помощью рельсотрона и предупредите товарищей, затем эвакуируйтесь.",
      },
      {
        id: 2,
        iconPath: "/static/Achievements/SuppliesIcon.webp",
        title: "Смертельное снабжение!",
        description: "Убейте громилу капсулой «Пополнение запасов».",
        accomplishmentWay:
          "Нанесите много урона громиле, затем оглушите его (эми удар или удар его головой о стену) и вызовите стратагему.",
      },
      {
        id: 3,
        iconPath: "/static/Achievements/HellDiveIcon.webp",
        title: "Глубины ада",
        description:
          "Завершите задание на сложности «Экстрим» или выше, не допустив гибели ни одного из бойцов.",
        accomplishmentWay:
          "Выполняйте это в коротких миссиях против терминидов. Не забывай про стимы, боец!",
      },
      {
        id: 4,
        iconPath: "/static/Achievements/HoldMyPrimaryIcon.webp",
        title: "Подержи-ка пушку, я иду в атаку!",
        description:
          "Полностью пройдите задание на сложности Высокая или выше так, чтобы никто не выстрелил из основного оружия или оружия поддержки.",
        accomplishmentWay:
          "Забудьте про 1 и 3 клавишу, берите много атакующих стратагем и выбирайте быстрое задание. Да поможет вам демократия!",
      },
      {
        id: 5,
        iconPath: "/static/Achievements/360SecIcon.webp",
        title: "Угнать за 360 секунд!",
        description:
          "Полностью пройдите блиц-задание на сложности Экстрим и эвакуируйтесь менее чем за 6 минут.",
        accomplishmentWay:
          "Хватайте товарищей, экипируйтесь в легкую броню, ракетный ранец, также возьмите взрывное оружие. Не забудьте оставить кого-нибудь в зоне эвакуации для более быстрого бегства с планеты.",
      },
    ],
    longWay: [
      {
        id: 1,
        iconPath: "/static/Achievements/GreaterGodIcon.webp",
        title: "Ради высшего блага!",
        description: "Убейте 5000 врагов.",
        accomplishmentWay: "5000 Врагов? Супер-Земля гордится тобой!",
      },
      {
        id: 2,
        iconPath: "/static/Achievements/PatriotIcon.webp",
        title: "Патриот",
        description: "Сыграйте как минимум 50 заданий.",
        accomplishmentWay:
          "Каждая задача приближает победу управляемой демократии!",
      },
      {
        id: 3,
        iconPath: "/static/Achievements/DoingYourPartIcon.webp",
        title: "Исполняю твой долг",
        description: "Выполните как минимум 100 заданий.",
        accomplishmentWay: "Да тебе памятник ставить надо!",
      },
      {
        id: 4,
        iconPath: "/static/Achievements/FullyOperationalIcon.webp",
        title: "Полный функционал",
        description: "Доведите один модуль корабля до макс. уровня.",
        accomplishmentWay:
          "Чтобы получить достижение вам будет необходимо: 10 суперобразцов, 160-200 обычных образцов, 100-120 редких образцов.",
      },
      {
        id: 5,
        iconPath: "/static/Achievements/ShipItIcon.webp",
        title: "Займусь кораблем!",
        description: "Улучшите все модули корабля как минимум на 1 уровень.",
        accomplishmentWay:
          "Для получения достижения потребуется 400 обычных образцов.",
      },
      {
        id: 6,
        iconPath: "/static/Achievements/SuperEarthHeroIcon.webp",
        title: "Образец для Супер-Земли",
        description: "Получите все призы для Helldivers 2",
        accomplishmentWay:
          "Боец, да ты легенда! Можешь ходить по барам Супер-Земли с высоко поднятой головой.",
      },
    ],
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const achievementsStore = new AchievementsStore();
