import { Emote } from "@/utils/dataInterfaces";

import { obtainingTypes } from "@/data/obtainingTypes";

export const victoryPoses = [
  {
    id: 1,
    name: "Салют",
    videoPath: "/static/VictoryPoses/SaluteVideo.mp4",
    videoPreviewPath: "/static/VictoryPosesVideoPreviews/SalutePreview.webp",
    price: 0,
    warbondIcon: obtainingTypes[0].icon,
  },
  {
    id: 2,
    name: "Аплодисменты",
    videoPath: "/static/VictoryPoses/ApplauseVideo.mp4",
    videoPreviewPath: "/static/VictoryPosesVideoPreviews/ApplausePreview.webp",
    price: 1,
    warbondIcon: obtainingTypes[5].icon,
  },
  {
    id: 3,
    name: "Пальцы-пистолеты",
    videoPath: "/static/VictoryPoses/FingerPistolsVideo.mp4",
    videoPreviewPath:
      "/static/VictoryPosesVideoPreviews/FingerPistolsPreview.webp",
    price: 2,
    warbondIcon: obtainingTypes[5].icon,
  },
  {
    id: 4,
    name: "Напрячь мышцы",
    videoPath: "/static/VictoryPoses/StrainMusclesVideo.mp4",
    videoPreviewPath:
      "/static/VictoryPosesVideoPreviews/StrainMusclesPreview.webp",
    price: 10,
    warbondIcon: obtainingTypes[5].icon,
  },
  {
    id: 5,
    name: "Расслабься",
    videoPath: "/static/VictoryPoses/RelaxVideo.mp4",
    videoPreviewPath: "/static/VictoryPosesVideoPreviews/RelaxPreview.webp",
    price: 30,
    warbondIcon: obtainingTypes[5].icon,
  },
  {
    id: 6,
    name: "Громкий возглас",
    videoPath: "/static/VictoryPoses/LoudExclamationVideo.mp4",
    videoPreviewPath:
      "/static/VictoryPosesVideoPreviews/LoudExclamationPreview.webp",
    price: 50,
    warbondIcon: obtainingTypes[5].icon,
  },
  {
    id: 7,
    name: "Представительный",
    videoPath: "/static/VictoryPoses/RepresentativeVideo.mp4",
    videoPreviewPath:
      "/static/VictoryPosesVideoPreviews/RepresentativePreview.webp",
    price: 8,
    warbondIcon: obtainingTypes[7].icon,
  },
  {
    id: 8,
    name: "Дробовик напоказ",
    videoPath: "/static/VictoryPoses/ShotgunForShowVideo.mp4",
    videoPreviewPath:
      "/static/VictoryPosesVideoPreviews/ShotgunForShowPreview.webp",
    price: 15,
    warbondIcon: obtainingTypes[7].icon,
  },
  {
    id: 9,
    name: "Коснуться головы",
    videoPath: "/static/VictoryPoses/TouchHeadVideo.mp4",
    videoPreviewPath: "/static/VictoryPosesVideoPreviews/TouchHeadPreview.webp",
    price: 32,
    warbondIcon: obtainingTypes[7].icon,
  },
  {
    id: 10,
    name: "Бюллетени всем!",
    videoPath: "/static/VictoryPoses/BulletinsForAllVideo.mp4",
    videoPreviewPath:
      "/static/VictoryPosesVideoPreviews/BulletinsForAllPreview.webp",
    price: 8,
    warbondIcon: obtainingTypes[9].icon,
  },
  {
    id: 11,
    name: "Вызов Адского десанта",
    videoPath: "/static/VictoryPoses/HelldiversCallVideo.mp4",
    videoPreviewPath:
      "/static/VictoryPosesVideoPreviews/HelldiversCallPreview.webp",
    price: 15,
    warbondIcon: obtainingTypes[9].icon,
  },
  {
    id: 12,
    name: "Пантомима",
    videoPath: "/static/VictoryPoses/PantomimeVideo.mp4",
    videoPreviewPath: "/static/VictoryPosesVideoPreviews/PantomimePreview.webp",
    price: 32,
    warbondIcon: obtainingTypes[9].icon,
  },
  {
    id: 13,
    name: "Высшая любовь",
    videoPath: "/static/VictoryPoses/HighestLoveVideo.mp4",
    videoPreviewPath:
      "/static/VictoryPosesVideoPreviews/HighestLovePreview.webp",
    price: 8,
    warbondIcon: obtainingTypes[10].icon,
  },
  {
    id: 14,
    name: "Пушки свободы",
    videoPath: "/static/VictoryPoses/GunsOfLibertyVideo.mp4",
    videoPreviewPath:
      "/static/VictoryPosesVideoPreviews/GunsOfLibertyPreview.webp",
    price: 15,
    warbondIcon: obtainingTypes[10].icon,
  },
] as Emote[];
