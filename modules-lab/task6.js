import { rubricPassFail } from "./task5.js";

export function rubricExcellent(score) {
  if (Number(score) > 8) return "Excellent";
  return rubricPassFail(score);
}