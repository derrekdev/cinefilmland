export const generateMoney = (money: number, currency: string = "$") => {
  let numberScale = "";
  let currentMoney = 0;
  const numberToString = money.toString().length;

  if (numberToString >= 10) {
    numberScale = "B";
    currentMoney = money / 1000000000;
  } else if (numberToString < 10 && numberToString >= 7) {
    numberScale = "M";
    currentMoney = money / 1000000;
  } else if (numberToString < 7 && numberToString >= 4) {
    numberScale = "K";
    currentMoney = money / 1000;
  }

  return `${currency} ${currentMoney
    .toFixed(2)
    .replace(/[.,]00$/, "")}${numberScale}`;
};
