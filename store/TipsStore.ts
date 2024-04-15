import { makeAutoObservable } from "mobx";

import { Tip } from "@/utils/generalInterfaces";
import { getRandomEntity } from "@/utils/generalFunctions";

class TipsStore {
  currentTip = {} as Tip;

  tips = [
    {
      id: 1,
      text: "Вы знаете, что во время переходов мы показываем советы? ",
    },
    {
      id: 2,
      text: "Управляемая демократия — краеугольный камень развитой цивилизации. ",
    },
    {
      id: 3,
      text: "Супер-Земля рекомендует на каждом задании в течение как минимум 2,4 секунды любоваться пейзажем. Счастливый Адский Десантник — смертоносный Адский Десантник. ",
    },
    {
      id: 4,
      text: "Вы элита Супер-Земли. Всегда помните об этом. ",
    },
    {
      id: 5,
      text: "«Орел» — ударный летательный аппарат быстрого реагирования, который гораздо быстрее огневой поддержки с орбиты. ",
    },
    {
      id: 6,
      text: "Галактическая война — всеобщее дело. Только работая сообща мы можем быть уверены, что планеты не попадут врагам в руки. ",
    },
    {
      id: 7,
      text: "Если не получилось с первого раза, ныряйте еще... И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще. И еще... ",
    },
    {
      id: 8,
      text: "На экране выбора заданий можно увидеть дневную и ночную сторону планеты. Выбирайте задания, которые вам по душе! ",
    },
    {
      id: 9,
      text: "Видите планету, которая вот-вот перейдет под контроль врага? Соберите своих товарищей по Адскому десанту и приступите к защите. На счету каждое задание! ",
    },
    {
      id: 10,
      text: "Когда встречаетесь с ботами, помните про УХУ: укрытие, храбрость и еще раз укрытие. ",
    },
    {
      id: 11,
      text: "Труднопроходимая местность мешает передвижению. Эксперты рекомендуют избегать снега, грязи, воды, кустарников и лавы. С полным списком можно ознакомиться в разделе D.198-2 руководства. ",
    },
    {
      id: 12,
      text: "Недовольны собой? Измените свой внешний вид, голос и характер в комнате настройки. Все проще простого! ",
    },
    {
      id: 13,
      text: "Когда у вас заканчивается выносливость, вместе с ней падают скорость бега и точность выстрелов. ",
    },
    {
      id: 14,
      text: "Не погибайте. ",
    },
    {
      id: 15,
      text: "Здесь показываются советы. ",
    },
    {
      id: 16,
      text: "Демократия не требует управления, она требует патронов и людей. ",
    },
    {
      id: 17,
      text: "Если враг пытается наладить дипломатические отношения, ПРИСТРЕЛИТЕ ЕГО. Никакого доверия лжецам! ",
    },
    {
      id: 18,
      text: "Не переживайте: если вы не выполните задачу, вас НЕ ОТПРАВЯТ в лагерь свободы. Это лишь слух, распространяемый диссидентами. ",
    },
    {
      id: 19,
      text: "Вы не сможете распространять управляемую демократию, если вы умрете уставшим. Может быть я стану предателем за свои слова, но хорошо отдохните, попейте воды и перерывы сделают вас более эффективным. ",
    },
    {
      id: 20,
      text: "Не забывайте заполнять форму допуска C-01 перед каждым актом, потенциально способным привести к зачатию. ",
    },
    {
      id: 21,
      text: "Удерживайте кнопку перезарядки, чтобы проверить запас боеприпасов. ",
    },
    {
      id: 22,
      text: "В положении лежа вы получаете меньше урона от взрыва. В случае неизбежной опасности — падайте на землю! ",
    },
    {
      id: 23,
      text: "Когда возникают сомнения, отбросьте все мысли! Просто кричите «За демократию!» и отчаянно бросайтесь на трудности. ",
    },
    {
      id: 24,
      text: "Если во время задания кто-то из отряда умирает, не забудьте подобрать образцы павшего товарища. Оплакивать беднягу будете потом! ",
    },
    {
      id: 25,
      text: "Адскими Капсулами можно управлять [немного]. Попробуйте уронить их на врагов! ",
    },
    {
      id: 26,
      text: "Огонь по своим — не лучшая идея. ",
    },
    {
      id: 27,
      text: "Отсчет до детонации гранаты начинается с момента, когда вы заносите руку для броска. Подгадайте момент для взрыва в воздухе! ",
    },
    {
      id: 28,
      text: "Если вы заметили, что боец отряда выражает симпатию врагу, сообщите об этом своему офицеру по демократии. Мыслепреступления убивают! ",
    },
    {
      id: 29,
      text: "На Супер-Земле много праздников, но самый важный из них — 26 октября. День свободы! ",
    },
    {
      id: 30,
      text: "Вы на задании в одиночестве и нуждаетесь в освободительном подкреплении? Используйте аварийный маячок, чтобы призвать товарища по Адскому Десанту. ",
    },
    {
      id: 31,
      text: "Чем дольше длится задание, тем больше становится врагов. ",
    },
    {
      id: 32,
      text: "Используйте стратагему перезарядки «Орла» в периоды боевого затишья, чтобы у вас всегда наготове были «орлиные удары». ",
    },
    {
      id: 33,
      text: "Хотите показать, как решительно поддерживаете капитализм? Тратье медали в «Заслугах»! ",
    },
    {
      id: 34,
      text: "Надоело промахиваться? Используйте режим от первого лица для стрельбы с дальних дистанций. ",
    },
    {
      id: 35,
      text: "Пистолеты и пистолеты-пулеметы можно держать одной рукой, а в другой руке нести различные предметы. ",
    },
    {
      id: 36,
      text: "Убивайте жуков, пока они не подобрались слишком близко. Ничто не защищает ваше личное пространство лучше летящих пуль. ",
    },
    {
      id: 37,
      text: "Помните: СВОБОДА! ",
    },
    {
      id: 38,
      text: "На заданиях постоянно попадаются неисследованные интересные места. Осматривайте их, ведь никогда не знаешь, что можно найти. ",
    },
    {
      id: 39,
      text: "Если враги прут без остановки, найдите, откуда именно они лезут, и устройте облаву! Улей жуков? Уничтожить! Завод ботов? Уничтожить! ",
    },
    {
      id: 40,
      text: "Не волнуйтесь, стимы не вызывают привыкания!* *Исследование оплачено «Фармадаром». «Фармадар» — доверьте нам свою жизнь. ",
    },
    {
      id: 41,
      text: "Для театра военных действий все граждане одинаково важны, но Адские Десантники — самые важные. ",
    },
    {
      id: 42,
      text: "Используйте стимы для заживления ран. ",
    },
    {
      id: 43,
      text: "Содрать панцирь с жука можно различными способами — эксперементируйте, чтобы найти лучший! ",
    },
    {
      id: 44,
      text: "Время нахождения суперэсминца на низкой орбите ограничено. Следите за таймером задания! ",
    },
    {
      id: 45,
      text: "Редкие образцы доступны только на более сложных заданиях. ",
    },
    {
      id: 46,
      text: "Тщательно подбирайте выкладку, чтобы ваш отряд был обеспечен всеми необходимыми ресурсами. От этого зависит судьба демократии! ",
    },
    {
      id: 47,
      text: "Внимательно читайте эти советы. Мы их тщательно подобрали, чтобы повысить ваши шансы на успех. ",
    },
    {
      id: 48,
      text: "У всех стратагем есть сильные и слабые свойства. Подбирайте стратагемы в сответствии с требованиями задания и составом отряда. ",
    },
    {
      id: 49,
      text: "Не паникуйте.",
    },
    {
      id: 50,
      text: "В качестве крайней меры вы можете отбиваться от врагов в ближнем бою. Помните: смерть лучше трусости.",
    },
    {
      id: 51,
      text: "У большинства врагов есть уязвимые и бронированные места. Обучающее руководство ВССЗ рекомендует целиться по уязвимым.",
    },
    {
      id: 52,
      text: "Пока есть время, гранаты с выдернутой чекой можно подбирать и отбрасывать в сторону!",
    },
    {
      id: 53,
      text: "Из бюджетных соображений Адские бомбы требуют ручного наведения. Но не стойте на месте, если только не хотите оказаться на стене мучеников.",
    },
    {
      id: 54,
      text: "Каждая фракция предлагает уникальные испытания. Сочетайте различное снаряжение и пробуйте новые тактики!",
    },
    {
      id: 55,
      text: "Собирайте медали и развивайте прогресс заслуги. Торопиться не нужно, заслуги можно завершать в любое время.",
    },
    {
      id: 56,
      text: "Сложность задания частично определяется типом врагов на территории. Убедитесь, что взяли подходящее вооружение!",
    },
    {
      id: 57,
      text: "Девять из десяти врачей считают, что ранение в области грудной клетки влечет смертельную кровопотерю, если его вовремя не заштопать.",
    },
    {
      id: 58,
      text: "Стрелять лучше по прямой. Огонь под углом может лишь задеть врага и даже срикошетить в членов вашего отряда.",
    },
    {
      id: 59,
      text: "Бросившись на землю, вы можете спасти себе жизнь, но также становитесь легкой мишенью для врагов ближнего боя.",
    },
    {
      id: 60,
      text: "Во время путешествий по галактике Адский Десант может наткнуться на древние руины и другие любопытные штуки. Но помните: Только предателям интересны инопланетные артефакты!",
    },
    {
      id: 61,
      text: "Автоматоны снаряжены гиперреактивными протоколами, что делает их уязвимыми к подавляющему огню. Чем больше вы в них стреляете, тем ниже их меткость.",
    },
    {
      id: 62,
      text: "Не ходите в одиночку! Присоединитесь к отряду, чтобы нести максимальное освобождение!",
    },
    {
      id: 63,
      text: "При перезарядке вы теряете боеприпасы, оставшиеся в магазине.",
    },
    {
      id: 64,
      text: "Выпил — за руль не садись!",
    },
    {
      id: 65,
      text: "Министерство процветания управляет экономикой Супер-Земли и следит за стабильным притоком средств в руки тех, кто этого больше всего заслуживает.",
    },
    {
      id: 66,
      text: "Министерство науки постоянно занимается развитием технологий Супер-Земли и следит, чтобы мы всегда были на ступень выше врагов.",
    },
    {
      id: 67,
      text: "Министерство обороны отвечает за защиту Супер-Земли от внешних угроз и управляет вооруженными силами Супер-Земли.",
    },
    {
      id: 68,
      text: "Размещайте на карте метки, чтобы соориентировать свой отряд.",
    },
    {
      id: 69,
      text: "Броня у вас не только для красоты! Тяжелая броня увеличивает защиту от атак, но при этом замедляет и влияет на выносливость.",
    },
    {
      id: 70,
      text: "Министерство обороны отвечает за защиту свободы от любых врагов — как людей, так и нелюдей, — открытых и вероятных.",
    },
    {
      id: 71,
      text: "Министерство единства следит за тем, чтобы человечество было единым целым, и защищает нас от внешних угроз, таких как девиационное поведение и приверженность опасным идеологиям.",
    },
    {
      id: 72,
      text: "Министерство науки постоянно занимается развитием технологий Супер-Земли, укрепляя наше моральное превосходство над техническим превосходством врага.",
    },
    {
      id: 73,
      text: "Боевая стойка разительным образом влияет на точность. Руководство ВССЗ предлагает следующую градацию от наименее к наиболее стабильным: в движении > стоя > в приседе > лежа.",
    },
    {
      id: 74,
      text: "Боевая стойка разительным образом влияет на точность. Руководство ВССЗ предлагает следующую градацию от наименее к наиболее стабильным: в движении > стоя > в приседе > лежа.",
    },
    {
      id: 75,
      text: "Не забывайте иногда отдыхать! ... Конечно, если хотите прослыть последним трусом.",
    },
  ] as Tip[];

  constructor() {
    makeAutoObservable(this);
  }

  setNewTip() {
    this.currentTip = getRandomEntity(this.tips, this.currentTip);
  }
}

export const tipsStore = new TipsStore();
