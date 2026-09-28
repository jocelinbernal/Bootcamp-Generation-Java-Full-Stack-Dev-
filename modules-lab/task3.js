export function ageCalculator(year, month, day) {
  const today = new Date();
  const birthday = new Date(Number(year), Number(month) - 1, Number(day));

  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
}