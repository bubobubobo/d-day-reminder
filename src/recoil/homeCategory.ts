import { atom } from "recoil";

export type THomeCategory = "디데이" | "더보기";

export const homeCategoryState = atom<THomeCategory>({
  key: "homeCategory",
  default: "디데이",
});
