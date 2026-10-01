import { rubricExcellent } from "./task6.js";

export function rubricPerfect(score) {
  if (Number(score) === 11) return "Perfect";
  return rubricExcellent(score);
}