import { Pages } from "@/types/app";

export const TITLE = "[LASTCHAN]";

export const PAGES: Pages = [
  {
    path: "/",
    title: "메이플 정보, 계산기",
    description: "",
    ad: false,
  },
  {
    path: "/calc/crystal",
    title: "보스 결정 수익 계산기",
    description: "강렬한 힘의 결정석 판매 수익 계산기",
    ad: true,
    image: "/images/crystal.png",
    favicon: "/images/crystal.png",
  },
];
