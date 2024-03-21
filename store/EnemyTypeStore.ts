import { makeAutoObservable } from "mobx";

import { Enemy } from "@/utils/generalInterfaces";

class EnemyTypeStore {
  terminids = [
    {
      id: 1,
      iconPath: "",
      imagePath: "",
      dangerous:
        "Очень быстро двигаются, также могут призывать своих сородичей, что и является основной целью их бренной жизни. В основном являются не угрозой, а раздражителем.",
      tactics:
        "Особой тактики нет, ввиду их малой сложности. Главное убивать их как можно быстрее, чтобы они не успели позвать своих сородичей, что может сильно усложнить вам выполнение миссии и зачистку локации.",
      difficulties: "Встречается на всех сложностях.",
      title: "Мусорщик",
    },
    {
      id: 2,
      iconPath: "/static/terminids/BileSpitterImage.png",
      imagePath: "",
      dangerous:
        "Может выстрелить кислотой на небольшом расстоянии и в большом количестве является хоть и не грозным, но неприятным противником.",
      tactics:
        "Самая лучшая тактика для их уничтожения — подойди как можно ближе и показать им «свободу», «процветание» и «демократию»",
      difficulties: "Встречается на всех сложностях.",
      title: "Желчный плеватель",
    },
    {
      id: 3,
      iconPath: "",
      imagePath: "",
      dangerous:
        "Быстро передвигается в воздухе и атакует парами. Один удар может вас убить, так как приоритетной целью является голова.",
      tactics:
        "Турели, а также скорострельное оружие позволит вам быстро их убить, но главное уничтожить их ульи, из которых они появляются, иначе их группы могут нанести большой ущерб вашей команде.",
      difficulties: "Встречаются начиная с 5 сложности.",
      title: "Крикун",
    },
    {
      id: 4,
      iconPath: "",
      imagePath: "",
      dangerous: "",
      tactics: "",
      difficulties: "",
      title: "Прыгун",
    },
    {
      id: 5,
      iconPath: "/static/terminids/HunterImage.png",
      imagePath: "",
      dangerous:
        "Передвигается в составе организованных групп, очень проворный, может быстро сокращать дистанцию. Удар замедляет и может снести до четверти от всего здоровья.",
      tactics:
        "Ждите пока он не начнет бежать прямо на вас, затем его можно будет легко убить прямым выстрелом в голову.",
      difficulties: "Встречается на всех сложностях.",
      title: "Охотник",
    },
    {
      id: 6,
      iconPath: "/static/terminids/WarriorImage.png",
      imagePath: "",
      dangerous:
        "Самый обыкновенный противник, также может позвать своих сородичей отделать вашу свободолюбивую задницу. Единственная опасность, которую он представляет — замедление в продвижении управляемой демократии по всей галактике.",
      tactics:
        "Главное быстро убить его и не дать ему увеличить количество ваших противников. Если вы увидите оранжевый дым/газ, то знайте, количество жуков, которое вам необходимо убить скоро увеличится.",
      difficulties: "Встречается на всех сложностях.",
      title: "Воин",
    },
    {
      id: 7,
      iconPath: "",
      imagePath: "",
      dangerous: "",
      tactics: "",
      difficulties: "",
      title: "Страж улья",
    },
    {
      id: 8,
      iconPath: "/static/terminids/StalkerImage.png",
      imagePath: "",
      dangerous:
        "Невидим, быстро двигается, имеет схожие атаки с обычными охотниками. Также может использовать свой язык, чтобы атаковать вас с небольшого расстояния. Намного опаснее группы охотников, так как может подкрасться к вам в разгар боя и проредить вашу команду.",
      tactics:
        "Подожгите их, либо воспользуйтесь дымовой гранатой, чтобы сделать его силуэт видимым, также любые выстрелы по нему моментально деактивируют его маскировку. Этот терминид является довольно слабым и десятка выстрелов хватит, чтобы его уничтожить.",
      difficulties: "Встречается начиная со 2 сложности.",
      title: "Сталкер",
    },
    {
      id: 9,
      iconPath: "/static/terminids/BroodCommanderImage.png",
      imagePath: "",
      dangerous:
        "Довольно неплохо защищен броней, а также передвигается в составе своего роя. Помимо этого может вас контузить своим резким тараном.",
      tactics:
        "Держитесь подальше от его хищных клешней и убивайте его до того, как он сможет призвать своих сородичей. Также имейте ввиду, что отсутствие головы не помешает ему атаковать ваш демократический отряд.",
      difficulties: "Встречается начиная с 5 сложности.",
      title: "Командир роя",
    },
    {
      id: 10,
      iconPath: "/static/terminids/BileSpewerImage.png",
      imagePath: "",
      dangerous:
        "Его желчный снаряд или плевок желчью убивает вас, не давая шанса спастись. Также, если вы атаковали его брюхо — взрывается после смерти, нанося урон всем в округе.",
      tactics:
        "Постоянно уходите с линии его огня, самыми лучшими точками для нанесения уроня являются брюхо и голова, но на высоких сложностях голова защищена броней, поэтому обходите и атакуйте данного терминида с флангов и тыла.",
      difficulties: "Встречается начиная с 3 сложности.",
      title: "Желчный блевун",
    },
    {
      id: 11,
      iconPath: "/static/terminids/ChargerImage.png",
      imagePath: "",
      dangerous:
        "Его вожделенная мечта и цель — растоптать ваше героическое тело. Основная угроза исходит от его разбегов, но даже если при успешном уклонении, он может совершить боковой удар, который вас откинет.",
      tactics:
        "В идеале использовать одного из товарищей как наживку, пока остальные будут наносить основной урон по его незащищенной задней части, но в качестве альтернативы можно использовать стратагемы или взрывчатку, чтобы создать бреши в его броне. Также имейте ввиду, что от его панциря рикошетят снаряды обычного оружия.",
      difficulties: "Встречается начиная с 3 сложности.",
      title: "Громила",
    },
    {
      id: 12,
      iconPath: "/static/terminids/BileTitanImage.png",
      imagePath: "",
      dangerous:
        "Это апогей эволюции терминидов. Этот ужасный, очень быстрый и бронированный монстр может стереть вас с лица планеты своим потоком желчи или просто растоптать вас своими конечностями.",
      tactics:
        "Используйте против него самые убойные стратагемы, такие как: 500-килограммовая бомба или орбитальный рельсотронный залп, но в случае их недоступности вы можете стрелять по его открытым частям — брюху и рту. Также не забывайте уклоняться от его смертоносных потоков желчи.",
      difficulties:
        "Встречается начиная с 4 сложности, но только с 6 появляется как постоянный противник.",
      title: "Желчный титан",
    },
  ] as Enemy[];

