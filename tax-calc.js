// Lorna Naula & Ssekajja Wavamuno Isaac
const calcTax = (income) => {
  if (income < 12_000) {
    return 0;
  } else if (income >= 12_000 && income <= 36_000) {
    return 0.2 * income;
  }
};

export default calcTax;
