export function getYearGap(year) {
  return new Date().getFullYear() - year;
}

export function calcAmountToPayByBrand(brand) {
  let increment;

  switch (brand) {
    case "American":
      increment = 1.15;
      break;
    case "European":
      increment = 1.3;
      break;
    case "Asian":
      increment = 1.05;
      break;

    default:
      break;
  }

  return increment;
}

export function getInsurancePlan(plan) {
  return plan === "basic" ? 1.2 : 1.5;
}

export function firstLetterUpperCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
