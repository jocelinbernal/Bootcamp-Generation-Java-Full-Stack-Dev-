export function rubricPassFail(score) {
  return Number(score) >= 5 ? "Pass" : "Fail";
}