  automatons = [
    {
      id: 1,
      iconPath: "/static/automatons/TrooperImage.png",
      imagePath: "",
      dangerous:
        "В зависимости от своей разновидности, может либо быстро подобраться к вам с помощью реактивного ранца, или же просто убить вас с 1 выстрела, если вооружен ракетницей. Также может кинуть в вас гранату или занять турель, с которой будет вести огонь по вам.",
      tactics:
        "Держитесь на расстоянии, откидывайте их гранаты обратно и будет вам счастье.",
      difficulties: "Встречается на всех сложностях.",
      title: "Кавалерист",
    },
    {
      id: 2,
      iconPath: "/static/automatons/ComissarImage.png",
      imagePath: "",
      dangerous: "Быстро сближается и атакует своим клинком.",
      tactics:
        "Просто стреляйте ему в голову и даже группа комиссаров будет вам не страшна.",
      difficulties: "Встречается на всех сложностях.",
      title: "Комиссар",
    },
    {
      id: 3,
      iconPath: "/static/automatons/BerserkerImage.png",
      imagePath: "",
      dangerous:
        "Вооружен бензопилами и старается как можно быстрее сократить до вас дистанцию. Очень быстрый, также любит группироваться с такими же, как он.",
      tactics:
        "Вы можете убить его в уязвимые места, такие как голова или живот, а также можете просто отстрелить руки. Не забывайте параллельно с этим увеличивать дистанцию до него.",
      difficulties: "Встречается, начиная со 2 сложности.",
      title: "Берсерк",
    },
    {
      id: 4,
      iconPath: "/static/automatons/ScoutStriderImage.png",
      imagePath: "",
      dangerous:
        "Защищен броней, вооружен турелью и довольно быстр, на своем шагоходе",
      tactics:
        "У вас есть 2 варианта его уничтожения: 1) Можете обойти его сзади и уничтожить автоматона, пилотирующего его 2) Можете отстрелить ноги шагохода, воспользовавшись взрывчаткой, но тогда пилот выживет и продолжит стрелять по вам.",
      difficulties: "Встречается, начиная с 3 сложности.",
      title: "Разведчик",
    },
    {
      id: 5,
      iconPath: "/static/automatons/DevastatorImage.png",
      imagePath: "",
      dangerous:
        "Имеет огромную защиту, также в зависимости от варианта, может быть вооружен ракетницами, либо лазером и щитом.",
      tactics:
        "Единственная уязвимая зона — голова, стреляйте только туда, также если он вооружен ракетницами, можете стрелять в эту зону.",
      difficulties: "Встречается, начиная с 3 сложности.",
      title: "Разрушитель",
    },
    {
      id: 6,
      iconPath: "/static/automatons/HulkImage.png",
      imagePath: "",
      dangerous:
        "Существует 3 варианта вооружения: скорострельное ружье, огнемет или гранатомет. Также полностью покрыт броней. ",
      tactics:
        "Вы можете воспользоваться его медлительностью и атаковать 2 уязвимые зоны: 1) 2 выстрела в глаз с автопушки или снайперской винтовки будет достаточно 2) Также можете уничтожить его, стреляя в вентялиционное отверстие на спине.",
      difficulties: "Встречается, начиная с 4 сложности.",
      title: "Глыба",
    },
    {
      id: 7,
      iconPath: "/static/automatons/TankImage.png",
      imagePath: "",
      dangerous:
        "Несмотря на свою крайнюю медлительность, очень смертоносен. Любое попадание из его пушки не дает вам шанса на выживание.",
      tactics:
        "Используйте кого-нибудь из команды в качестве приманки, а сами переключите огонь на вентиляционное отверстие сзади башни. Альтернативой может быть вызов мощной стратагемы.",
      difficulties: "Встречается, начиная с 5 сложности.",
      title: "Танк",
    },
    {
      id: 8,
      iconPath: "/static/automatons/DropshipImage.png",
      imagePath: "",
      dangerous:
        "Опасности не представляет, но может сбросить большое количество новых автоматонов, которые будут мешать вам выполнять задачу.",
      tactics:
        "Взрывайте его двигатель с помощью ракетницы, или же можете вызвать стратагему в область высадки, чтобы уничтожить возникшую угрозу.",
      difficulties: "Встречается на всех сложностях.",
      title: "Десантный корабль",
    },
    {
      id: 9,
      iconPath: "",
      imagePath: "",
      dangerous:
        "Фактически это стационарный танк со всеми присущими ему чертами.",
      tactics:
        "Можете подойди в упор и стрелять в вентиляционное отверстие или же просто вызвать авиаудар. Главное не попадайте под ее линию огня, потому что даже 1 выстрел прекратит ваше существование.",
      difficulties: "Встречается, начиная с 3 сложности.",
      title: "Сторожевая башня",
    },
  ] as Enemy[];

  constructor() {
    makeAutoObservable(this);
  }
}

export const enemyTypeStore = new EnemyTypeStore();
