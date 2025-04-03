// Lorna Naula & Ssekajja Wavamuno Isaac
const calcTax = (income) => {
  if (income < 12_000 || isNaN(income)) {
    return 0;
  } else if (income >= 12_000 && income <= 36_000) {
    return roundOff(0.2 * income);
  } else {
    return roundOff(0.4 * income);
  }
};

const roundOff = (num) => {
  return Math.round(num * 100) / 100;
};

export default calcTax;
