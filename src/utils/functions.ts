interface romanNumeral {
  symbol: string;
  value: number;
}

/*
    There are six instances where subtraction is used:
    I can be placed before V (5) and X (10) to make 4 and 9.
    X can be placed before L (50) and C (100) to make 40 and 90.
    C can be placed before D (500) and M (1000) to make 400 and 900.
*/
export const intToRoman = (num: number) => {
  const romanNumeralsList: romanNumeral[] = [
    { symbol: "M", value: 1000 },
    { symbol: "CM", value: 900 },
    { symbol: "D", value: 500 },
    { symbol: "CD", value: 400 },
    { symbol: "C", value: 100 },
    { symbol: "XC", value: 90 },
    { symbol: "L", value: 50 },
    { symbol: "XL", value: 40 },
    { symbol: "X", value: 10 },
    { symbol: "IX", value: 9 },
    { symbol: "V", value: 5 },
    { symbol: "IV", value: 4 },
    { symbol: "I", value: 1 },
  ];
  let output = "";
  for (let member of romanNumeralsList) {
    if (num >= member.value) {
      while (num >= member.value) {
        output += member.symbol;
        num -= member.value;
      }
    }
  }
  return output;
};
